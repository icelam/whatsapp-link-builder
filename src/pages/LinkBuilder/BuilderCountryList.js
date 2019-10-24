/* Dependencies */
import React, { useMemo } from 'react';

/* Components */
import Modal from '@components/Modal';
import ListItem from '@components/ListItem';

/* Utils */
import countryUtils from '@utils/countryUtils';

/* Context */
import { useStateContext } from '@states/context';
import * as actions from '@states/actions';

/* Country List */
const BuilderCountryList = () => {
  const [{ showCountryList }, dispatch] = useStateContext();

  const model = useMemo(() => {
    // Dispatch actions
    const closeModal = () => {
      dispatch(actions.closeModal());
    };
    const listItemSelectHandler = (countryName, countryCode) => {
      dispatch(actions.updateCountryInfo(countryName, countryCode));
      closeModal();
    };

    return (
      <Modal title="Country" closeFunc={closeModal} show={showCountryList}>
      {
        countryUtils.getCountryList().map((c, i) => (
          <ListItem key={i} onClick={ () => { listItemSelectHandler(c.name, c.code) } }>
            <span>{c.name}</span>
            <span>+{c.code}</span>
          </ListItem>
        ))
      }
    </Modal>
    )
  }, [dispatch, showCountryList])


  return model
};

export default BuilderCountryList;
