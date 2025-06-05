import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 20px;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: rgba(133, 76, 230, 0.35) 0px 8px 32px;
    cursor: pointer;
  }

`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Company = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 4px;
`;

const Date = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_tertiary};
  margin-top: 2px;
`;

const Description = styled.p`
  font-size: 15px;
  margin-top: 10px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Button = styled.button`
  margin-top: 12px;
  padding: 8px 16px;
  font-size: 14px;
  background-color: #854CE6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6b39c6;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 12px;
  max-width: 90%;
  max-height: 80%;
  overflow: auto;
  position: relative;
`;

const CertificateImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 12px;
  background: none;
  border: none;
  font-size: 24px;
  color: #333;
  cursor: pointer;
`;

const CertificationsCard = ({ certification }) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Card>
                <Title>{certification.title}</Title>
                <Company>{certification.company}</Company>
                <Date>{certification.date}</Date>
                <Description>{certification.description}</Description>
                {certification.image && (
                    <Button onClick={() => setOpenModal(true)}>View Certificate</Button>
                )}
            </Card>

            {openModal && (
                <ModalOverlay onClick={() => setOpenModal(false)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={() => setOpenModal(false)}>&times;</CloseButton>
                        <CertificateImage src={certification.image} alt="Certificate" />
                    </ModalContent>
                </ModalOverlay>
            )}
        </>
    );
};

export default CertificationsCard;
