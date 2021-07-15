import React from "react";
import { ImWhatsapp } from "react-icons/im";

const ContractInfo = () => {
  const infoData = [
    { title: "Phone", info: "+91 9876 543 2198" },
    { title: "Email", info: "smrsaimon960@gmail.com" },
    { title: "Whats App", info: "+91 9876 543 2198" },
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

//   <ImWhatsapp/>
