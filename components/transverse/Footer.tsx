import { FC } from 'react';
import styles from '../../styles/cmpnts-partials/footer.module.scss';

type FooterProps = {};

const Footer:FC<FooterProps> = () => {
    return (
        <footer className={ styles['footer-container'] }>
            <p className={ styles['footer-copyright'] }>Capsule Corp. 2021</p>
        </footer>
    )
}

export default Footer;