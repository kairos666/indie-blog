import { bundleMDX } from 'mdx-bundler';
import * as path from 'path';

import type { GetStaticPropsContext, GetStaticPropsResult, NextPage } from 'next';
import Head from 'next/head';
import MdxArticle from '../../components/content/MdxArticle';
import GenericPageLayout from '../../components/layouts/GenericPageLayouts';

type MdxLoremProps = {
    code: string,
    frontmatter: {
        title: string,
        published: string,
        description: string
    }
}

const MdxLorem: NextPage<MdxLoremProps> = ({ code, frontmatter }) => {
    return (
        <>
            <Head>
                <title>{ frontmatter.title }</title>
                <meta name="description" content={ frontmatter.description } />
            </Head>
            <GenericPageLayout>
                <MdxArticle code={ code } frontmatter={ frontmatter } />
            </GenericPageLayout>
        </>
    )
}

// SSG
export async function getStaticProps(_context:GetStaticPropsContext): Promise<GetStaticPropsResult<MdxLoremProps>> {
    // read MDX file and generate react component (serializable)
    const mdxResult = await bundleMDX({
        file: path.join(process.cwd(), 'content/test-post.mdx'),
        cwd: path.join(process.cwd(), 'content/')
    });
    const { code, frontmatter } = mdxResult;

    return {
        props: {
            code,
            frontmatter: {
                title: frontmatter.title,
                published: frontmatter.published.toString(),
                description: frontmatter.description
            }
        },
    };
}

export default MdxLorem;
