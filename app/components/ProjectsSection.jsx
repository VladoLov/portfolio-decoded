"use client";
import React from "react";
import { webPages } from "../utils/projects";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { useState, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProject = webPages.filter(
    (page) => tag === "All" || page.tag.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="projects" className="md:pt-28 pt-16 pb-8">
      <h2 className="text-white font-semibold text-4xl text-center">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div ref={ref} className="grid lg:grid-cols-2 gap-8">
        {filteredProject.map((page, index) => (
          <motion.li
            variants={cardVariants}
            key={page.id}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 1, delay: index * 0.4 }}
          >
            <ProjectCard
              imageUrl={page.image}
              title={page.title}
              description={page.description}
              gitUrl={page.gitUrl}
              previewUrl={page.previewUrl}
            />
          </motion.li>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
