export const removeSpace = (str) => str.toString().replace(/\s/g,'');

export const removeExceptNumber = (str) => str.toString().replace(/\D+/g, '');

export const convertToUri = (val) => encodeURI(val);
