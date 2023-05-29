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
            <Link className="basis-full hover:opacity-70 href">
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
            </div>
        </div>
    )
}


export default Card