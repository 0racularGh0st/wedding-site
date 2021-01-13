import React from 'react'
import './invitation.scss'
export default function Invitation() {
    return (
        <>
        <div className="invitation-main-container">
            <img src="/invitation.svg" className="invite" alt="invitation" aria-label="invitation"/>
            <img src="/gifts.svg" className="invite note" alt="note" aria-label="note"/>
        </div>
        </>
    )
}
