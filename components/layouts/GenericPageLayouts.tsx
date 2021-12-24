import { FC } from 'react';
import Footer from '../transverse/Footer';
import Header from '../transverse/Header';
import styles from '../../styles/cmpnts-partials/layouts.module.scss';
type GenericPageLayoutProps = {};

const GenericPageLayout:FC<GenericPageLayoutProps> = ({ children }) => {
    return (
        <div className={ styles['generic-layout'] }>
            <Header />
            <main>{ children }</main>
            <Footer />
        </div>
    )
}

export default GenericPageLayout;