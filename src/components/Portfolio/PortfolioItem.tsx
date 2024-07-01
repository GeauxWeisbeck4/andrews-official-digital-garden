import React from "react";

import type { CollectionEntry } from "astro:content";

interface Props {
    data: CollectionEntry<"portfolio">;
}

const PortfolioItem = ({ data }: Props) => {
    const {
        slug,
        data: { title, description, heroImage, year, tags, color },
    } = data;
    return (
        <article className="group mb-4 w-full rounded-md overflow-hidden outline outline-1 outline-black hover:outline-2 dark:hover:outline-white hover:shadow-solid-lg hover:shadow-black dark:hover:shadow-white transition-all duration-150">
            <a href={`portfolio/${slug}`} className="block rounded-md">
                <div
                    className={`flex flex-col justify-end text-slate-800 dark:text-slate-50 h-full`}
                >
                    <img src={heroImage} alt={title} />

                    <div className="flex flex-col justify-between items-start gap4 flex-1">
                        <span className="text-xs">{year}</span>

                        <div className="flex flex-wrap gap-2">
                            {tags?.map((tag: string, index: number) => {
                                return (
                                    <span
                                        title={tag}
                                        key={index}
                                        className={`bg-white text-black border border-black text-xs font-medium px-2.5 py-0.5 rounded`}
                                    >
                                    {tag}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </a>
        </article>
    );
};

export default PortfolioItem;
