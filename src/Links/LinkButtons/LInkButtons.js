import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'




import './LinkButttons.scss';


function LInkButtons(props) {
    return (
        <div className={"LinkButtons"}>
            <div className={"buttonsContainer"}>
                <div className={'leftButtons'}>
                    <a href={'https://www.facebook.com/yarinbz'} target={'_blank'} rel={'noreferrer'}>
                        <div className={"facebook buttonHalo"}>
                            <div className={'buttonLogo'}>
                                <FontAwesomeIcon icon={faFacebookF} size='2x' className={'facebookIcon'} />
                            </div>
                        </div>
                    </a>
                    <a href={"https://www.github.com/Yarinvanzikri"} target={'_blank'} rel={'noreferrer'}>
                        <div className={"github  buttonHalo"}>
                            <div className={'buttonLogo'}>
                                <FontAwesomeIcon icon={faGithub} size='2x' className={"githubIcon"} />
                            </div>
                        </div>
                    </a>
                </div>
                <div className={'rightButtons'}>
                    <a href={"https://www.linkedin.com/in/yarin-ben-zikri-8989aa22/"} target={"_blank"} rel={'noreferrer'}>
                        <div className={"linkedin buttonHalo"}>
                            <div className={'buttonLogo'}>
                                <FontAwesomeIcon icon={faLinkedinIn} size='2x' className={"linkedinIcon"}/>
                            </div>
                        </div>
                    </a>
                    <a href={"https://wa.me/972507185485"} target={"_blank"} rel={'noreferrer'}>
                        <div className={"whatsapp buttonHalo"}>
                            <div className={'buttonLogo'}>
                                <FontAwesomeIcon icon={faWhatsapp} size='2x' className={"whatsappIcon"}/>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LInkButtons;