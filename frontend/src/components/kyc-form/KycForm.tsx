"use client";
import { useVerifyAccountMutation } from "@/redux/api";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

interface FormValues {
  selfie: FileList;
  country: string;
  idType: string;
  idNumber: string;
}

function KycForm() {
  const [verifyAccount] = useVerifyAccountMutation();
  const user = useAppSelector(state => state.auth.user)
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const convertBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result as string);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(user, 'user')
    const toastId = toast.loading("");
    try {
      const file = data.selfie[0];
      const imageBase64 = await convertBase64(file);
      await verifyAccount({ ...data, userId: user.id, selfie: imageBase64 }).unwrap();
      toast.success("Your account is verified successfully", {
        id: toastId,
        duration: 1000,
      });
      router.push("../");
    } catch (error) {
      const errorMessage = "An error occurred";
      console.log(error);
      toast.error(errorMessage, { id: toastId, duration: 1000 });
      console.error("Error:", error);
    }
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
              <option value="KE">United States</option>
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
              <option value="PASSPORT">PASSPORT</option>
              <option value="NATIONAL_ID">NATIONAL ID</option>
              <option value="ALIEN_CARD">ALIEN CARD</option>
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
