// pages/index.tsx

import React, { useState } from 'react';
import ImageSelect from './ImageSelect';
import { useAppSelector } from '@/redux/hooks';
import { useCheckVerficationMutation } from '@/redux/api';
import { toast } from 'sonner';

const SmileVerification = () => {
    const [image,setImage]=useState(null)
    const [imageId,setImageId]=useState(null)
    const user = useAppSelector(state => state.auth.user)
    const [checkVerfied] = useCheckVerficationMutation();

  const handleImageSelect = (file: File | null) => {
    if (file) {
        setImage(file as any);
    } else {
      console.log('No file selected');
    }
  };
  const handleImageSelectId = (file: File | null) => {
    if (file) {
        setImageId(file as any);
    } else {
      console.log('No file selected');
    }
  };
  let data={
    user_image:image,
    user_image_id:imageId,
    user_id:user?.id
  }
function handleSubmit(){
    const formData = new FormData();
    formData.append('user_id', user?.id);
    formData.append('user_image', image);
    formData.append('user_image_id', imageId);
    const toastId = toast.loading("");
    checkVerfied(data)
    .unwrap()
    .then(response => {
      toast.success("Successfully verifed redirect to Login Page", { id: toastId, duration: 1000 })
    })
    .catch(error => {
      toast.error(error?.data, { id: toastId, duration: 1000 })
      console.error('Error:', error);
    });
  };

  return (
    <div className=''>

     <div className='d-flex align-items-center gap-5'>
     <div>
      <h3>Select an your Image</h3>
      <ImageSelect className={"imagePreviewProfile"} onImageSelect={handleImageSelect} />
    </div>    
     <div>
      <h3>Select an your Id Image</h3>
      <ImageSelect   className={"imagePreview"} onImageSelect={handleImageSelectId} />
    </div>    

    </div>
    {imageId && image? 
    <button onClick={()=>handleSubmit()} style={{height:"50px",lineHeight:"50px"}} type="button"  className="fill-btn mt-4">Verification</button>:"" } 
    </div>
    
   
  );
};

export default SmileVerification;
