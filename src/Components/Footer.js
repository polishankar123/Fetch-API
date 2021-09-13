import React from "react";

const Footer = () =>{
    const appStyle = {
        height: '20px',
        display: 'flex',
        backgroundColor: '#008eff',
        alignItems: 'center',
        textAlign: 'center',
        paddingLeft: '570px',
        fontColor: 'red',
        fontSize: '12px',
        };
    return(
        <div>
            <p style={appStyle}>Fetch API poli@2021</p>
        </div>
    )
}

export default Footer;