import Link from 'next/link';
import { FC } from 'react';

type InternalLinkProps = {
    href: string
};

const InternalLink:FC<InternalLinkProps> = ({ href, children, ...otherProps }) => {
    return (
        <Link href={ href } {...otherProps}><a>{ children }</a></Link>
    )
}

export default InternalLink;