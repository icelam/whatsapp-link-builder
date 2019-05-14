/* Dependencies */
import React from 'react';
import { Redirect } from 'react-router-dom';

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
  // Custom Hook - Check if form is ready to submit
  const allowSubmit = useFormState();

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
