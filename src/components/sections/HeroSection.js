import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'
import { H1, MediumText } from '../styles/TextStyles'
import { themes } from '../styles/ColorStyles'
import PurchaseButton from '../buttons/PurchaseButton'
import MockupAnimation from '../animations/MockupAnimation'


function HeroSection() {
    return (
        <>
            <Wrapper>
                <ContentWrapper>
                    <TextWrapper>
                        <Title>Asac <br />School. Learn to Code</Title>
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


const Wrapper = styled.div`
    background: linear-gradient(63deg, rgb(205, 183, 223) 5%, rgb(233, 134, 90) 92%);
    overflow: hidden;


`

const ContentWrapper = styled.div`
    max-width: 1234px;
    padding: 200px 30px;
    margin: 0 auto; 
    display: grid;
    grid-template-columns: 360px auto; 
`

const TextWrapper = styled.div`
    max-width: 360px;
    display: grid;
    gap: 30px;
`

const Title = styled(H1)`
    
    color: ${themes.dark.text1}
`

const Description = styled(MediumText)`

    
`