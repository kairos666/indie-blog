import { FC } from 'react';
type HeaderProps = {};

const Header:FC<HeaderProps> = () => {
    return (
        <header>
            <h1>Kaïros</h1>
            <p>Cabinet de curiosités numériques</p>
        </header>
    )
}

export default Header;