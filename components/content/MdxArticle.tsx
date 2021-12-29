import { FC, useMemo } from 'react';
import {getMDXComponent} from 'mdx-bundler/client';
import Quote from './Quote';
import PageIllustration from './PageIllustration';
import ExternalLink from './ExternalLink';
import InternalLink from './InternalLink';
import ArticleHeader from './ArticleHeader';
import { ArticleFrontmatter } from '../../types/PageTypes';

type MdxArticleProps = {
    code: string,
    frontmatter: ArticleFrontmatter
}

const  MdxArticle:FC<MdxArticleProps> = ({code}) => {
    const MdxComponent = useMemo(() => getMDXComponent(code), [code]);

    return (
        <MdxComponent components={{
            Quote: Quote,
            PageIllustration: PageIllustration,
            a: (ExternalLink as any),
            InternalLink: InternalLink,
            ArticleHeader: ArticleHeader
        }}/>
    )
}

export default MdxArticle;