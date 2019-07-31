import * as React from "react"
import styled from "styled-components"
import { defaultTheme, QuartzTheme } from "../theme"

const MainNavbar = styled.div`
    background: #302C70;
    height: 60px;
    font-size: 14px;
    position: sticky;
    width: 100%;
`

const MenuName = styled.div`
    color: white;
    float: left;
    display: inline; 
    margin: 20px;
`


const MenuList = styled.ul`
    list-style: none;
    margin: 0px;
`

const MenuCategory = styled.li`
    float:left;

    div {
        width: 150px;
        height: 60px;
        background: #201E50;
        color: white;
        display: flex;
        text-decoration: none;
        padding: 0px 10px 0px;
        
        justify-content:center;
        align-items:center
    }

    ul {
        background: #201E50;
        color:white;
        display: none;
        list-style: none;
        padding-inline-start: 0px;
        position: absolute;
    }

    ul a {
        width: 150px;
        color: white;
        display: block;
        text-decoration: none;
        text-align: left;
        padding: 10px 10px 10px;
    }
    
    ul a: hover {
        background: #302C70;
        color:white;
    }

    :hover ul{
        display: block;
    }

    .current {
        -webkit-box-shadow: 0px 2px 0px 0px #B1938B, 0px 2px 0px 0px rgba(25,162,135,0); 
        box-shadow: 0px 2px 0px 0px #B1938B, 0px 2px 0px 0px rgba(25,162,135,0);        
    }

    .right {
        float:right !important;
    }
`
const MenuStaple = styled.li`
    float:right;

        span {
            width: 150px;
            height: 60px;
            background: #201E50;
            color: white;
            display: flex;
            text-decoration: none;
            
            justify-content:center;
            align-items:center;
            padding: 0px 10px 0px;
        }

        ul {
            background: #201E50;
            color:white;
            display: none;
            list-style: none;
            padding-inline-start: 0px;
            position: absolute;
        }

        :hover ul{
            display: block;
        }

        ul a {
            width: 150px;
            color: white;
            display: block;
            text-decoration: none;
            text-align: left;
            padding: 10px 10px 10px;
        }
        
        ul a: hover {
            background: #302C70;
            color:white;
        }
`

const ArrowDown = styled.div`
    border: solid white;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    margin: -3px 10px 0px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
`

interface NavbarProps {
    text?: string,
    theme?: QuartzTheme,
    menuContent?: { categorys: Array<{ id: number, categoryName: string, default: boolean, menuLinks: Array<{ name: string, target: string, }> }>, staples: Array<{ id: number, stapleName: string, stapleLinks: Array<{ name: string, target: string, }> }> },
}

export const Navbar: React.FC<NavbarProps> = ({
    text,
    theme,
    menuContent,
}) => {
    const mContent = menuContent;
    return (
        <MainNavbar>
            <MenuName>{text}</MenuName>
            <MenuList>
                {mContent!.categorys.map((value, index) => <MenuCategory key={value}> <div className={value.default ? "current" : undefined}> {value.categoryName}</div> <ul> {value.menuLinks.map((value, index) => <li key={value.name}><a href={value.target}>{value.name}</a></li>)} </ul> </MenuCategory>)}
                {mContent!.staples.map((value, index) => <MenuStaple key={value}> <span> {value.stapleName}<ArrowDown /> </span> <ul> {value.stapleLinks.map((value, index) => <li key={value.name}><a href={value.target}>{value.name}</a></li>)} </ul> </MenuStaple>)}
            </MenuList>
        </MainNavbar>
    )
}

Navbar.defaultProps = {
    theme: defaultTheme,
};