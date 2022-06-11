import axios from 'axios';

export const uploadImg = async file => {
  try {
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dstwynawj/upload/';
    const formData = new FormData();
    formData.append('upload_preset', 'titulacion');
    formData.append('file', file);

    const resp = await axios.post(cloudUrl, formData);
    const { data } = resp;

    if (data) {
      return data.secure_url;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
  }

  
};
