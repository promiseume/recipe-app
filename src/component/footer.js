import React from 'react'
import { FaLinkedinIn,FaEnvelope,FaTwitterSquare,FaGithubSquare } from 'react-icons/fa'


export default function Footer() {
    return (
        <div id='footer' className='footer'>
            <>
            <h3>Copyright @ Promise 2021,All right reserved</h3>
            </>
            <span>
            <a href='https://twitter.com/ume_ngozi'><FaTwitterSquare/></a>
            <a href='https://github.com/promiseume'><FaGithubSquare/></a>
            <a href='https://discord.com/channels/@me/897255829202411540/918530151061549137'><FaLinkedinIn/></a>
        </span>
        </div>
    )
}
