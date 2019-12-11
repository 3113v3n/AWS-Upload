import axios from 'axios';
const endpointUrl = 'http://127.0.0.1:5000/api/sign/post';
const getUrl = 'http://127.0.0.1:5000/api/sign/get';
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NzYwODQ5MjUsIm5iZiI6MTU3NjA4NDkyNSwianRpIjoiMDJlNjJlODUtMzE0Yi00MTc5LTliMzYtNjA4NTE2NzNhZjA0IiwiZXhwIjoxNTc2MDkyMTI1LCJpZGVudGl0eSI6MSwiZnJlc2giOnRydWUsInR5cGUiOiJhY2Nlc3MiLCJ1c2VyX2NsYWltcyI6eyJyb2xlIjoiSUEifX0.FijqQFB7F_pHBDnkZB8sGsROncBZPgdOrZauUY3D2eg';

export const fetchAwsFunction = image => {
  axios
    .get(`${endpointUrl}/${image.name}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
        console.log(response.data);
      uploadImage(response.data.payload, image);
    })
    .catch(error => console.log(error));
};
const uploadImage = (url, imageData) => {
    //let splitUrl=url.split("?");
    //console.log(splitUrl[1]);

  axios
    .put(`${url}`, imageData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => console.log(res.data))
    .catch(error => console.log(error));

};
export const getImage = name => {
  axios
    .get(`${getUrl}/${name}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => console.log(res.data))
    .catch(error => console.log(error));
};
