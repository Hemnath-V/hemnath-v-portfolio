import styled from 'styled-components';
import { siLeetcode, siGeeksforgeeks } from 'simple-icons/icons';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code'; // for GeeksforGeeks
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'; // for LeetCode
import EmailIcon from '@mui/icons-material/Email';
import { SiLeetcode } from 'react-icons/si';


import { Bio } from '../../data/constants';

import SvgIcon from '@mui/material/SvgIcon';

function LeetCodeIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path
        d="M20.47 12.86a1.3 1.3 0 00-1.82 0l-6.29 6.29a2.76 2.76 0 01-3.9 0 2.76 2.76 0 010-3.9l8.25-8.25a1.3 1.3 0 000-1.82 1.3 1.3 0 00-1.82 0l-8.25 8.25a5.36 5.36 0 000 7.58 5.36 5.36 0 007.58 0l6.29-6.3a1.3 1.3 0 000-1.85z"
        fill="white"
      />
    </SvgIcon>
  );
}


const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Hemnath V</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>

        <SocialMediaIcons>
          <SocialMediaIcon href={`mailto:${Bio.email}`} target="_blank" rel="noopener noreferrer">
            <EmailIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.github} target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.gfg} target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
              alt="GeeksforGeeks"
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#000',
                padding: '4px',
                borderRadius: '10px',
                filter: 'invert(1)',
              }}
            />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.leetcode} target="_blank" rel="noopener noreferrer">
            <SiLeetcode style={{ color: 'white', fontSize: 24 }} />
          </SocialMediaIcon>
        </SocialMediaIcons>

        <Copyright>
          &copy; 2025 Hemnath V. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;