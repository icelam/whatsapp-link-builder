/* eslint no-useless-escape: "off" */

const validationRegex = {
  // phone: new RegExp(/^\d+$|^(?![\-\s])([\d\- ]+)([^\-\s])$/)
  phone: new RegExp(/^\d+$|^(([0-9]+)[-. ]?)+\d$/)
};

export const phone = (val) => validationRegex.phone.test(val);

export default { phone };
