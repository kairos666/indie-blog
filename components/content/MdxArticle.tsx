import { FC, useMemo } from 'react';
import {getMDXComponent} from 'mdx-bundler/client';
import Quote from './Quote';
import PageIllustration from './PageIllustration';

type MdxArticleProps = {
    code: string,
    frontmatter: any
}

const  MdxArticle:FC<MdxArticleProps> = ({code, frontmatter}) => {
    const MdxComponent = useMemo(() => getMDXComponent(code), [code]);

    return (
        <>
            <header>
                <h1>{ frontmatter.title }</h1>
                <p>{ frontmatter.description }</p>
            </header>
            <main>
                <MdxComponent components={{
                    Quote: Quote,
                    PageIllustration: PageIllustration
                }}/>
            </main>
        </>
    )
}

export default MdxArticle;