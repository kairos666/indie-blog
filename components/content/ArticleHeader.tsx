import { FC } from 'react';
import Time from './Time';

type ArticleHeaderProps = {
    publishedDate: string,
    tags: null|string[]
};

const ArticleHeader:FC<ArticleHeaderProps> = ({ publishedDate, tags, children }) => {
    // leave early if no trags provided
    if(!tags || tags.length === 0) return null;
    
    return (
        <header>
            <Time dateTime={ publishedDate } />
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