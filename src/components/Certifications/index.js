import React from 'react';
import styled from 'styled-components';
import CertificationsCard from '../Cards/CertificationsCard';
import { certifications } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* center content horizontally */
  position: relative;
  z-index: 1;
  padding: 40px 20px 80px 20px;

  @media (max-width: 960px) {
    padding: 20px 10px;
  }
`;

const Wrapper = styled.div`
  max-width: 1350px;
  width: 100%;
  padding: 40px 0;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 40px auto;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto; /* center grid horizontally */

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* single column on very small screens */
  }
`;

const Index = () => {
    return (
        <Container id="Certifications">
            <Wrapper>
                <Title>Certifications</Title>
                <Desc>Recognized Certifications that Back My Data Analytics Knowledge.</Desc>
                <Grid>
                    {certifications.map((cert, index) => (
                        <CertificationsCard key={index} certification={cert} />
                    ))}
                </Grid>
            </Wrapper>
        </Container>
    );
};

export default Index;
