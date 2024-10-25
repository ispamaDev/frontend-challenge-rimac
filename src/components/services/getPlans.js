import axios from "axios";

const fetchPlans = async () => {
    const { data } = await axios.get('https://rimac-front-end-challenge.netlify.app/api/plans.json');
    return data;
  };


  export {fetchPlans}