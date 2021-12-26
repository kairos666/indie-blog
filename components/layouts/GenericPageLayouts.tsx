import { FC, useEffect, useState } from 'react';
import Footer from '../transverse/Footer';
import Header from '../transverse/Header';
import styles from '../../styles/cmpnts-partials/layouts.module.scss';
import bgPattern from '../../scripts/genericImgBgPattern';
type GenericPageLayoutProps = {};

const GenericPageLayout:FC<GenericPageLayoutProps> = ({ children }) => {
    const [bgPatternProperties, setBgPatternProperties] = useState(null);

    // generate pattern once after mount (reading css4 variable)
    useEffect(() => {
        setBgPatternProperties(bgPattern({ bgColor: '#efefef', fill: 'var(--alt-accent)', opacity: 0.2 }));
    }, [children]);

    return (
        <div className={ styles['generic-layout'] } style={ bgPatternProperties }>
            <Header />
            <main>{ children }</main>
            <Footer />
        </div>
    )
}

export default GenericPageLayout;