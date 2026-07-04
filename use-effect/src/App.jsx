import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(5);
  useEffect(() => {
    getData(page);
    return () => {
      console.log("Use Effect is running");
    };
  }, [page]);

  const getData = async (pageNo) => {
    let responce = await axios.get(
      `https://picsum.photos/v2/list?page=${pageNo}&limit=10`,
    );
    console.log(responce.data);
    let arrayOfImages = responce.data;
    setImages(arrayOfImages);
  };
  let allImagesDivs;
  images.length === 0
    ? (allImagesDivs = (
        <h1 className="text-2xl absolute top-1/2 left-1/2 ">Loading...</h1>
      ))
    : (allImagesDivs = images.map((img, index) => {
        return (
          <a href={img.url} target="_blank">
            <div className="imageCard flex flex-col">
              <div className="w-60 h-60 border-2  rounded-xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={img.download_url}
                  alt="pic"
                  key={index}
                />
              </div>
              <span className="text-lg">{img.author}</span>
            </div>
          </a>
        );
      }));

  return (
    <div className="min-h-screen max-w-screen bg-zinc-900 p-5 flex flex-col justify-between gap-5">
      {/* <button className="text-white border-white rounded-md border-2 w-fit px-2 py-1">
        Page Number {page + 1}
      </button> */}

      <div className="allImages flex gap-5 p-4 flex-wrap text-white ">
        {allImagesDivs}
        {/* <h1 className="text-2xl ">No Images</h1> */}
      </div>

      <div className="leftAndRight flex gap-2 mx-auto w-fit">
        <button
          className="p-2 bg-amber-500 text-black flex justify-center items-center px-3 py-1 rounded cursor-pointer text-[20px]"
          style={page === 0 ? { opacity: 0.5 , "cursor":"none"} : { opacity: 1 }}
          onClick={() => {
            if (page > 0) setPage(page - 1);
          }}
        >
          prev
        </button>
        <h3 className="text-white"> Page{page + 1}</h3>
        <button
          className="p-2 bg-amber-500 text-black flex justify-center items-center px-3 py-1 rounded cursor-pointer text-[20px]"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default App;
