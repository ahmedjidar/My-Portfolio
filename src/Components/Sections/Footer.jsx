import React from "react";
import myInformation from "../../Constants/myInformation";

const Footer = () => {
    return(
        <footer className="bg-gray-900 text-white text-sm text-pretty leading-relaxed text-center font-light py-8">
            <p>&copy; {new Date().getFullYear()} {myInformation[0].footer.fullName}</p>
            <p>{myInformation[0].footer.location}</p>
        </footer>
    )
}

export default Footer;