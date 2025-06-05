import React from 'react';
import HeroBgAnimation from '../HeroBgAnimation';
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ResumeButton } from './HeroStyle'; // Corrected import
import HeroImg from '../../images/HeroImage.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { SiLeetcode } from 'react-icons/si';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>

                        {/* Social Media Icons */}
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
                        </SocialMediaIcons>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
}

export default HeroSection;