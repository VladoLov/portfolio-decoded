import React from "react";
import { ChevronsLeftRight, Eye } from "lucide-react";
import Link from "next/link";

const ProjectCard = ({ imageUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72  rounded-t-xl relative group container"
        style={{ background: `url(${imageUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay group-hover:items-center  justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link"
          >
            <ChevronsLeftRight className="h-10 w-10  text-[#Adb7be] cursor-pointer group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></ChevronsLeftRight>
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link"
          >
            <Eye className="h-10 w-10 text-[#Adb7be] cursor-pointer group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></Eye>
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-2 px-4">
        <h5 className="text-xl font-semibold mb-2 ">{title}</h5>
        <p className="text-[#adb7be]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
