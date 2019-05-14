export const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_COUNTRY_INFO':
      return {
        ...state,
        countryName: action.countryName,
        countryCode: action.countryCode
      };

    case 'UPDATE_PHOME_NUMBER':
      return {
        ...state,
        phoneNumber: action.phoneNumber
      };

    case 'UPDATE_MESSAGE':
      return {
        ...state,
        message: action.message
      };

    case 'SHOW_COUNTRY_LIST_MODAL':
      return {
        ...state,
        showCountryList: true
      };

    case 'HIDE_COUNTRY_LIST_MODAL':
      return {
        ...state,
        showCountryList: false
      };

    case 'RESET_ALL_STATE':
      return {
        ...state,
        countryName: '',
        countryCode: '',
        phoneNumber: '',
        message: '',
        showCountryList: false
      };

    default:
      return state;
  }
};
