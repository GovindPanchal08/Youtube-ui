import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNaMenuitem from "../Components/LeftNavMenuItem";
import { categories } from "../utils/Constant";
import { Context } from "../context/Context";

function LeftNav() {
  const { selectcategories, setselectcategories, mobilemenu } =
    useContext(Context);
    const navigate =useNavigate()

  const clickHandler = (name, type) => {

    
    switch (type) {
      case "category":
        return setselectcategories(name);
      case "home":
        return setselectcategories(name);
      case "menu":
        return false;

      default:
        break;
    }
    console.log("heollo");
  };
  return (
    <div className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${mobilemenu ? "translate-x-0" :""}` }>
      <div className="flex px-5 flex-col ">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNaMenuitem
                text={item.type === "home" ? " Home " : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/")
                }}
                className={`${
                  selectcategories === item.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {item.divider && <hr className="my border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="my border-white/[0.2]" />
        <div className="text-white/[0.2] text-[12px]">Clone By : Hir</div>
      </div>
    </div>
  );
}

export default LeftNav;
