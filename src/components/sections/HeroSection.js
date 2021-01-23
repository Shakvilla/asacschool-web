import React from 'react'
// import { Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import { H1, MediumText } from '../styles/TextStyles'
import { themes } from '../styles/ColorStyles'
import PurchaseButton from '../buttons/PurchaseButton'
import MockupAnimation from '../animations/MockupAnimation'
import WaveBackground from '../backgrounds/WaveBackground'


function HeroSection() {
    return (
        <>
            <Wrapper>
                <WaveBackground />
                <ContentWrapper>
                    <TextWrapper>
                        <Title>Asac <br /> School <br /> Learn to Code</Title>
                        <Description>Welcome to your new Gatsby site.Welcome to asac school, your number onne place for learning programming.</Description>
                        <PurchaseButton title="Start Learning"
                            subtitle="120+ hours of videos"
                        />
                    </TextWrapper>
                    <MockupAnimation />
                </ContentWrapper>
            </Wrapper>

        </>
    )
}

export default HeroSection

const animation = keyframes`
    from{ opacity: 0; transform: translateY(-10px); filter: blur(10px);}
    to{opacity: 1; transform: translateY(0px); filter: blur(0px);}

`

const Wrapper = styled.div`
    overflow: hidden;


`

const ContentWrapper = styled.div`
    max-width: 1234px;
    padding: 200px 30px;
    margin: 0 auto; 
    display: grid;
    grid-template-columns: 360px auto; 

    @media  (max-width: 450px){

grid-template-columns: auto;
padding: 150px 20px 250px;
gap: 60px;
    }
`

const TextWrapper = styled.div`
    max-width: 360px;
    display: grid;
    gap: 30px;

    >*{
        opacity: 0;
        animation: ${animation} 1s forwards;

        :nth-child(1){
           animation-delay: 0s;
        }

        :nth-child(2){
           animation-delay: 0.2s;
             
        }
        :nth-child(3){
            animation-delay: 0.4s;
        }
    }
`

const Title = styled(H1)`
    color: ${themes.dark.text1};
    background: linear-gradient(180deg, #730040 0%, #301cbe 90%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    @media(max-width){
        font-size: 48px;
    }


`

const Description = styled(MediumText)`

    
`