import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Snackbar, Alert } from '@mui/material';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding-bottom: 80px;
  align-items: center;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  background: linear-gradient(225deg, #6a00ff 0%, #ff00b8 100%);
  padding: 13px 16px;
  border-radius: 12px;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_qv5tcyf',        // ✅ Correct Service ID
      'template_bh4skge',       // ✅ Correct Template ID
      form.current,
      'kO80fdeD4c3A6mtWl'       // ✅ Your public key here
    )
      .then(
        (result) => {
          console.log('SUCCESS:', result.text);
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.error('FAILED:', error);
          console.error('Error details:', error.text);  // Log detailed error information
          alert("Failed to send email. Please check the console for errors.");
        }
      );
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" required />
          <ContactInput placeholder="Your Name" name="from_name" required />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage placeholder="Message" name="message" rows="4" required />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
          <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
            Email sent successfully!
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  );
};

export default Contact;