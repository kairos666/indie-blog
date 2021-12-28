import { FC, ReactNode, Children, ReactElement } from 'react';
import styles from '../../styles/cmpnts-partials/quote.module.scss';

type QuoteProps = {};

const Quote:FC<QuoteProps> = ({ children }) => {
    let citationNode:ReactNode = null;
    const childrenWithoutCitation:ReactNode = Children.map(children, child => {
        // citation found (only one considered)
        if(!citationNode && (child as ReactElement).type === 'cite') {
            citationNode = child;
            return null;
        }

        return child;
    });

    if(!childrenWithoutCitation) {
        // error if no children provided
        throw new Error('<Quote> used without content');
    }

    if(!citationNode) {
        // simple quote without citation
        return (
            <blockquote>
                { children }
            </blockquote>
        )
    }

    return (
        <figure className={ styles['blockquote-with-citation'] }>
            <blockquote>
                { childrenWithoutCitation }
            </blockquote>
            <figcaption>
                { citationNode }
            </figcaption>
        </figure>
    )
}

export default Quote;