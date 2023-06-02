import React from "react"
import SocialLinks from "@/app/(shared)/SocialLinks";
import Subscribe from "@/app/(shared)/Subscribe";


type Props = {}

const Sidebar = () => {
    return (
        <section>
            <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
                Subscribe and Follow
            </h4>
            <div className="my-5 mx-5">
                <SocialLinks isDark />
            </div>
            <Subscribe />
            <div className="bg-wh-900">
                    advert image
            </div>
            <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
                about the blog
            </h4>
            <div className="bg-wh-900">
                profile image
            </div>
        </section>
    )
}

export default Sidebar