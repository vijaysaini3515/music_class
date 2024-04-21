"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";


const content = [
  {
    "title": "Introduction to Music Website Concepts",
    "description": "Explore the basics of music websites, including different types, key features, and the user needs they fulfill. Understand the goals of building a music-centered website."
  },
  {
    "title": "Designing for the User Experience",
    "description": "Learn how to design engaging and intuitive interfaces specifically for music platforms, focusing on aesthetics, user flow, and interaction design to enhance user engagement."
  },
  {
    "title": "Audio Streaming Technologies",
    "description": "Dive into the technical aspects of integrating audio streaming into your website, covering streaming protocols, audio formats, and creating seamless playback experiences."
  },
  {
    "title": "Developing Music Libraries and Databases",
    "description": "Get hands-on with building scalable and efficient music databases. Learn how to manage large datasets of songs, artists, and albums with effective database design and management practices."
  },
  {
    "title": "User Interactivity and Social Features",
    "description": "Implement interactive features such as user comments, ratings, playlists, and social sharing. Understand how to build community tools and personalization features."
  },
  {
    "title": "Launching and Marketing Your Music Website",
    "description": "Prepare for the launch of your music website with tips on marketing, SEO, and analytics. Learn how to attract and retain users with effective promotion and monitoring tools."
  }
]


const WhyChoose = () => {
  return (
    <div>
       <StickyScroll content={content} />
    </div>
  )
}

export default WhyChoose
