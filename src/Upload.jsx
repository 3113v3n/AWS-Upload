import React, { useState } from 'react';
import {fetchAwsFunction} from "./requests";
const UploadImage = ({ ...props }) => {
  const [pic, setPic] = useState(null);
  const handleImageChange = event => {
    setPic(event.target.files[0]);
  };
  const handleUpload = () => {
    fetchAwsFunction(pic)
  };

  return (
    <div className="picture-container">
      <div className="picture">
        <input type={'file'} onChange={e => handleImageChange(e)} />
      </div>
      <button onClick={handleUpload}>upload</button>
    </div>
  );
};
export default UploadImage;
