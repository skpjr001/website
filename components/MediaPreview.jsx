import React from 'react'
import clsx from "clsx"
import Link from "next/link"
import Image from "next/image"
import { PlayIcon } from "@heroicons/react/solid"

import { FOCUS_VISIBLE_OUTLINE } from "../lib/constants"

export const MediaPreview = ({
  title,
  description,
  url,
  image,
  type = "post"
}) => {

  const[width, height] = type === "post" ? [1920, 960] : [1280,720];

  return (
    <div>
      <Link href={url}>
        <a className={clsx("text-gray-800 group block", FOCUS_VISIBLE_OUTLINE)}>
          {image ? (
            <div className="relative mb-4 overflow-hidden rounded-lg text-[0px]">
              {type === "youtube" ? (
                <div className="absolute inset-0 z-10 flex items-center justify-center transition-colors hover:bg-black/20">
                  <PlayIcon className="w-16 transition-colors text-white/75 hover:text-red-600" />
                </div>
              ) : null}

              <img src={image} alt={title} width={width} height={height} />
            </div>
            ) 
            : <div className="relative mb-4 overflow-hidden rounded-lg text-[0px]">
                <Image src="/blog/default.png" alt={title} width={width} height={height} />
              </div>
          }
          <h2 className="text-lg font-bold group-hover:text-sky-500">
            {title}
          </h2>
          <p className="text-gray-800 line-clamp-2">{description}</p>
        </a>
      </Link>
    </div>
  )
}
