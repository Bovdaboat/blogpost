import {Tenali_Ramakrishna} from "next/dist/compiled/@next/font/dist/google";

export default function Home() {
  return (
    <main className="px-10 leading-7">
      <Trending />
        <div className="md:flex gap-10 mb-5">
            <div className="basis-3/4">
                <Tech />
                <Travel />
                <Other />
                <div className="hidden md:block">
                    <Subscibe />
                </div>
            </div>
            <div className="basis-1/4">
                <Sidebar />
            </div>
        </div>
    </main>
  )
}
