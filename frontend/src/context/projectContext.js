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
    const [isLoading, setLoading] = useState(true);

    /*useEffect(() => {
      if (message.length > 0) {
        const timer = setTimeout(() => {
          setMessage([]);
        }, 5000);
        return () => clearTimeout(timer);
      }
    }, [message]);
  
    useEffect(() => {
      if (loginerrors.length > 0 || registererrors.length > 0 || reseterrors.length > 0) {
        const timer = setTimeout(() => {
          setLoginerrors([]);
          setRegistererrors([]);
          setReseterrors([]);
        }, 5000);
        return () => clearTimeout(timer);
      }
    }, [loginerrors,registererrors, reseterrors]);
    */

    const create = async (project) => {
        try {
            const res = await requestCreate(project);
            //setProject(res.data);
            setIsCreated(true);
            console.log(res.data);
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


    /*useEffect(() => {
      //metermos al resetpass
      const checkLogin = async () => {
        const cookies = Cookies.get();
        if (!cookies.token) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }
  
        try {
          const res = await requestVerify(cookies.token);
          if (!res.data) return setIsAuthenticated(false);
          setIsAuthenticated(true);
          setUser(res.data);
          setLoading(false);
        } catch (error) {
          setIsAuthenticated(false);
          setLoading(false);
        }
      };
      checkLogin();
    }, []);*/

    return (
        <ProjectContext.Provider
            value={{
                project,
                projecterrors,
                IsCreated,
                create,
                getProject
            }}
        >
            {children}
        </ProjectContext.Provider>
    );
};

export default ProjectContext;