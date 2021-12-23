import React from 'react';
import logo from '../../assets/screen4.png'
import './Logo.scss';

function Logo(props) {
    return (
        <div>
            <div className={'logo'}>
                <img src={logo} alt={'coding'}/>
            </div>
            <div className={'mainHeader'}>
                <h1>Yarin Ben - Zikri</h1>
            </div>
            <div className={'secondaryHeader'} >
                <h3 style={{color: "#2276cc"}}>Full - Stack Developer</h3>
            </div>
        </div>
    );
}

export default Logo;