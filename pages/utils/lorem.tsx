import type { NextPage } from 'next';
import Head from 'next/head';
import Quote from '../../components/content/Quote';
import GenericPageLayout from '../../components/layouts/GenericPageLayouts';

const Lorem: NextPage = () => {
    return (
        <>
            <Head>
                <title>Lorem ipsum</title>
                <meta name="description" content="page de test pour le thème graphique du site" />
            </Head>
            <GenericPageLayout>
                <section>
                    <h1 style={ { fontFamily: 'cheddar gothic', fontSize: '3rem', fontWeight: 400 } }>L&apos;iridescence industrielle de la méchanceté</h1>
                    <h1 style={ { fontFamily: 'metropolis', fontSize: '3rem', fontWeight: 400 } }>L&apos;opalescente foisonnance de l&apos;art nouveau Nancéen</h1>
                    <h1 style={ { fontFamily: 'ever looser', fontSize: '3rem', fontWeight: 400 } }>L&apos;irruption du grondement sourd de la cité</h1>
                    <hr />
                    <h1>regular h1</h1>
                    <h2>regular h2</h2>
                    <h3>regular h3</h3>
                    <h4>regular h4</h4>
                    <h5>regular h5</h5>
                    <h6>regular h6</h6>
                    <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                    <p><del>This line of text is meant to be treated as deleted text.</del></p>
                    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                    <p><u>This line of text will render as underlined.</u></p>
                    <p><small>This line of text is meant to be treated as fine print.</small></p>
                    <p><strong>This line rendered as bold text.</strong></p>
                    <p><em>This line rendered as italicized text.</em></p>
                    <p><abbr title="attribute">attr</abbr></p>
                    <p><abbr title="HyperText Markup Language">HTML</abbr></p>
                    <Quote>
                        <p>A well-known quote, contained in a blockquote element.</p>
                    </Quote>
                    <Quote>
                        <p>A well-known quote, contained in a blockquote element.</p>
                        <p>A well-known quote, contained in a blockquote element.</p>
                        <cite title="Source Title">Someone famous in Source Title</cite>
                    </Quote>
                    <ul>
                        <li>This is a list.</li>
                        <li>It appears completely unstyled.</li>
                        <li>Structurally, it&apos;s still a list.</li>
                        <li>However, this style only applies to immediate child elements.</li>
                        <li>Nested lists:
                            <ul>
                                <li>are unaffected by this style</li>
                                <li>will still show a bullet</li>
                                <li>and have appropriate left margin</li>
                            </ul>
                        </li>
                        <li>This may still come in handy in some situations.</li>
                    </ul>
                    <ol>
                        <li>This is a list.</li>
                        <li>It appears completely unstyled.</li>
                        <li>Structurally, it&apos;s still a list.</li>
                        <li>However, this style only applies to immediate child elements.</li>
                        <li>Nested lists:
                            <ol>
                                <li>are unaffected by this style</li>
                                <li>will still show a bullet</li>
                                <li>and have appropriate left margin</li>
                            </ol>
                        </li>
                        <li>This may still come in handy in some situations.</li>
                    </ol>
                    <dl>
                        <dt>Description lists</dt>
                        <dd>A description list is perfect for defining terms.</dd>

                        <dt>Term</dt>
                        <dd>
                            <p>Definition for the term.</p>
                            <p>And some more placeholder definition text.</p>
                        </dd>

                        <dt>Another term</dt>
                        <dd>This definition is short, so no extra paragraphs or anything.</dd>

                        <dt>Truncated term is truncated</dt>
                        <dd>This can be useful when space is tight. Adds an ellipsis at the end.</dd>

                        <dt>Nesting</dt>
                        <dd>
                            <dl>
                                <dt>Nested definition list</dt>
                                <dd>I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
                            </dl>
                        </dd>
                    </dl>
                </section>
                <section>
                    <h2>Thématiques</h2>
                    <ol>
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

export default Lorem;
