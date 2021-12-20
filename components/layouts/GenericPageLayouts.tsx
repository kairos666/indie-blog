import { FC } from 'react';
import Footer from '../transverse/Footer';
import Header from '../transverse/Header';
type GenericPageLayoutProps = {};

const GenericPageLayout:FC<GenericPageLayoutProps> = ({ children }) => {
    return (
        <main>
            <Header />
            { children }
            <Footer />
        </main>
    )
}

export default GenericPageLayout;