import React, { useContext } from "react";

import { userContext } from "../../App";

const ContractInfo = () => {
  const {personalInfo}=useContext(userContext)
  const infoData = [
    { title: "Phone", info: personalInfo?.phoneNumber },
    { title: "Email", info: personalInfo?.email },
    { title: "Whats App", info: personalInfo?.whatsAppNumber },
  ];
  return (
    <div className="contact_info pb-3">
      <div className="contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between">
        {infoData.map((x) => (
          <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
          
            <div className="contact_info_content">
              <div className="contact_info_title">{x.title}</div>
              <div className="contact_info_text">{x.info}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContractInfo;

