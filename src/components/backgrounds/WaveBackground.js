import React from 'react'
import styled from 'styled-components';

function WaveBackground() {
    return (
        <Wrapper>
            <Background />
            <Wave src="../../images/waves/hero-wave1.svg" style={{ top: "100px", filter: `blur(60px)` }} />
            <Wave src="../../images/waves/hero-wave2.svg" style={{ top: "350px" }} />
            <BottomWave src="../../images/waves/hero-wave3.svg" style={{ top: "550px" }} />

        </Wrapper>

    )
}

export default WaveBackground

const Wrapper = styled.div`

    position: relative;

`


const Wave = styled.img`
    position: absolute;
    z-index: -1;

@media(min-width: 1440px){
    width: 100%;
}
`

const BottomWave = styled(Wave)`

    @media (prefers-color-scheme: dark){
        content: url("../../images/waves/footer-wave3.svg")

    }
`

const Background = styled.div`

     background: linear-gradient(63deg, rgb(205, 183, 223) 5%, rgb(233, 134, 90) 100%);
     position: absolute;
     width: 100%;
     height: 800px;
     z-index: -1;
`