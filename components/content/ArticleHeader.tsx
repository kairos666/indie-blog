import { FC } from 'react';

type ArticleHeaderProps = {
    publishDate: string,
    tags: null|string[]
};

const ArticleHeader:FC<ArticleHeaderProps> = ({ publishDate, tags, children }) => {
    // leave early if no trags provided
    if(!tags || tags.length === 0) return null;

    return (
        <header>
            <time dateTime={ publishDate }>27 décembre 2021</time>
            <ArticleTags tags={ tags } />
            { children }
        </header>
    )
}

export default ArticleHeader;

type ArticleTagsProps = {
    tags: null|string[]
};

// sub components
export const ArticleTags:FC<ArticleTagsProps> = ({ tags }) => {
    // leave early if no trags provided
    if(!tags || tags.length === 0) return null;

    return (
        <p>{ tags.join(', ') }</p>
    )
}