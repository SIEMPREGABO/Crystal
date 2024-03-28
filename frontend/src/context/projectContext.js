import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { requestCreate, requestProjects } from "../requests/projectReq.js";
import Cookies from "js-cookie";

const ProjectContext = createContext();

export const useProject = () => {
    const context = useContext(ProjectContext);
    if (!context) throw new Error("useAuth must be used within a AuthProvider");
    return context;
};

export const ProjectProvider = ({ children }) => {
    const [project, setProject] = useState([]);
    const [projecterrors, setProjecterrors] = useState([]);
    const [IsCreated, setIsCreated] = useState(false);
    const [message, setMessage] = useState([]);
    //const [IsLoading, setLoading] = useState(true);

    useEffect(() => {
      if (message.length > 0) {
        const timer = setTimeout(() => {
          setMessage([]);
          setIsCreated(true);
        }, 5000);
        return () => clearTimeout(timer);
      }
      if(projecterrors.length > 0){
        const timer = setTimeout(() => {
          setProjecterrors([]);
        }, 5000);
        return () => clearTimeout(timer);
      }
      if (IsCreated) {
        const timer = setTimeout(() => {
          setIsCreated(false);
        }, 5000);
        return () => clearTimeout(timer);
      }
      
    }, [IsCreated, projecterrors, message]);

    

    const create = async (project) => {
        try {
            const res = await requestCreate(project);
            //setProject(res.data);
            
            console.log(res.data);
            setMessage("Proyecto creado con exito");
            //console.log(error.response.data.message);
        } catch (error) {
            console.log(error.response);
            setProjecterrors(error.response.data.message);
        }
    };

    const getProject = async () => {
      try {
          const res = await requestProjects();
          setProject(res.data);
          //setIsCreated(true);
          console.log(res.data);
          //console.log(error.response.data.message);
      } catch (error) {
          console.log(error.response);
          setProjecterrors(error.response.data.message);
      }
  };

    return (
        <ProjectContext.Provider
            value={{
                project,
                projecterrors,
                IsCreated,
                message,
                create,
                getProject
            }}
        >
            {children}
        </ProjectContext.Provider>
    );
};

export default ProjectContext;