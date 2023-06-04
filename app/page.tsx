import Trending from "@/app/(home)/Trending";
import React from "react";
import Tech from "@/app/(home)/Tech";
import Travel from "@/app/(home)/Travel"
import Other from "@/app/(shared)/Other";
import Subscribe from "@/app/(shared)/Subscribe";
import Sidebar from "@/app/(shared)/Sidebar";

const getPosts = async () => {
    const posts = await prisma.post.findMany();

    const formattedPosts = await Promise.all(
        posts.map(async (post: Post) => {
            const imageModule = require(`../public${post.image}`);
            return {
                ...post,
                image: imageModule.default,
            };
        })
    );

    return formattedPosts;
};



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
                    <Subscribe />
                </div>
            </div>
            <div className="basis-1/4">
                    <Sidebar />
            </div>
        </div>
    </main>
  )
}
