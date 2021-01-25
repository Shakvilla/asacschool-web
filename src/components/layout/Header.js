import { Link } from 'gatsby'
import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import logo from '../../images/icons/logo.svg'
import { menuData } from '../../data/menuData'
import MenuButton from '../buttons/MenuButton'
import MenuTooltip from '../tooltips/MenuTooltip'


function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef()
    const tooltipRef = useRef()

    const handleClick = (event) => {
        event.preventDefault()
        setIsOpen(!isOpen)
        // console.dir(event)
    }

    function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)
            && !tooltipRef.current.contains(event.target)) {
            // console.log("Document is clicked!!")
            setIsOpen(false);

        }
    }


    useEffect(() => {

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])


    return (
        <Wrapper onClick={() => setIsOpen(!isOpen)}>
            <Link to="/">
                <img src={logo} alt="asacschool" className="logo" />
            </Link>
            <MenuWrapper count={menuData.length} ref={ref}>
                {menuData.map((item, index) =>
                    item.link === "/accounts" ? (
                        <MenuButton
                            key={index}
                            item={item}
                            onClick={(event) => handleClick(event)}
                        />
                    ) : (
                            <MenuButton key={index} item={item}

                            // onClick={() => setIsOpen(!isOpen)}
                            />

                        )
                )}
                <HamburgerWrapper>
                    <MenuButton item={{ title: "", icon: "../../images/icons/hamburger.svg", link: "/" }} />
                </HamburgerWrapper>
            </MenuWrapper>
            <div ref={tooltipRef}>
                <MenuTooltip isOpen={isOpen} />
            </div>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    position: absolute;
    top: 60px;
    display: grid;
    grid-template-columns: 44px auto;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 30px;

    .logo{
        width: 25px;
        height: 25px;
    }

@media screen and(max-width: 768px){
    top: 30px;
}


@media screen and(max-width: 450px){
    top: 20px;
    padding: 0 20px;
}
`

const MenuWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.count},auto);
    gap: 30px;
    /* overflow: hidden; */

    @media screen and (max-width: 768px){


      >  a{
            display: none;
        }
                grid-template-columns: auto;

    }
`


const HamburgerWrapper = styled.div`
display: none;

@media screen and (max-width: 768px){
    display: block;
}

`

