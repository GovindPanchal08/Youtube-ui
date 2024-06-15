import React from "react";
import moment from "moment";

const Videolength = ({ time }) => {
  const videolengthinsecond = moment()
    .startOf("day")
    .seconds(time)
    .format("H:mm:ss");
  return (
    <div className="absolute bottom-2 right-2 py-1 px-2 bg-black text-white text-xs rounded-md">
      {videolengthinsecond}
    </div>
  );
};

export default Videolength;
