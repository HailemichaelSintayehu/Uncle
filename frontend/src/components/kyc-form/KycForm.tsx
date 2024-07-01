import React, { useState, ChangeEvent, FormEvent } from 'react';

interface UserInfo {
  [key: string]: any;
}

const DocumentVerificationForm: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const [documentImageFront, setDocumentImageFront] = useState<File | null>(null);
  const [documentImageBack, setDocumentImageBack] = useState<File | null>(null);
  const [selfieImage, setSelfieImage] = useState<File | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo>({});

  const handleFileChange = (setter: React.Dispatch<React.SetStateAction<File | null>>) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files ? e.target.files[0] : null;
    setter(file);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('userId', userId);
    if (documentImageFront) formData.append('documentImageFront', documentImageFront);
    if (documentImageBack) formData.append('documentImageBack', documentImageBack);
    if (selfieImage) formData.append('selfieImage', selfieImage);
    formData.append('userInfo', JSON.stringify(userInfo));

    const response = await fetch('/api/initiate-document-verification', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();
    console.log('Document verification initiation result:', result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <input
        type="file"
        onChange={handleFileChange(setDocumentImageFront)}
        placeholder="Upload Front of Document"
      />
      <input
        type="file"
        onChange={handleFileChange(setDocumentImageBack)}
        placeholder="Upload Back of Document"
      />
      <input
        type="file"
        onChange={handleFileChange(setSelfieImage)}
        placeholder="Upload Selfie"
      />
      <button type="submit">Initiate Document Verification</button>
    </form>
  );
};

export default DocumentVerificationForm;
