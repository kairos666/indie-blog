import { FC, useMemo } from 'react';
import {getMDXComponent} from 'mdx-bundler/client';

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
                <MdxComponent />
            </main>
        </>
    )
}

export default MdxArticle;