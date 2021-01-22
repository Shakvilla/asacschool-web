import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import logo from '../../images/icons/logo.svg'
import { menuData } from '../../data/menuData'


function Header() {
    return (
        <Wrapper>
            <Link to="/">
                <img src={logo} alt="asacschool" className="logo" />
            </Link>
            <MenuWrapper count={menuData.length}>
                {menuData.map((item, index) => (
                    <Link to={item.link} key={index}>
                        <MenuItem title={item.title}>
                            <img src={item.icon} alt={item.title} />
                            {item.title}
                        </MenuItem>

                    </Link>
                ))}
            </MenuWrapper>
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

`

const MenuWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.count},auto);
    gap: 30px;
    /* overflow: hidden; */
`


const MenuItem = styled.div`
    color: rgba(255, 255, 255, 0.7);
    display: grid;
    grid-template-columns: 24px auto;
    gap: ${title => title ? "10x" : "0px"};
    align-items: center;
    padding: 10px;
    transition: 0.5s ease-out;
    :hover{
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
        inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
        border-radius: 10px;


    }

`