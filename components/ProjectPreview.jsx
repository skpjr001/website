import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import clsx from "clsx";

import {FOCUS_VISIBLE_OUTLINE} from "../lib/constants"

export const ProjectPreview = ({
  title,
  description,
  tags,
  techStack,
  url,
  image,
}) => {

  const[width, height] = [1920, 960];

  return (
    <div>
      <Link href={url}>
        <a className={clsx("text-gray-800 group block", FOCUS_VISIBLE_OUTLINE)}>
          {image ? (
            <div className="relative mb-4 overflow-hidden rounded-lg text-[0px]">

              <img src={image} alt={title} width={1920} height={960} />
            </div>
          ) : null}
          <h2 className="text-lg font-bold group-hover:text-sky-500">
            {title}
          </h2>
          <p className="text-gray-800 line-clamp-2">{description}</p>
        </a>
      </Link>
    </div>
  )
}
