import { FC, Children, ReactElement, ReactNode } from 'react';
import styles from '../../styles/cmpnts-partials/page-illustration.module.scss';

type PageIllustrationProps = {};

const PageIllustration:FC<PageIllustrationProps> = ({ children }) => {
    // at each render to ensure unemptiness at build time
    const childrenArray = Children.toArray(children);
    // take first found image
    const imgNode:ReactNode = childrenArray.find(child => ((child as ReactElement).type === 'img'));
    // take all non image nodes
    const figcaptionNode:ReactNode[] = childrenArray.filter(child => ((child as ReactElement).type !== 'img'));

    return (
        <figure className={ styles['page-illustration-container'] }>
            { imgNode }
            { figcaptionNode && figcaptionNode.length !== 0
                ? <figcaption className={ styles['page-illustration-caption'] }>{ figcaptionNode }</figcaption>
                : null
            }
        </figure>
    )
}

export default PageIllustration;