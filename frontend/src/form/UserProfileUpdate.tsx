"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

import { GenderData } from "@/data/nice-select-data";
import NiceSelectTwo from "@/components/common/NiceSelectTwo";
import { toast } from "sonner";
import { useUpdateProfileMutation } from "@/redux/api";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setUser } from "@/redux/slices/authSlice";
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
}

const UserProfileUpdate = () => {
  const user = useAppSelector(state => state.auth.user)
  const [ updateProfile ] = useUpdateProfileMutation()
  const router = useRouter();
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // update profile info

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const userUpdateInfo = {
      firstname:data.firstName,
      lastname:data.lastName,
      email:data.email,
      phone: data.phone,
    };
    const toastId = toast.loading("");
    try {
      const response = await updateProfile(userUpdateInfo).unwrap()
      dispatch(setUser(response.user))
      router.push("/profile");
      toast.success(`profile Updated`, { id: toastId, duration: 1000 });
    } catch (error) {
      console.log(error)
    }


  };

  const selectHandler = () => {};

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <div className="signup-wrapper mb-20">
              <input
                id="FirstName"
                type="text"
                placeholder="First Name"
                {...register("firstName")}
                defaultValue={user?.firstname}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="signup-wrapper mb-20">
              <input
                id="LastName"
                type="text"
                placeholder="Last Name"
                {...register("lastName")}
                defaultValue={user?.lastname}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="signup-wrapper mb-20">
              <input
                id="Email"
                type="email"
                placeholder="Email"
                readOnly
                defaultValue={user?.email}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="signup-wrapper mb-20">
              <input
                id="Phone"
                type="text"
                placeholder="Phone"
                {...register("phone")}
                defaultValue={user?.phone}
              />
            </div>
          </div>
          {/* <div className="col-md-6">
            <div className="contact-from-input mb-20">
              <NiceSelectTwo
                options={GenderData}
                defaultCurrent={0}
                onChange={selectHandler}
                name=""
                className="gender-select"
              />
            </div>
          </div> */}

          <div className="col-sm-12">
            <div className="cont-btn mb-20  mt-30">
              <button type="submit" className="fill-btn">
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default UserProfileUpdate;
