/* Dependencies */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useStateContext } from '@states/context';

/* Components */
import PageFill from '@components/PageFill';
import Loading from '@components/Loading';
import Result from '@pages/LinkResult/Result';

/* Routes */
import routes from '@routes';

/* Hooks */
import { useFormState } from '@hooks/useFormState';

/* Landing Page */
const LinkResult = () => {
  const [{countryCode, phoneNumber, message}] = useStateContext();
  // Custom Hook - Check if form is ready to submit
  const allowSubmit = useFormState({countryCode, phoneNumber, message});

  if (allowSubmit) {
    return (
      <PageFill>
        <Result />
      </PageFill>
    );
  } else if (allowSubmit != null) {
    return (<Redirect to={routes.home} />);
  } else {
    return (<Loading />);
  }
};

export default LinkResult;
