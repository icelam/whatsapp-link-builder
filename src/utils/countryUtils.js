import { removeExceptNumber } from '@utils/formats';

import countryList from '@data/countryList.json';

// Find country name from dail code
const getCountryName = (countryCode) => {
  if (countryCode) {
    const possibleMatch = countryList.filter(c => removeExceptNumber(c.code) === removeExceptNumber(countryCode));
    const countryName = possibleMatch.length > 0 ? possibleMatch[0].name : 'Unknown';
    return countryName;
  }
  return '';
};

// Search for country by keywords
const getCountryNameByString = (countryKeyword) => {
  if(countryKeyword) {
    return countryList.filter(c => new RegExp(countryKeyword).test(c.name));
  } else {
    return [];
  }
};

// Return all countries
const getCountryList = () => countryList;

export default { getCountryName, getCountryNameByString, getCountryList };
