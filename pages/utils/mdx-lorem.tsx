import { bundleMDX } from 'mdx-bundler';
import { sassPlugin } from 'esbuild-sass-plugin';
import * as path from 'path';

import type { GetStaticPropsContext, GetStaticPropsResult, NextPage } from 'next';
import Head from 'next/head';
import MdxArticle from '../../components/content/MdxArticle';
import Quote from '../../components/content/Quote';
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
        cwd: path.join(process.cwd(), 'content/'),
        // esbuildOptions(options) {
        //     options.target = ['es2020'];

        //     // path for writing generated css and images
        //     options.publicPath = '/mdx';
        //     options.outdir = path.join(process.cwd(), 'public/mdx');
        //     options.write = true;

        //     // scss module loader
        //     if(options.plugins) options.plugins = [ sassPlugin(), ...options.plugins];
        
        //     return options;
        // }
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
