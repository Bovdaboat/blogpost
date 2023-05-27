import React from 'react'


const Footer = () => {
    return (
        <footer className='bg-wh-900 text-wh-50 py-10 px-10'>
            <div className="justify-between mx-auto gap-16 sm:flex">
                {/* first column */}
                <div className="mt-16 basis-1/2 sm:mt-0">
                    <h4 className="font-bold">
                        Blog of Tomorrow
                    </h4>
                        <p className="my-5">
                            Like the great Ted from bob burger ones said today is tomorrow yesterday
                        </p>
                    <p>©Copyright all reserved to BovDaBoat</p>
                </div>
                <div className="mt-16 basis-1/4 sm:mt-0">
                    <h4 className="font-bold">
                        Links
                    </h4>
                    <p className="my-5">
                        Bovdaboat.com
                    </p>
                    <p>©Copyright all reserved to BovDaBoat</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;