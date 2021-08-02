import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PanelHeader from '../../components/PanelHeader/PanelHeader';
import "./AboutSetting.css"
import UpdateAboutDetails from './UpdateAboutDetails';

const AboutSetting = () => {
const [detailsReload, setDetailsReload]=useState(false)
const [aboutDetails, setAboutDetails]=useState([])


useEffect(() => {


    axios.get("http://localhost:5000/bioInfo/api/bioInformation/get").then((result) => {
        setAboutDetails(result.data);
      });
  
  
}, [detailsReload])




    return (

        <>
        <PanelHeader
        size="sm"
        content={
          <div className="header text-center">
            <h2 className="title">About Setting</h2>
          </div>
        }
      />
      <div className="content">
        <div className="row">
          <div className="col-md-8 offset-md-2">
              <UpdateAboutDetails aboutDetails={aboutDetails} setDetailsReload={setDetailsReload}/>
          
          </div>
        </div>
      </div>
      </>
    );
};

export default AboutSetting;