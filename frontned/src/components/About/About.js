// import { Typography } from "@mui/material";
// import React from "react";
// import "./About.css";

// const About = ({ about }) => {
//   return (
//     <div className="about">
//       <div className="aboutContainer">
//         <Typography>{about.quote}</Typography>
//       </div>
//       <div className="aboutContainer2">
//         <div>
//           <img src={about.avatar.url} alt="Abhi" className="aboutAvatar" />

//           <Typography
//             variant="h4"
//             style={{ margin: "1vmax 0", color: "black" }}
//           >
//            {about.name}
//           </Typography>

//           <Typography>{about.title}</Typography>

//           <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
//             {about.subtitle}
//           </Typography>
//         </div>

//         <div>
//           <Typography
//             style={{
//               wordSpacing: "5px",
//               lineHeight: "50px",
//               letterSpacing: "5px",
//               textAlign: "right",
//             }}
//           >
//           {about.description}
//           </Typography>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import { Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import "./About.css";

const About = ({ about }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    try {
      // Check if the element is present before accessing it
      if (containerRef.current) {
        containerRef.current.style.transform =
          "translateX(20%) translateY(-10%)"; // Example transformation or style change
      }
    } catch (error) {
      console.error("Error accessing the DOM element:", error);
    }
  }, []);

  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>{about.quote}</Typography>
      </div>
      <div className="aboutContainer2" ref={containerRef}>
        <div>
          <img src={about.avatar.url} alt="Abhi" className="aboutAvatar" />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            {about.name}
          </Typography>

          <Typography>{about.title}</Typography>

          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            {about.subtitle}
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            {about.description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
