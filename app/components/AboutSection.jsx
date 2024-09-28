"use client";

import Image from "next/image";
import React from "react";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>SQL</li>
        <li>ORM: Prisma and Drizzle</li>
        <li>React</li>
        <li>Next.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Faculty of Business Economy and Management</li>
        <li>Firefighting</li>
        <li>Udemy</li>
        <li>DataCamp</li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>Data Analyst, Excel, Python Power Bi, by Simon Sez IT</li>
        <li>Web Development Bootcamp by Angela Yu</li>
        <li>The Ultimate React Course by Jonas Schmedtmann</li>
        <li>Advanced CSS and Sass by Jonas Schmedtmann</li>
        <li>HTML and CSS by Jonas Schmedtmann</li>
        <li>NextJS and Open AI by John Smilga</li>
        <li>React and TypeScript by John Smilga</li>
        <li>NextJS and Strapi by Niclas Fischer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabCHange = (id) => {
    startTransition(() => setTab(id));
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center pt-24 px-4 xl:gap-16 sm:pt-32 sm:pb-8 xl:px-16">
        <video
          width={500}
          height={350}
          controls={false}
          controlsList="nodownload nofullscreen noremoteplayback"
          preload="yes"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src="/nits_small.mp4" type="video/mp4" />
        </video>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h className="text-4xl font-bold text-white mb-4">About Me</h>
          <p className="tet-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            accusamus quae voluptas, ea ratione quo vitae, debitis dolor, magnam
            provident suscipit doloremque ex dolorum hic? Vel voluptates alias
            iure temporibus!
          </p>
          <div className="flex flex-row mt-8 ">
            <TabButton
              selectTab={() => handleTabCHange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabCHange("certification")}
              active={tab === "certification"}
            >
              Certification
            </TabButton>
            <TabButton
              selectTab={() => handleTabCHange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8 ">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
