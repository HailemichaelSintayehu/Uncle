"use client";

import Image from "next/image";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
  selfie: FileList;
  country: string;
  idType: string;
  idNumber: string;
}

function KycForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="kyc-form">
      <div>
        <h4>Fill in the Required Info</h4>
        <p>The details are used to perform Biometric KYC on the user</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="upload-section">
            <div className="input-labels">
              <label htmlFor="selfie">Upload Selfie*</label>
              {errors.selfie && <span>{errors.selfie.message}</span>}
            </div>
            <input
              type="file"
              id="selfie"
              {...register("selfie", { required: "Selfie is required" })}
            />
          </div>

          <div className="country-section">
            <div className="input-labels">
              <label htmlFor="country">Select country*</label>
              {errors.country && <span>{errors.country.message}</span>}
            </div>
            <select
              id="country"
              {...register("country", { required: "Country is required" })}
            >
              <option value="">Select the issuing country</option>
              <option value="US">United States</option>
              {/* Add more countries as needed */}
            </select>
          </div>

          <div>
            <div className="input-labels">
              <label htmlFor="idType">Choose ID Type*</label>
              {errors.idType && <span>{errors.idType.message}</span>}
            </div>
            <select
              id="idType"
              {...register("idType", { required: "ID Type is required" })}
            >
              <option value="">Select ID Type</option>
              <option value="passport">Passport</option>
              <option value="driver_license">Driver's License</option>
              {/* Add more ID types as needed */}
            </select>
          </div>

          <div className="upload-section">
            <div className="input-labels">
              <label htmlFor="idNumber">ID Number*</label>
              {errors.idNumber && <span>{errors.idNumber.message}</span>}
            </div>
            <input
              type="text"
              id="idNumber"
              {...register("idNumber", { required: "ID Number is required" })}
              placeholder="Enter ID number"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="sample-image__container">
        <Image
          src={"/assets/img/kyc/id_national.png"}
          width={400}
          height={300}
          alt="kyc-sample-image"
        />
      </div>
    </div>
  );
}

export default KycForm;
