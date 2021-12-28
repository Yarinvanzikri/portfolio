import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {faFileDownload} from "@fortawesome/free-solid-svg-icons";
import ResumeYarin from "../../assets/Resume_Yarinbz.pdf";
import './LinkButttons.scss';




function LInkButtons(props) {
    return (
        <div className={"LinkButtons"}>
            <div className={"buttonsContainer"}>
                    <a href={'https://www.facebook.com/yarinbz'} target={'_blank'} rel={'noreferrer'}>
                        <div className={"facebook buttonHalo"}>
                            <div className={'buttonLogo'}>
                                <FontAwesomeIcon icon={faFacebookF} size='2x' className={'facebookIcon icon'} />
                            </div>
                        </div>
                    </a>
                    <a href={"https://www.github.com/Yarinvanzikri"} target={'_blank'} rel={'noreferrer'}>
                        <div className={"github  buttonHalo"}>
                            <div className={'buttonLogo'}>
                                <FontAwesomeIcon icon={faGithub} size='2x' className={"githubIcon icon"} />
                            </div>
                        </div>
                    </a>

                        <a href={ResumeYarin} download={'YarinBenZikri-Resume'}>
                            <div className={"resume buttonHalo "}>
                                <div className={'buttonLogo'}>
                                    <FontAwesomeIcon icon={faFileDownload} size='2x' className={'resumeIcon icon'} />
                                </div>
                            </div>
                        </a>
                    <a href={"https://wa.me/972507185485"} target={"_blank"} rel={'noreferrer'}>
                        <div className={"whatsapp buttonHalo"}>
                            <div className={'buttonLogo'}>
                                <FontAwesomeIcon icon={faWhatsapp} size='2x' className={"whatsappIcon icon"}/>
                            </div>
                        </div>
                    </a>
                    <a href={"https://www.linkedin.com/in/yarin-ben-zikri-8989aa22/"} target={"_blank"} rel={'noreferrer'}>
                    <div className={"linkedin buttonHalo"}>
                        <div className={'buttonLogo'}>
                            <FontAwesomeIcon icon={faLinkedinIn} size='2x' className={"linkedinIcon icon"}/>
                        </div>
                    </div>
                    </a>
            </div>
        </div>
    );
}

export default LInkButtons;