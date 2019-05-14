export const updateCountryInfo = (countryName, countryCode) => ({ type: 'UPDATE_COUNTRY_INFO', countryName, countryCode });

export const updatePhoneNumber = (phoneNumber) => ({ type: 'UPDATE_PHOME_NUMBER', phoneNumber });

export const updateMessage = (message) => ({ type: 'UPDATE_MESSAGE', message });

export const openModal = () => ({ type: 'SHOW_COUNTRY_LIST_MODAL' });

export const closeModal = () => ({ type: 'HIDE_COUNTRY_LIST_MODAL' });

export const resetAllState = () => ({ type: 'RESET_ALL_STATE' });
