import React from 'react';
import ResumeYarin from '../../assets/Resume_Yarinbz.pdf'
import './Resume.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileDownload} from "@fortawesome/free-solid-svg-icons";

function Resume() {
    return (
        <div className={"Resume"}>
            <div>
                <a href={ResumeYarin} download={'YarinBenZikri-Resume'}>
                    <div className={"resume ResumeBtn"}>
                        <div className={'buttonLogo'}>
                            <FontAwesomeIcon icon={faFileDownload} size='2x' className={'resumeIcon'} />
                        </div>
                    </div>
                </a>
            </div>
            <h3>Resume</h3>
         </div>

    );
}

export default Resume;