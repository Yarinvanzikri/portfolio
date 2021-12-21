import React from 'react';
import ResumeYarin from '../../assets/Resume_Yarinbz.pdf'
import './Resume.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileDownload} from "@fortawesome/free-solid-svg-icons";

function Resume() {
    return (
        <div className={"Resume"}>
            <div>
                <div className={"resume ResumeBtn"}>
                    <a href={ResumeYarin} download={'YarinBenZikri-Resume'}>
                        <div className={'buttonLogo'}>
                            <FontAwesomeIcon icon={faFileDownload} size='2x' className={'resumeIcon'} />
                        </div>
                    </a>
                    <h3>Resume</h3>
                </div>
            </div>
         </div>

    );
}

export default Resume;