import axios from "axios";

const fetchUser = async () => {
    const { data } = await axios.get('https://rimac-front-end-challenge.netlify.app/api/user.json');
    return data;
  };


  export {fetchUser}