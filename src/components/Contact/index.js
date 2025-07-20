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

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

const ErrorText = styled.span`
  color: red;
  font-size: 13px;
  margin-top: 4px;
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

const FixedSnackbar = styled(Snackbar)`
  && {
    position: fixed;
    z-index: 99999;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Contact = () => {
  const form = useRef();

  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [errors, setErrors] = useState({});

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const fromEmail = formData.get('from_email').trim();
    const fromName = formData.get('from_name').trim();
    const subject = formData.get('subject').trim();
    const message = formData.get('message').trim();

    const newErrors = {};

    if (!fromEmail) {
      newErrors.from_email = 'Please enter your email.';
    } else if (!fromEmail.endsWith('@gmail.com')) {
      newErrors.from_email = 'Only @gmail.com emails are allowed.';
    }

    if (!fromName) newErrors.from_name = 'Please enter your name.';
    if (!subject) newErrors.subject = 'Please enter a subject.';
    if (!message) newErrors.message = 'Please enter a message.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    emailjs
      .sendForm(
        'service_qv5tcyf',
        'template_bh4skge',
        form.current,
        'kO80fdeD4c3A6mtWl'
      )
      .then(() => {
        setSnackbar({ open: true, message: 'Email sent successfully!', severity: 'success' });
        setErrors({});
        form.current.reset();
      })
      .catch((error) => {
        console.error('Email send failed:', error);
        setSnackbar({ open: true, message: 'Failed to send email. Please try again.', severity: 'error' });
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>

          <InputWrapper>
            <ContactInput placeholder="Your Email" name="from_email" />
            {errors.from_email && <ErrorText>{errors.from_email}</ErrorText>}
          </InputWrapper>

          <InputWrapper>
            <ContactInput placeholder="Your Name" name="from_name" />
            {errors.from_name && <ErrorText>{errors.from_name}</ErrorText>}
          </InputWrapper>

          <InputWrapper>
            <ContactInput placeholder="Subject" name="subject" />
            {errors.subject && <ErrorText>{errors.subject}</ErrorText>}
          </InputWrapper>

          <InputWrapper>
            <ContactInputMessage placeholder="Message" name="message" rows="4" />
            {errors.message && <ErrorText>{errors.message}</ErrorText>}
          </InputWrapper>

          <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>

      <FixedSnackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </FixedSnackbar>
    </Container>
  );
};

export default Contact;
