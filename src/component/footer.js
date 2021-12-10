import React from 'react'
import { FaLinkedinIn,FaEnvelope,FaTwitterSquare,FaGithubSquare } from 'react-icons/fa'


export default function Footer() {
    return (
        <div className='footer'>
            <>
            <h3>Copyright,Promise 2021,All right reserved</h3>
            </>
            <>
            <h1><a href='https://twitter.com/ume_ngozi'><FaTwitterSquare/></a></h1>
            <h1><a href='https://github.com/promiseume'><FaGithubSquare/></a></h1>
            <h1><a href='https://discord.com/channels/@me/897255829202411540/918530151061549137'><FaLinkedinIn/></a></h1>
        </>
        </div>
    )
}
