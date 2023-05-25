 import React from "react";
import Link from "next/image";
import Twitter from "/public/assets/social_twitter.png";
 import Facebook from "/public/assets/social_facebook.png";
 import Instagram from "/public/assets/social_instagram.png";
 import Google from "/public/assets/social_google.png";
 import Discord from "/public/assets/social_discord.png";
 import Image from "next/image";

 type props = {
     isDark?: boolean;
 }

const SocialLinks = ({ isDark }: props) => {
    return (
        <div className="flex justify-between items-center gap-7">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <Image
                    className={`${isDark ? "brightness-0" : ""} "hover:opacity-50"`}
                    alt="twitter"
                    src={Twitter}
                    width={20}
                    height={20}
                />
            </a>
        </div>
    )
}

export default SocialLinks