import Link from 'next/link';
import { FC } from 'react';
import styles from '../../styles/cmpnts-partials/header.module.scss';

type HeaderProps = {};

const Header:FC<HeaderProps> = () => {
    return (
        <header className={ styles['header-container'] }>
            <div className={ styles['header-inner-container'] }>
                <Link href="/">
                    <a className={ styles['header-home-link'] } title="aller à l'accueil">
                        <h1 className={ styles['header-logo'] }>Kaïros</h1>
                        <p className={ styles['header-motto'] }>Cabinet de curiosités numériques</p>
                    </a>
                </Link>
            </div>
        </header>
    )
}

export default Header;