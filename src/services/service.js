import axios from 'axios';

const detectCountry = () => axios.get(`https://ipapi.co/json`);

export default { detectCountry };
