// import { Button, Typography } from "@mui/material";
// import React, { useEffect, useRef } from "react";
// import "./Project.css";
// import { AiOutlineProject } from "react-icons/ai";
// import { Delete } from "@mui/icons-material";
// import { FaRegSmileWink } from "react-icons/fa";
// import { deleteProject, getUser } from "../../actions/user";
// import { useDispatch } from "react-redux";

// export const ProjectCard = ({
//   url,
//   projectImage,
//   projectTitle,
//   description,
//   technologies,
//   isAdmin = false,
//   id,
// }) => {
//   const dispatch = useDispatch();

//   const deleteHandler = async (id) => {
//     await dispatch(deleteProject(id));
//     dispatch(getUser());
//   };
//   return (
//     <>
//       <a href={url} className="projectCard" target="black">
//         <div>
//           <img src={projectImage} alt="Project" />
//           <Typography variant="h5">{projectTitle}</Typography>
//         </div>
//         <div>
//           <Typography variant="h4"> About Project</Typography>
//           <Typography>{description}</Typography>
//           <Typography variant="h6">Tech Stack: {technologies}</Typography>
//         </div>
//       </a>

//       {isAdmin && (
//         <Button
//           style={{ color: "rgba(40,40,40,0.7)" }}
//           onClick={() => deleteHandler(id)}
//         >
//           <Delete />
//         </Button>
//       )}
//     </>
//   );
// };

// const Projects = ({ projects }) => {
//   console.log(projects)
//   return (
//     <div className="projects">
//       <Typography variant="h3">
//         Projects <AiOutlineProject />
//       </Typography>

//       <div className="projectsWrapper">
//         {projects.map((item) => (
//           <ProjectCard
//             id={item._id}
//             key={item._id}
//             url={item.url}
//             projectImage={item.image.url}
//             projectTitle={item.title}
//             description={item.description}
//             technologies={item.techStack}
//           />
//         ))}
//       </div>

//       <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
//         All The Projects Shown Above Are Made By Me <FaRegSmileWink />
//       </Typography>
//     </div>
//   );
// };

// export default Projects;

import { Button, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import "./Project.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";
import { deleteProject, getUser } from "../../actions/user";
import { useDispatch } from "react-redux";

// ProjectCard Component
export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    try {
      await dispatch(deleteProject(id));
      dispatch(getUser());
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <>
      {/* Ensure url and projectImage are not undefined */}
      <a href={url || "#"} className="projectCard" target="_blank" rel="noopener noreferrer">
        <div>
          {/* Display a placeholder if projectImage is not available */}
          <img src={projectImage || "placeholder-image-url"} alt="Project" />
          <Typography variant="h5">{projectTitle || "Untitled Project"}</Typography>
        </div>
        <div>
          <Typography variant="h4">About Project</Typography>
          <Typography>{description || "No description available."}</Typography>
          <Typography variant="h6">Tech Stack: {technologies || "Not specified"}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
          onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )}
    </>
  );
};

// Main Projects Component
const Projects = ({ projects = [] }) => {
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projects.length > 0 ? (
          projects.map((item) => (
            <ProjectCard
              id={item._id}
              key={item._id}
              url={item.url}
              projectImage={item.image?.url}
              projectTitle={item.title}
              description={item.description}
              technologies={item.techStack}
              isAdmin={item.isAdmin} // Pass isAdmin if applicable
            />
          ))
        ) : (
          <Typography>No projects available.</Typography>
        )}
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;
