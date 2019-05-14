import axios from 'axios';

const detectCountry = () => axios.get(`http://ip-api.com/json/?fields=status,message,country`);

export default { detectCountry };
