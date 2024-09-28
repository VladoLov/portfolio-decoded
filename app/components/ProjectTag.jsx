import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-blue-500"
    : "text-[#adb7be] border-slate-600";
  return (
    <div>
      <button
        className={`${buttonStyles} rounded-full border-2 px-2  text-xl cursor-pointer`}
        onClick={() => onClick(name)}
      >
        {name}
      </button>
    </div>
  );
};

export default ProjectTag;
