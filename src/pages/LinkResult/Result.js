/* Dependencies */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ClipboardJS from 'clipboard';

/* Components */
import Input from '@components/Input';
import Button from '@components/Button';
import SuccessMessage from '@components/SuccessMessage';

/* Context */
import { useStateContext } from '@states/context';

/* Utils */
import { removeExceptNumber, convertToUri } from '@utils/formats';

/* Styled Components */
const ResultContent = styled.div`
  text-align: center;
`;

const PreviewTextarea = styled(Input)`
  text-align: center;
`;

/* Result */
const Result = () => {
  // Refs
  const copyButton = useRef();
  const generatedLink = useRef();

  // Global State
  const [{ countryCode, phoneNumber, message }] = useStateContext();

  // Local State
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  // Init clipboard
  useEffect(() => {
    const clickElement = copyButton.current;
    const copyElement = generatedLink.current;

    const clipboard = new ClipboardJS(
      clickElement, {
        target: () => copyElement
      }
    );

    // Clear selection when copy success
    clipboard.on('success', (event) => {
      event.clearSelection();
      setShowCopiedMessage(true);
    });
  }, [copyButton, generatedLink]); // eslint-disable-line react-hooks/exhaustive-deps

  // Hide success message after 3 second
  useEffect(() => {
    if (showCopiedMessage) {
      setTimeout(() => {
        setShowCopiedMessage(false);
      }, 2000);
    }
  }, [showCopiedMessage]);

  const apiParam = {
    phone: phoneNumber.length ? `${removeExceptNumber(countryCode)}${removeExceptNumber(phoneNumber)}` : '',
    message: message.length ? `?text=${convertToUri(message)}` : ''
  };

  const finalUrl = `https://wa.me/${apiParam.phone}${apiParam.message}`;

  return (
    <ResultContent>
      <p>Here is the WhatsApp link generated based on your input:</p>
      <PreviewTextarea readOnly={true} ref={generatedLink} value={finalUrl} />
      <Button type="button" ref={copyButton}>Copy Link</Button>
      <SuccessMessage show={showCopiedMessage} mountOnEnter={false} unmountOnExit={false} >Link copied!</SuccessMessage>
    </ResultContent>
  );
}

export default Result;
