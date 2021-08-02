import React from "react";
import "./About.css";
import { BsCloudUpload } from "react-icons/bs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useEffect } from "react";
import { Toast } from "../../views/Deshboard/Notification";
const AboutPersonalDataForm = () => {
  const [contractInformation, setContractInformation] = useState({});

  const [reload,setReload]=useState(false)


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // update profile images
  const updateImage = (e) => {
    const img = e.target.files[0];
    let fromData = new FormData();
    fromData.append("image", img);

    fromData.append("date", new Date());

    axios
      .patch(
        `http://localhost:5000/adminInformation/api/profileImg/update/${contractInformation.id}`,
        fromData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res)
        setReload(!reload)
          Toast.fire({
            icon: "success",
            title: "Image Update successful!",
          });

      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<p className="text-danger">Please Try again</p>'
        })
      });
  };

  // update information
  const onSubmit = (data) => {
    if (data.name === "") {
      data.name = contractInformation.name;
    }

    if (data.email === "") {
      data.email = contractInformation.email;
    }
    if (data.phoneNumber === "") {
      data.phoneNumber = contractInformation.phoneNumber;
    }
    if (data.whatsAppNumber === "") {
      data.whatsAppNumber = contractInformation.whatsAppNumber;
    }
    if (data.facebook === "") {
      data.facebook = contractInformation.facebook;
    }

    if (data.linkedIn === "") {
      data.linkedIn = contractInformation.linkedIn;
    }
    if (data.instagram === "") {
      data.instagram = contractInformation.instagram;
    }
    if (data.resume === "") {
      data.resume = contractInformation.resume;
    }

    axios
      .patch(
        `http://localhost:5000/adminInformation/api/contractInformation/update/${contractInformation.id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res) {
          setReload(!reload)
          Swal.fire("Good job!", " Your Information Update", "success");
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<p className="text-danger">Please Try again</p>'
        })
      });
  };

  // get personal information data
  useEffect(() => {
    axios
      .get("http://localhost:5000/adminInformation/api/contractInformation/get")
      .then((result) => setContractInformation(result.data[0]));
  }, [reload]);

  return (
    <div className="card p-4 mt-4">
      <h3 className="brand-text  text-center">Personal Information </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label" for="exampleFormControlInput1">
            Name :
          </label>

          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Your Name "
            {...register("name", { required: false })}
            defaultValue={contractInformation?.name}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" for="exampleFormControlInput2">
            Email :
          </label>

          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Your Email  "
            {...register("email", { required: false })}
            defaultValue={contractInformation?.email}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" for="exampleFormControlInput3">
            Phone Number :
          </label>

          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput3"
            placeholder="Your Phone Number "
            {...register("phoneNumber", { required: false })}
            defaultValue={contractInformation?.phoneNumber}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" for="exampleFormControlInput4">
            Whats App Number:
          </label>

          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput4"
            placeholder="Your Whats App Number "
            {...register("whatsAppNumber", { required: false })}
            defaultValue={contractInformation?.whatsAppNumber}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" for="exampleFormControlInput5">
            Facebook Link :
          </label>

          <input
            type="url"
            className="form-control"
            id="exampleFormControlInput5"
            placeholder="Put your facebook link "
            {...register("facebook", {
              required: false,
            })}
            defaultValue={contractInformation?.facebook}
          />
          {errors.facebook && (
            <span className="text-danger">Enter valide URl</span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label" for="exampleFormControlInput6">
            LinkedIn Link :
          </label>

          <input
            type="url"
            className="form-control"
            id="exampleFormControlInput6"
            placeholder="Put your linkedIn link "
            {...register("linkedIn", {
              required: false,
            })}
            defaultValue={contractInformation?.linkedIn}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" for="exampleFormControlInput6">
            Instagram Link :
          </label>

          <input
            type="url"
            className="form-control"
            id="exampleFormControlInput6"
            placeholder="Put your Instagram link "
            {...register("instagram", {
              required: false,
            })}
            defaultValue={contractInformation?.instagram}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" for="exampleFormControlInput7">
            Resume Google Drive Link :
          </label>

          <input
            type="url"
            className="form-control"
            id="exampleFormControlInput7"
            placeholder="resume  link "
            {...register("resume", {
              required: false,
            })}
            defaultValue={contractInformation?.resume}
          />
        </div>

        <div className="">
         
          <img
            style={{ width: "100px", height: "100px" }}
            src={contractInformation?.profileImg}
            className="rounded "
            alt=".........."
          />
        </div>

        <div className="mb-3 weight-UPimg">
          <h6> Update a Profile photo</h6>

          <input
            onChange={updateImage}
            style={{ display: "none" }}
            name="image"
            id="file"
            type="file"
            accept="image/*"
            multiple={false}
          />

          <label htmlFor="file">
            <BsCloudUpload /> Upload Photo
          </label>
         
        </div>

        <SubmitButton text="Update" />
      </form>
    </div>
  );
};

export default AboutPersonalDataForm;
// icon={MdSystemUpdateAlt}
