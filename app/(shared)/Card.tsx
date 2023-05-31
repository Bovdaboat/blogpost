import React from "react";
import Link from "next/image";

type Props = {
 className?: string
 imageHeight?: string
 isSmallCard?: boolean
 isLongForm?: boolean
}

const Card = ({ className, imageHeight, isLongForm = false, isSmallCard = false }: Props) => {
    return (
        <div className={className}>
            <Link className="basis-full hover:opacity-70 href" >
                <div className="{`relative w-auto mb-3 ${imageHeight}`}">
                    image
                </div>
            </Link>
            <div className="basis-full">
                <Link href="/">
                    <h4 className={`font-bold hover:accent-green 
                    ${isSmallCard ? "text-base" : "text-lg"}
                        ${isSmallCard} ? "line-clamp-2" : ""`}
                    >Titile</h4>
                </Link>
                <div className={`${isSmallCard ? "my-2" : "flex my-3"} gap-3`}></div>
                <h5 className="font-semibold text-sm">Author</h5>
                <h6 className="text-wh-300 text-xs">date</h6>
            </div>
            <p className={`text-wh-500 ${isLongForm ? "line-clamp-5" : "line-clamp-3"}`}>
                snippets
            </p>
        </div>
    )
}


export default Card