/* Dependencies */
import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

/* Components */
import InputGroup from '@components/InputGroup';
import Label from '@components/Label';
import Input from '@components/Input';
import InputWithSymbol from '@components/InputWithSymbol';
import Textarea from '@components/Textarea';
import Button from '@components/Button';
import ErrorMessage from '@components/ErrorMessage';

/* Routes */
import routes from '@routes';

/* Hooks */
import { useCountryState } from '@hooks/useCountryState';
import { useFormState } from '@hooks/useFormState';

/* Context */
import { useStateContext } from '@states/context';
import * as actions from '@states/actions';

/* Utils */
import countryUtils from '@utils/countryUtils';
import validator from '@utils/validator';

/* Common Styles */
import { mediaQueries } from '@styles/media';

/* Styled Components */
const LinkBuilderFrom = styled.form`
  padding: 0 0;
  margin: 0;
`;

const PhoneGroup = styled.div`
  &:after{
    content: ".";
    display: block;
    font-size: 0;
    line-height: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
`;

const DailCodeInputGroup = styled(InputGroup)`
  width: 30%;
  margin-right: 3%;
  float: left;

  @media ${mediaQueries.mobile} {
    width: 40%;
    margin-right: 5%;
  }
`;

const PhoneNumberInputGroup = styled(InputGroup)`
  width: 67%;
  float: left;

  @media ${mediaQueries.mobile} {
    width: 55%;
  }
`;

const CenterContent = styled.div`
  text-align: center;
`;

/* Form */
const BuilderForm = withRouter(({ history }) => {
  const [errorState, setErrorState] = useState({ countryCode: false, phoneNumber: false });

  const [{ countryName, countryCode, phoneNumber, message }, dispatch] = useStateContext();

  // Custom Hook - Subscribe to auto counrty detection
  useCountryState();

  // Custom Hook - Check if form is ready to submit
  const allowSubmit = useFormState();

  // Phone Format Checking
  useEffect(() => {
    setErrorState({
      // Error case for country code - Country code not empty and format wrong || Phone number not empty and country code empty
      countryCode: ((countryCode.length > 0 && !validator.phone(countryCode)) || (phoneNumber.length > 0 && !countryCode.length)),
      // Error case for phone number - Phone number not empty and format wrong
      phoneNumber: phoneNumber.length > 0 && !validator.phone(phoneNumber)
    });
  }, [countryCode, phoneNumber]);

  // SubmitHandler
  const submitHandler = (e) => {
    e.preventDefault();

    // Final format checking here
    if (allowSubmit) {
      history.push(routes.result);
    }
  };
  const inputGroup = useMemo(() =>{
    const openModal = () => {
      dispatch(actions.openModal());
    };
    return (<InputGroup>
      <Label htmlFor="countryName">Country</Label>
      <Input
        placeholder="Select your country"
        id="countryName"
        readOnly={true}
        value={countryName}
        onClick={openModal}
      />
    </InputGroup>);
  }, [countryName, dispatch]);

  const dailCodeInputGroup = useMemo(() => {
    // Dispatch actions
    const updateCountryInfo = (countryName, countryCode) => {
      dispatch(actions.updateCountryInfo(countryName, countryCode));
    };
    return (<DailCodeInputGroup>
      <Label htmlFor="countryCode">Code</Label>
      <InputWithSymbol
        symbol="+"
        placeholder="Type your country code here"
        id="countryCode"
        value={countryCode}
        onChange={e => { updateCountryInfo(countryUtils.getCountryName(e.target.value), e.target.value) }}
      />
      <ErrorMessage show={errorState.countryCode}>Invalid country code</ErrorMessage>
    </DailCodeInputGroup>);
  }, [countryCode, dispatch, errorState.countryCode]);

  const phoneNumberInputGroup = useMemo(() => {
    const updatePhoneNumber = (phoneNumber) => {
      dispatch(actions.updatePhoneNumber(phoneNumber));
    };  
    return (
      <PhoneNumberInputGroup>
        <Label htmlFor="phoneNumber">Mobile number</Label>
        <Input
          placeholder="Type the mobile number you are sending to"
          id="phoneNumber"
          value={phoneNumber}
          onChange={e => { updatePhoneNumber(e.target.value) }}
        />
        <ErrorMessage show={errorState.phoneNumber}>Invalid mobile number</ErrorMessage>
      </PhoneNumberInputGroup>
    );
  }, [dispatch, errorState.phoneNumber, phoneNumber]);

  const msgBox = useMemo(()=> {
    const updateMessage = (message) => {
      dispatch(actions.updateMessage(message));
    };
    return (
      <InputGroup>
        <Label htmlFor="message">Message</Label>
        <Textarea
          placeholder="Type your message here"
          id="message"
          value={message}
          onChange={e => { updateMessage(e.target.value) }}
        />
      </InputGroup>
    );
  }, [dispatch, message])

  const buttonBox = useMemo(()=> {
    return (
      <CenterContent>
        <Button type="submit" disabled={!allowSubmit}>Generate</Button>
      </CenterContent>
    )
  }, [allowSubmit]);
  return (
    <LinkBuilderFrom onSubmit={submitHandler}>
      {inputGroup}
      <PhoneGroup>
        {dailCodeInputGroup}
        {phoneNumberInputGroup}
      </PhoneGroup>
      {msgBox}
      {buttonBox}
    </LinkBuilderFrom>
  )
});

export default BuilderForm;
