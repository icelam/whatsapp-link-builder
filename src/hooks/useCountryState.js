/*
 * Auto-detect country
 */

/* Dependencies */
import { useEffect } from 'react';

/* Context */
import { useStateContext } from '@states/context';
import * as actions from '@states/actions';

/* Service */
import services from '@services/service';

/* Utils */
import countryUtils from '@utils/countryUtils';

export const useCountryState = () => {
  // eslint-disable-next-line no-empty-pattern
  const [{ countryCode }, dispatch] = useStateContext();

  // Dispatch actions
  const updateCountryInfo = (countryName, countryCode) => {
    dispatch(actions.updateCountryInfo(countryName, countryCode));
  };

  useEffect(() => {
    if (!countryCode) { // auto detect only when store is empty
      const defaultCountryCode = '1';

      services.detectCountry().then(({ data })=> {
        if (data.status === 'success') {
          const possibleMatch = countryUtils.getCountryNameByString(data.country);

          if (possibleMatch.length > 0) {
            updateCountryInfo(possibleMatch[0].name, possibleMatch[0].code);
          }
        } else {
          updateCountryInfo(countryUtils.getCountryName(defaultCountryCode), defaultCountryCode);
        }
      }).catch(() => {
        updateCountryInfo(countryUtils.getCountryName(defaultCountryCode), defaultCountryCode);
      });
    }
  },[]); // eslint-disable-line react-hooks/exhaustive-deps
};
