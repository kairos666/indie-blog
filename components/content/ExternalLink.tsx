import { FC } from 'react';

type ExternalLinkProps = {
    href: string
};

const ExternalLink:FC<ExternalLinkProps> = ({ href, children, ...otherProps }) => {
    return (
        <a href={ href } {...otherProps} target="_blank" rel="noopener noreferrer">{ children }</a>
    )
}

export default ExternalLink;