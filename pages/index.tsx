import { listFilesInFolder, parseFrontmatter, readFile } from '../server-only-scripts/parser-utils';
import { format } from 'date-fns';

import type { GetStaticPropsContext, GetStaticPropsResult, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import GenericPageLayout from '../components/layouts/GenericPageLayouts';
import Time from '../components/content/Time';
import styles from '../styles/cmpnts-partials/home.module.scss';

type ArticleSummaryProps = {
    title: string,
    description: string,
    category: string,
    tags: string[],
    published: string,
    url: string
};

type HomeProps = {
    host: string,
    chronoArticles: ArticleSummaryProps[]
}

const Home: NextPage<HomeProps> = ({ host, chronoArticles }) => {
    const pageUrl:string = host;
    const title:string = 'Kaïros';
    const description:string = "Page d'accueil du cabinet de curiosités numériques";

    return (
        <>
            <Head>
                <title>{ title }</title>
                <meta name="description" content={ description } />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={ pageUrl } />
                <meta property="og:title" content={ title } />
                <meta property="og:description" content={ description } />
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={ pageUrl }/>
                <meta property="twitter:title" content={ title } />
                <meta property="twitter:description" content={ description } />
            </Head>
            <GenericPageLayout>
                <ul className={ styles.articlesLinkList }>
                    { chronoArticles.map(articleLink => <li key={ `${ articleLink.url }` }><HomeArticleLink {...articleLink} /></li>) }
                </ul>
            </GenericPageLayout>
        </>
    )
}

export const HomeArticleLink = ({ title, description, category, tags, published, url }:ArticleSummaryProps) => {
    return (
        <Link href={ url }>
            <a className={ styles.articleLink }>
                <mark><Time dateTime={ published } /></mark>
                <h2>{ title }</h2>
                <p>{ description }</p>
                <p><strong>{ category }</strong> : <em>{ tags.join(', ') }</em></p>
            </a>
        </Link>
    );
}

// SSG
export async function getStaticProps(_context:GetStaticPropsContext): Promise<GetStaticPropsResult<HomeProps>> {
    // chronologically sorted list of articles
    const mdxContentFilePathList = await listFilesInFolder('content');
    const processedArticleList = await Promise.all(mdxContentFilePathList.map(filePath => {
        return readFile(`content/${ filePath }`)
            .then(fileString => parseFrontmatter(fileString));
    }));

    // sort articles chronoligically and format data for JSX rendering (from latest to oldest)
    const sortedAndFormattedArticleList = processedArticleList
        .sort((a, b) => {
            const aTimestamp:number = (a.data.published as Date).getTime();
            const bTimestamp:number = (b.data.published as Date).getTime();

            return (aTimestamp < bTimestamp)
                ? 1
                : (aTimestamp > bTimestamp)
                ? -1
                : 0; 
        })
        .map(({ data }) => {
            return {
                title: data.title,
                description: data.description,
                category: data.category,
                tags: data.tags,
                published: format(data.published, 'yyyy-MM-dd'),
                url: (data.category)
                    ? `/article/${data.category}/${data.slug}`
                    : `/article/${data.slug}`
            }
        });

    return {
        props: {
            host: process.env.WEBSITE_HOST,
            chronoArticles: sortedAndFormattedArticleList
        }
    };
}

export default Home;
