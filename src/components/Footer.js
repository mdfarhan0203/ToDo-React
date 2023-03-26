import React from 'react'

function Footer(){
    const year =new Date().getFullYear();
    return (
    <footer>
    <p>Copyright ⓒ {year}</p>
    <h4>Made With ❤️ <span className='author'>Md Farhan</span></h4>
    </footer>
    )
}
export default Footer;