import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import GenericPageLayout from '../components/layouts/GenericPageLayouts';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Kaïros - accueil</title>
                <meta name="description" content="Page d'accueil du cabinet de curiosités numériques" />
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" href="/icon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="icon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="manifest" href="site.webmanifest" />
                <meta name="theme-color" content="#fafafa" />
                <meta property="og:title" content=""/>
                <meta property="og:type" content=""/>
                <meta property="og:url" content=""/>
                <meta property="og:image" content=""/>
            </Head>
            <GenericPageLayout>
                <section>
                    <h2>Thématiques</h2>
                    <ol>
                        <li>
                            <Link href="/utils/lorem">
                                <a title="page technique">
                                    <span>Lorem ipsum dolor sit amet</span>
                                    <time dateTime="2021-12-18">23 décembre 2021</time>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <a href="#">
                                <span>Histoires rêvées</span>
                                <time dateTime="2021-12-20">20 décembre 2021</time>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Chroniques de xiao xinzang</span>
                                <time dateTime="2021-12-19">19 décembre 2021</time>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Dieux illogiques</span>
                                <time dateTime="2021-12-18">18 décembre 2021</time>
                            </a>
                        </li>
                    </ol>
                </section>
                <section>
                    <h2>Articles</h2>
                    <ol>
                        <li>
                            <a href="#">
                                <span>Attaque de Kaiju: manuel de survie</span>
                                <time dateTime="2021-12-17">17 décembre 2021</time>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Attaque de zombies: manuel de survie</span>
                                <time dateTime="2021-12-16">16 décembre 2021</time>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Attaque de fanatiques religieux: manuel de survie</span>
                                <time dateTime="2021-12-15">15 décembre 2021</time>
                            </a>
                        </li>
                    </ol>
                </section>
            </GenericPageLayout>
        </>
    )
}

export default Home;
