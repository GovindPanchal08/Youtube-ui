import React from "react";

function LeftNavMenuItem({ text, className, icon, action }) {
  return (
    <div
      className={
        " text-sm text-white cursor-pointer h-10 flex items-center px-2 mb-[-1px] rounded-lg hover:bg-white/[0.15] " +
        className
      }
      onClick={action}
    >
      <span className="tetx-xl mr-5 "> {icon} </span>
      {text}
    </div>
  );
}

export default LeftNavMenuItem;
