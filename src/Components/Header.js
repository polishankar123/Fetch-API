import React from "react";

const Header = () =>{
    const appStyle = {
        height: '50px',
        display: 'flex',
        backgroundColor: '#008eff',
        alignItems: 'center',
        textAlign: 'center',
        paddingLeft: '570px'
        };
    return(
        <div>
            <p style={appStyle}>Fetch API</p>
        </div>
    )
}

export default Header;