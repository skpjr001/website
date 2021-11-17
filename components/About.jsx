import React, {useState,useEffect} from 'react'
import Image from "next/image"
import clsx from "clsx"
import { RoughNotationGroup } from "react-rough-notation"

import { shuffleArray } from '../lib/shuffleArray'
import { RainbowHighlight } from "../components/RainbowHighlight"
import profileImg from "../public/profile.jpg"
import {LIGHT_COLORS, FOCUS_VISIBLE_OUTLINE} from "../lib/constants"


export const About = () => {

  const[colors, setColors] = useState([""]);
  // Shuffle our colors and store them in state so the order is persisted during
  // React re-renders
  

  useEffect(() => {
    setColors(shuffleArray(LIGHT_COLORS));
  }, [])

  return (
    <div className="container px-4 mx-auto">
      <div className="space-x-5 lg:flex item-center lg:-mx-4">
        <div className="lg:px-4 ">
          <RoughNotationGroup show={true}>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50 lg:text-4xl">
              {"Hi there, I'm Sachin."}
            </h1>

            <div className="mt-4 text-gray-800 dark:text-gray-100">
              <p>
                I love making tools that are user-friendly, simple and
                delightful. I work as a{" "}
                <RainbowHighlight color={colors[1]}>
                  Freelance Developer
                </RainbowHighlight>{" "}
                at{" "}
                <a
                  href=""
                  className={clsx(
                    "font-bold transition-colors hover:text-sky-500",
                    FOCUS_VISIBLE_OUTLINE,
                  )}
                >
                  World
                </a>{" "}
                &mdash; focusing on Shipping and helping the community create
                wonderful things.
              </p>
              <p className="mt-2">
                {`Welcome to my digital world where I share what I'm learning
                about shipping`}{" "}
                <RainbowHighlight color={colors[2]}>
                  great products
                </RainbowHighlight>
                , becoming a{" "}
                <RainbowHighlight color={colors[3]}>
                  better developer
                </RainbowHighlight>{" "}
                and growing a{" "}
                <RainbowHighlight color={colors[0]}>
                  career in tech
                </RainbowHighlight>
                .
              </p>

              <p className="mt-2">
                {`Let's hang out on`}{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/skpjr001"
                  className={clsx(
                    "font-bold transition-colors hover:text-sky-500",
                    FOCUS_VISIBLE_OUTLINE,
                  )}
                  
                >
                  Twitter
                </a>
                .
              </p>
            </div>
          </RoughNotationGroup>

        </div>

        <div className="flex-shrink-0 mt-12 lg:px-4 lg:mt-0">
          <Image
            src={profileImg}
            alt="Profile"
            placeholder="blur"
            priority={true}
            className="rounded-full"
            width={200}
            height={200}
          />
        </div>

      </div>
    </div>
  )
}
