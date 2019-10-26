/*
 * Check if form is enough to submit / generate link
 * Valid case:
 * 1. Both country code and phone number are not empty and correct
 * 2. Phone number is empty but message contains at least 1 character, country code should be either empty or correct
 * 3. Case 1 + message not empty
 */

/* Dependencies */
import { useState, useEffect } from 'react';

/* Context */
// import { useStateContext } from '@states/context';

/* Utils */
import validator from '@utils/validator';

export const useFormState = ({ countryCode, phoneNumber, message }) => {
  const [allowGenerate, setAllowGenerate] = useState(null);

  useEffect(() => {
    let formDataValid = false;

    if (phoneNumber.length || message.length) { // Phone or message not empty
      if (countryCode.length && validator.phone(countryCode)
        && phoneNumber.length && validator.phone(phoneNumber)) { // Country code + phone not empty
        formDataValid = true;
      } else if (!phoneNumber.length && message && (!countryCode.length || validator.phone(countryCode))) { // phone empty, message not empty and Country code empty or correct
        formDataValid = true;
      }
    }

    setAllowGenerate(formDataValid);
  },[countryCode, phoneNumber, message]); // eslint-disable-line react-hooks/exhaustive-deps

  return allowGenerate;
};
