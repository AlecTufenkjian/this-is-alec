import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component'

export const Link = ({ link, icon, name, copy, size }) => {

    const [copied, setCopied] = useState(false)

    if (link !== null) {
        return (
            <>
                <a className='link' href={link} target="_blank" rel='noopener noreferrer'>
                    <span className='fa'><FontAwesomeIcon icon={icon} size={size} /></span>
                    <p className='link-sub'>{name}</p>
                </a>
            </>
        )
    }
    return (
        <>
            <CopyToClipboard className='link' text={copy} onCopy={() => setCopied(true)}>
                <span>
                    <span className='fa'><FontAwesomeIcon icon={icon} size={size} /></span>
                    <p className='link-sub'>{ copied ? "Copied!" : "Copy email" }</p>
                </span>
            </CopyToClipboard>
        </>
    )
}