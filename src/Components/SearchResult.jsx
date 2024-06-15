import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import LeftNav from "../Components/LeftNav";
import SearchVideoCard from "../Components/SearchVideoCard";
import { fetchdatafromapi } from "../utils/api";
import { Context } from "../context/Context";

function SearchResult() {
  const [result, setresult] = useState();
  const { searchQuery } = useParams();
  const { setloading } = useContext(Context);

  useEffect(()=>{
    document.getElementById('root').classList.remove('cutom-h')
  fetchSearchresult();
  },[searchQuery])
  const fetchSearchresult=()=>{
    setloading(true)
    fetchdatafromapi(`search/?q=${searchQuery}`).then((res)=>{
      console.log(res)
      setresult(res?.contents)
      setloading(false)
    })

  }

  return <div className="flex flex-row h-[calc(100%-56px)]">
    <LeftNav/>
    <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto text-white bg-black">
      <div className="grid grid-cols-1 gap-2 p-5">
        {result?.map((item)=> {
          if(item?.type !== 'video') return false 
          let video = item?.video
      return (
        <SearchVideoCard key={video?.videoId} video={video} />
      )
        })}
      </div>
    </div>
  </div>;
}

export default SearchResult;
