import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter,faFacebook,faInstagram,faYoutube } from "@fortawesome/free-brands-svg-icons"
import "./index.css"

export default function Footer(){

    const icons=[
        {iconsrc:faTwitter},
        {iconsrc:faFacebook},
        {iconsrc:faInstagram},
        {iconsrc:faYoutube},
    ]
    return(
        <footer>
            <div className="social-media-container" >

            {
                icons?.length > 0 && icons?.map(({iconsrc}, index) => (
                    <span key={index} className="icon">
                        <FontAwesomeIcon 
                            icon={iconsrc}
                            style={{color:"white", height: "2rem"}} 
                        />
                    </span>
                ))
            }
            </div>
            <h1 id="copyright">Copyright © 2024 - SoftyEducation .  All Right Reserved</h1>
        </footer>
    )
}