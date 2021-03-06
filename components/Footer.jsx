import React from 'react'
import clsx from 'clsx'

import { FOCUS_VISIBLE_OUTLINE } from "../lib/constants"

export const Footer = () => {
  return (
    <div className="mt-24 pb-36">
      <div className="max-w-4xl px-4 mx-auto text-gray-800">
        <div className="pb-8 mb-2 border-t-2 border-gray-300"></div>
        <div className="flex flex-col justify-between lg:flex-row">
          <p>Built with Next.js, Notion, Prisma, Tailwind and Vercel</p>
          <div className="pt-2 space-x-6 font-medium lg:pt-0">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/skpjr001"
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
              href="https://www.youtube.com"
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
              href="https://github.com/skpjr001"
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
    </div>
  )
}


