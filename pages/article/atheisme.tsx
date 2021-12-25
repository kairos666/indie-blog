import type { NextPage } from 'next';
import Head from 'next/head';
import PageIllustration from '../../components/content/PageIllustration';
import GenericPageLayout from '../../components/layouts/GenericPageLayouts';

const AtheismCustomArticle: NextPage = () => {
    return (
        <>
            <Head>
                <title>L'athéisme</title>
                <meta name="title" content="L'athéisme" />
                <meta name="description" content="L'athéisme, pourquoi et quand se désigner comme athée ?" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://blog.com/article/atheisme" />
                <meta property="og:title" content="L'athéisme" />
                <meta property="og:description" content="L'athéisme, pourquoi et quand se désigner comme athée ?" />
                <meta property="og:image" content="https://blog.com/illustrations/samuel-martins-3U7HcqkIbb4-unsplash.jpg" />
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://blog.com/article/atheisme"/>
                <meta property="twitter:title" content="L'athéisme"/>
                <meta property="twitter:description" content="L'athéisme, pourquoi et quand se désigner comme athée ?"/>
                <meta property="twitter:image" content="https://blog.com/illustrations/samuel-martins-3U7HcqkIbb4-unsplash.jpg"/>
            </Head>
            <GenericPageLayout>
                <PageIllustration>
                    <img src="/illustrations/samuel-martins-3U7HcqkIbb4-unsplash.jpg" width="1920" height="1280" />
                    <p>Photo de <a href="https://unsplash.com/@samuelmartins7" target="_blank" rel="noopener noreferrer">Samuel Martins</a> sur <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a></p>
                </PageIllustration>             
            </GenericPageLayout>
        </>
    )
}

export default AtheismCustomArticle;
