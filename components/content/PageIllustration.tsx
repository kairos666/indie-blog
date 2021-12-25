import { FC, Children, ReactElement, useState, useEffect } from 'react';
import styles from '../../styles/cmpnts-partials/page-illustration.module.scss';

type PageIllustrationProps = {};

const PageIllustration:FC<PageIllustrationProps> = ({ children }) => {
    const [imgNode, setImgNode] = useState(null);
    const [figcaptionNode, setFigcaptionNode] = useState(null);

    useEffect(() => {
        const figCaption = Children.map(children, child => {
                if((child as ReactElement).type === 'img') {
                    setImgNode(child);
                    return null;
                } else {
                    return child;
                }
            });
        setFigcaptionNode(figCaption);
    }, [children]);

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