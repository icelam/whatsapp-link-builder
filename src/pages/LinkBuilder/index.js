/* Dependencies */
import React from 'react';

/* Components */
import Page from '@components/Page';
import BuilderForm from '@pages/LinkBuilder/BuilderForm';
import BuilderCountryList from '@pages/LinkBuilder/BuilderCountryList';

/* Landing Page */
const LinkBuilder = () => (
  <Page>
    <p>Generates a link which will directly open WhatsApp with pre-defined message or contact number, and you can it share on your social networks!</p>
    <p>You need to provide either the mobile number or message to generate a link.</p>
    <BuilderForm />
    <BuilderCountryList />
  </Page>
);

export default LinkBuilder;
