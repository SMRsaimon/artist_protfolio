import axios from "axios";
import React, { Suspense } from "react";
import { useEffect } from "react";
import { useState } from "react";
import PanelHeader from "../../components/PanelHeader/PanelHeader";
import "./ProjectSetting.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const UpdateProjects = React.lazy(() => import("./UpdateProjects"));
const UpdateProjectDetails = React.lazy(() => import("./UpdateProjectDetails"));

const ProjectSetting = () => {
  const [projectDetails, setProjectDetails] = useState([]);
  const [imgReload, setImgReload] = useState(false);
  const [DetailsReload, setDetailsReload] = useState(false);
  const [projectImg, setProjectImg] = useState([]);

  // Filter function for filter project images data and details

  const FilterProject = (data, fileName) => {
    return data.filter((x) => x.fileName === fileName);
  };

  // get projectData from database

  useEffect(() => {
    axios.get("http://localhost:5000/projects/data/get").then((result) => {
      setProjectImg(result.data);
    });

    axios
      .get("http://localhost:5000/projects/details/data/getDetails")
      .then((result) => {
        setProjectDetails(result.data);
      });
  }, [imgReload, DetailsReload]);

  const componentsData = [
    { name: "In Search of Lost Tune", title: "inSearchOf" },
    {
      name: " The Name of my City is Dust, Smoke and, Life",
      title: "theNameOfCity",
    },
    { name: " Stories From The Sea", title: "storiesFromTheSea" },
    { name: "Joldash", title: "Joldash" },
    { name: " Counting The Days", title: "countingTheDays" },
    { name: "SonaliBag", title: "SonaliBag" },
    { name: "portfolio", title: "portfolio" },
    { name: "print", title: "print" },
  ];

  return (
    <>
      <PanelHeader
        size="sm"
        content={
          <div className="header text-center">
            <h2 className="title">Projects Setting</h2>
          </div>
        }
      />
      <div className="content">
        {componentsData.map((x) => (
          <>
            <div className="row ">
              <h3 className="text-center  text-capitalize project-title py-5">
                {x.name}
              </h3>
              <Suspense
                fallback={
                  <>
                    <p className="text-center">Please wait. Searching......</p>
                    <div className="col-md-12 d-flex justify-content-center">
                      <Loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs
                      />
                    </div>
                  </>
                }
              >
                <UpdateProjectDetails
                  projectDetails={FilterProject(projectDetails, x.title)}
                  setDetailsReload={setDetailsReload}
                />
              </Suspense>
            </div>
          </>
        ))}

        <hr />

        {/* DProject Details components */}
        <div className="container">
          <h2 className="text-center  text-capitalize project-title py-5">
            Project Details
          </h2>

          {componentsData.map((x) => (
            <>
              <div className="row ">
                <h3 className="text-center  text-capitalize project-title py-5">
                  {x.name}
                </h3>
                <Suspense
                  fallback={
                    <>
                      <p className="text-center">
                        Please waite. Searching......
                      </p>
                      <div className="col-md-12 d-flex justify-content-center">
                        <Loader
                          type="ThreeDots"
                          color="#00BFFF"
                          height={100}
                          width={100}
                          timeout={3000} //3 secs
                        />
                      </div>
                    </>
                  }
                >
                  <UpdateProjects
                    projectImg={FilterProject(projectImg, x.title)}
                    setImgReload={setImgReload}
                  />
                </Suspense>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectSetting;
