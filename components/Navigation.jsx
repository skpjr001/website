import React from 'react'
import Link from "next/link"
import clsx from "clsx"

import { FOCUS_VISIBLE_OUTLINE } from "../lib/constants"

export const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6">
      <div className="container px-4 mx-auto lg:max-w-4xl md:flex md:items-center md:justify-between">
        <Link href="/">
          <a
            className={clsx(
              "font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase",
              FOCUS_VISIBLE_OUTLINE,
            )}
          >
            Sachin Kumar Pal
          </a>
        </Link>

        <div className="flex space-x-4 font-medium text-gray-800">
          <Link href="/#about">
            <a
              className={clsx(
                "transition-colors hover:text-sky-500",
                FOCUS_VISIBLE_OUTLINE,
              )}
            >
              About
            </a>
          </Link>
          <Link href="/blog">
            <a
              className={clsx(
                "transition-colors hover:text-sky-500",
                FOCUS_VISIBLE_OUTLINE,
              )}
            >
              Blog
            </a>
          </Link>

          <div className="text-gray-300">&bull;</div>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/delba_oliveira"
            className={clsx(
              "transition-colors hover:text-sky-500",
              FOCUS_VISIBLE_OUTLINE,
            )}
          >
            Twitter
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/c/delba"
            className={clsx(
              "transition-colors hover:text-sky-500",
              FOCUS_VISIBLE_OUTLINE,
            )}
          >
            YouTube
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/delbaoliveira"
            className={clsx(
              "transition-colors hover:text-sky-500",
              FOCUS_VISIBLE_OUTLINE,
            )}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
