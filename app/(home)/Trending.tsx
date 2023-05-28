import React from "react"
import Link from "next/link"


type TrendingCardProps = {
    className?: string
}

const TrendingCard = ({ className }: TrendingCardProps) => {
    return (
        <Link className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
        href="/"
        >
            <div className="z-0 relative-ful h-full bg-wh-500">
                image this is going be the change that is going eather fix or break this
            </div>
            <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual"></div>
            <div className="absolute z-2 bottom-0 left-0 p-3">
                <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900"></h4>
            </div>
        </Link>
    )
}

type Props = {};


const Trending = (Props:string) => {
    return (
        <section className='pt-3 pb-10'>
            <div className="flex items-center gap-3">
                <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold">
            Treading
                </div>
                <p className="text-sm">
                    Be the first to be amazed of how cool this all is, and dont forget to add your favorite take 👀
                </p>
            </div>
                <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
                    <div className='col-span-2 row-span-2 bg-wh-500'></div>
                    <div className='col-span-2 row-span-1 bg-wh-500'></div>
                    <div className='col-span-1 row-span-1 bg-wh-500'></div>
                    <div className='col-span-1 row-span-1 bg-wh-500'></div>

                </div>
        </section>
    )
}

export default Trending