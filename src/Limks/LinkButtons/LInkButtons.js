import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'




import './LinkButttons.scss';


function LInkButtons(props) {
    return (
        <div className={"LinkButtons"}>
            <div className={"buttonsContainer"}>
                <div className={'leftButtons'}>
                    <div className={"facebook buttonHalo"}>
                        <div className={'buttonLogo'}>
                            <a href={'https://www.facebook.com/yarinbz'} target={'_blank'}>
                                <FontAwesomeIcon icon={faFacebookF} size='2x' className={'facebookIcon'} />
                            </a>
                        </div>
                    </div>
                    <div className={"github  buttonHalo"}>
                        <div className={'buttonLogo'}>
                            <a href={"https://github.com/Yarinvanzikri"} target={'_blank'}>
                                <FontAwesomeIcon icon={faGithub} size='2x' className={"githubIcon"} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={'rightButtons'}>
                    <div className={"linkedin buttonHalo"}>
                        <div className={'buttonLogo'}>
                            <a href={"https://www.linkedin.com/in/yarin-ben-zikri-8989aa22/"} target={"_blank"}>
                                <FontAwesomeIcon icon={faLinkedinIn} size='2x' className={"linkedinIcon"}/>
                            </a>
                        </div>
                    </div>
                    <div className={"whatsapp buttonHalo"}>
                        <div className={'buttonLogo'}>
                            <a href={"https://wa.me/972507185485"} target={"_blank"}>
                                <FontAwesomeIcon icon={faWhatsapp} size='2x' className={"whatsappIcon"}/>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LInkButtons;