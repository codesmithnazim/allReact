// import React, { useEffect, useState } from "react";
// import { usefullTemperature } from "../contexts/temperatureContextProvider";
// // const { city } = UseCityContext();

// function mainBoxImageContainer({ children }) {
//   const { details } = usefullTemperature(); //global context
//   const [bgImg, setBgImg] = useState({
//     is_day: "undefined",
//     category: "undefined",
//   });
//   useEffect(() => {
//     const codeToCategorry = (code) => {
//       let allCodes = {
//         1000: "clear",
//         1003: "partlyCloudy",
//         1006: "cloudy",
//         1009: "cloudy",
//         1012: "fogHaze",
//         1015: "dustSand",
//         1018: "dustSand",
//         1021: "dustSand",
//         1024: "dustSand",
//         1027: "dustSand",
//         1030: "fogHaze",
//         1033: "dustSand",
//         1036: "dustSand",
//         1039: "dustSand",
//         1042: "dustSand",
//         1045: "dustSand",
//         1048: "dustSand",
//         1063: "drizzleLightRain",
//         1066: "snow",
//         1069: "drizzleLightRain",
//         1072: "drizzleLightRain",
//         1087: "thunderstorm",
//         1114: "snow",
//         1117: "snow",
//         1135: "fogHaze",
//         1147: "fogHaze",
//         1150: "drizzleLightRain",
//         1153: "drizzleLightRain",
//         1168: "drizzleLightRain",
//         1171: "drizzleLightRain",
//         1180: "drizzleLightRain",
//         1183: "drizzleLightRain",
//         1186: "rain",
//         1189: "rain",
//         1192: "rain",
//         1195: "rain",
//         1198: "drizzleLightRain",
//         1201: "rain",
//         1204: "rain",
//         1207: "rain",
//         1210: "snow",
//         1213: "snow",
//         1216: "snow",
//         1219: "snow",
//         1222: "snow",
//         1225: "snow",
//         1237: "rain",
//         1240: "drizzleLightRain",
//         1243: "rain",
//         1246: "rain",
//         1249: "rain",
//         1252: "rain",
//         1255: "snow",
//         1258: "snow",
//         1261: "rain",
//         1264: "rain",
//         1273: "thunderstorm",
//         1276: "thunderstorm",
//         1279: "thunderstorm",
//         1282: "thunderstorm",
//       };
//       return allCodes[code];
//     };

//     // const setBgImage = (isDay, wCategory) => {
//     //   setBgImage({ is_day: isDay, category: wCategory });
//     //   // console.log("isDay ", isDay, " and the weather category = ", wCategory());
//     //   let category = wCategory;
//     // };
//     let categoryy = codeToCategorry(details.code);
//     setBgImg({ is_day: details.is_day, category: categoryy });

//     return () => {};
//   }, [details]);

//   function constructImageURL(isDay, catgory) {
//     if (isDay === undefined || !catgory) {
//       return;
//     } else {
//       return `url('https://res.cloudinary.com/curszqkk/image/upload/f_auto/q_auto/c_limit,w_2000,dpr_auto/v1784810584/${catgory}${isDay}.jpg')`
//     }
//   }

//   return (
//     <div
//       className={`main  box-border flex flex-col w-screen h-screen bg-cover bg-center p-4 pr-10 pl-28 gap-16`}
//       onLoad={() => console.log("The bg is loaded successfully")}
//       style={{
//         backgroundImage:constructImageURL(bgImg.is_day, bgImg.category) ,
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// export default mainBoxImageContainer;

// //  https://<domain>/<cloud_name>/<asset_type>/<delivery_type>/<transformations>/<version>/shirt_157ake.<extension>, where 'shirt_157ake' is the updated public ID.

// Improvement were done through the AI help, Ya Allah make me able to code without the help of any AI.

import React, { useEffect, useState } from "react";
import { usefullTemperature } from "../contexts/temperatureContextProvider";

// Note: React component names should start with a capital letter (PascalCase)
function MainBoxImageContainer({ children }) {
  const { details } = usefullTemperature();

  // State management for double-buffer rendering
  const [currentUrl, setCurrentUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");
  const [isFading, setIsFading] = useState(false);

  // 1. Map weather code to category string
  const codeToCategory = (code) => {
    const allCodes = {
      1000: "clear",
      1003: "partlyCloudy",
      1006: "cloudy",
      1009: "cloudy",
      1012: "fogHaze",
      1015: "dustSand",
      1018: "dustSand",
      1021: "dustSand",
      1024: "dustSand",
      1027: "dustSand",
      1030: "fogHaze",
      1033: "dustSand",
      1036: "dustSand",
      1039: "dustSand",
      1042: "dustSand",
      1045: "dustSand",
      1048: "dustSand",
      1063: "drizzleLightRain",
      1066: "snow",
      1069: "drizzleLightRain",
      1072: "drizzleLightRain",
      1087: "thunderstorm",
      1114: "snow",
      1117: "snow",
      1135: "fogHaze",
      1147: "fogHaze",
      1150: "drizzleLightRain",
      1153: "drizzleLightRain",
      1168: "drizzleLightRain",
      1171: "drizzleLightRain",
      1180: "drizzleLightRain",
      1183: "drizzleLightRain",
      1186: "rain",
      1189: "rain",
      1192: "rain",
      1195: "rain",
      1198: "drizzleLightRain",
      1201: "rain",
      1204: "rain",
      1207: "rain",
      1210: "snow",
      1213: "snow",
      1216: "snow",
      1219: "snow",
      1222: "snow",
      1225: "snow",
      1237: "rain",
      1240: "drizzleLightRain",
      1243: "rain",
      1246: "rain",
      1249: "rain",
      1252: "rain",
      1255: "snow",
      1258: "snow",
      1261: "rain",
      1264: "rain",
      1273: "thunderstorm",
      1276: "thunderstorm",
      1279: "thunderstorm",
      1282: "thunderstorm",
    };
    return allCodes[code] || "clear";
  };

  // 2. Listen to details changes and construct target URL
  useEffect(() => {
    if (!details || details.code === undefined) return;

    const category = codeToCategory(details.code);
    // Optimized Cloudinary parameters (q_auto:eco, w_1920)
    const newUrl = `https://res.cloudinary.com/curszqkk/image/upload/f_auto/q_auto:eco/c_limit,w_1920/v1784810584/${category}${details.is_day}.jpg`;

    // Initialize first load directly, otherwise trigger preload for next image
    if (!currentUrl) {
      setCurrentUrl(newUrl);
    } else if (newUrl !== currentUrl) {
      setNextUrl(newUrl);
    }
  }, [details]);

  // 3. Triggered when the hidden <img> finishes downloading nextUrl
  const handleImageLoaded = () => {
    setIsFading(true);

    setTimeout(() => {
      setCurrentUrl(nextUrl);
      setNextUrl("");
      setIsFading(false);
    }, 1000); // Must match the Tailwind duration-1000 class
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden box-border flex flex-col p-4 pr-10 pl-28 gap-16">
      
      {/* LAYER A: Bottom Buffer (Current Background) */}
      {currentUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url('${currentUrl}')` }}
        />
      )}

      {/* LAYER B: Top Buffer (Fades in over Layer A) */}
      {nextUrl && (
        <div
          className={`absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-1000 ease-in-out ${
            isFading ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${nextUrl}')` }}
        />
      )}

      {/* HIDDEN PRELOADER: Fires handleImageLoaded on fetch complete */}
      {nextUrl && (
        <img
          src={nextUrl}
          alt="Preloader"
          className="hidden"
          onLoad={handleImageLoaded}
        />
      )}

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 flex flex-col w-full h-full gap-16">
        {children}
      </div>
      
    </div>
  );
}

export default MainBoxImageContainer;