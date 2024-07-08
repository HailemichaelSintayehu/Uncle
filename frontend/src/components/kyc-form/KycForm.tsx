"use client";
import { useVerifyAccountMutation } from "@/redux/api";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
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
  const [idType, setIdType] = useState("NATIONAL_ID"); 
  const [sampleImage, setSampleImage] = useState("/assets/img/kyc/id_national.png"); 
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      country: "KE",
    },
  });

  useEffect(() => {
    switch (idType) {
      case "PASSPORT":
        setSampleImage("/assets/img/kyc/sample_passport.png");
        break;
      case "NATIONAL_ID":
        setSampleImage("/assets/img/kyc/id_national.png");
        break;
      case "ALIEN_CARD":
        setSampleImage("/assets/img/kyc/alieen_card.png");
        break;
      default:
        setSampleImage("/assets/img/kyc/id_national.png");
        break;
    }
  }, [idType]);

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
    const toastId = toast.loading("please wait...");
    try {
      const file = data.selfie[0];
      const imageBase64 = await convertBase64(file);
      await verifyAccount({ ...data, userId: user.id, selfie: imageBase64 }).unwrap();
      toast.success("Your account is verified successfully", {
        id: toastId,
        duration: 1000,
      });
      router.push("../");
    } catch (error: any) {
      toast.error(error?.data.message ?? 'something went wrong', { id: toastId, duration: 1000 });
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
              <option value="">Please select country</option>
              <option value="GH">Ghana</option>
              <option value="ZA">South Africa</option>
              <option value="NG">Nigeria</option>
              <option value="KE">Kenya</option>
            </select>
          </div>

          <div>
            <div className="input-labels">
              <label htmlFor="idType">Choose ID Type*</label>
              {errors.idType && <span>{errors.idType.message}</span>}
            </div>
            <select
              id="idType"
              {...register("idType", {
                required: "ID Type is required",
                onChange: (e) => setIdType(e.target.value),
              })}
            >
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
          src={sampleImage}
          width={400}
          height={300}
          alt="kyc-sample-image"
        />
      </div>
    </div>
  );
}

export default KycForm;
