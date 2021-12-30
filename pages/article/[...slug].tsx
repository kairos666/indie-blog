import { bundleMDX } from 'mdx-bundler';
import * as path from 'path';
import { listFilesInFolder, parseFrontmatter, readFile } from '../../server-only-scripts/parser-utils';

import type { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, NextPage } from 'next';
import Head from 'next/head';
import MdxArticle from '../../components/content/MdxArticle';
import GenericPageLayout from '../../components/layouts/GenericPageLayouts';
import { ArticleFrontmatter } from '../../types/PageTypes';

type ArticleProps = {
    host: string,
    code: string,
    frontmatter: ArticleFrontmatter
}

type ArticlePathParams = {
    slug: string[]
}

const Article: NextPage<ArticleProps> = ({ host, code, frontmatter }) => {
    const pageUrl:string = `${host}/article/${ encodeURIComponent(frontmatter.category) }/${ encodeURIComponent(frontmatter.slug) }`;

    return (
        <>
            <Head>
                <title>{ frontmatter.title }</title>
                <meta name="description" content={ frontmatter.description } />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={ pageUrl } />
                <meta property="og:title" content={ frontmatter.title } />
                <meta property="og:description" content={ frontmatter.description } />
                { frontmatter.metaIllustration
                    ? <meta property="og:image" content={ `${host}/${ encodeURIComponent(frontmatter.metaIllustration) }` } />
                    : null
                }
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={ pageUrl }/>
                <meta property="twitter:title" content={ frontmatter.title } />
                <meta property="twitter:description" content={ frontmatter.description } />
                { frontmatter.metaIllustration
                    ? <meta property="twitter:image" content={ `${host}/${ encodeURIComponent(frontmatter.metaIllustration) }` } />
                    : null
                }
            </Head>
            <GenericPageLayout>
                <MdxArticle code={ code } frontmatter={ frontmatter } />
            </GenericPageLayout>
        </>
    )
}

// SSG
export async function getStaticPaths(): Promise<GetStaticPathsResult<ArticlePathParams>> {
    const mdxContentFilePathList = await listFilesInFolder('content');
    const processedMatterAndFilePath = await Promise.all(mdxContentFilePathList.map(filePath => {
        return readFile(`content/${ filePath }`)
            .then(fileString => parseFrontmatter(fileString))
            .then(mdxParsed => ({ frontMatter: mdxParsed.data, filePath }));
    }))

    // analyze content distribution
    const uniqueFiles:string[] = Array.from(new Set(mdxContentFilePathList).values());
    let uniqueTags:string[] = [];
    let uniqueCategories:string[] = [];
    const paths:{ params: { slug: string[] } }[] = [];
    processedMatterAndFilePath.forEach(({ frontMatter }) => {
        uniqueCategories.push(frontMatter.category);
        uniqueTags.push(...frontMatter.tags);

        // leave early if hidden content in production
        if(process.env.NODE_ENV === 'production' && frontMatter.category === 'hidden') return;

        // create path
        const slug:string[] = (frontMatter.category)
            ? [frontMatter.category, frontMatter.slug]
            : [frontMatter.slug];
        paths.push({ params: { slug } });
    });
    const hiddenArticlesCount:number = uniqueCategories.filter(cat => cat === 'hidden').length ?? 0;
    uniqueTags = Array.from(new Set(uniqueTags).values());
    uniqueCategories = Array.from(new Set(uniqueCategories).values());
    console.log('\n', 'MDX Articles --- ');
    console.log('\n', `${ uniqueFiles.length } article files (${ hiddenArticlesCount } hidden)`);
    console.log('\n', `available categories: ${ uniqueCategories.join(', ') }`);
    console.log('\n', `available tags: ${ uniqueTags.join(', ') }`);

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context:GetStaticPropsContext): Promise<GetStaticPropsResult<ArticleProps>> {
    // get slug and optional categories from params
    const slugParamArrayClone = [...(context?.params as ArticlePathParams)?.slug];
    const slug:string = slugParamArrayClone.pop();
    const category:string = (slugParamArrayClone.length !== 0)
        ? slugParamArrayClone[0] // just take one ignore if more are provided
        : null;

    // read MDX file and generate react component (serializable)
    const mdxResult = await bundleMDX({
        file: path.join(process.cwd(), `content/${ category ? `${ category }-` : '' }${ slug }.mdx`),
        cwd: path.join(process.cwd(), 'content/')
    });
    const { code, frontmatter } = mdxResult;

    return {
        props: {
            host: process.env.WEBSITE_HOST,
            code,
            frontmatter: ({ ...frontmatter, published: frontmatter?.published?.toISOString() } as ArticleFrontmatter)
        }
    };
}

export default Article;
