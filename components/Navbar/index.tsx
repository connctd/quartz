import * as React from "react"
import styled from "styled-components"
import { defaultTheme, QuartzTheme } from "../theme"

const MainNavbar = styled.div`
    background: #302C70;
    height: 60px;
    font-size: 14px;
    position: sticky;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    .Items {
        order: 0;
        align-self: flex-start;
        display: flex;
    }

    .Staples {
        order:1;
        align-self: flex-start;
        margin-left: auto;
        display: flex;
    }

    .menuName {
        color: white;
        margin: 20px;
    }

    a {
        width: 150px;
        color: white;
        text-decoration: none;
        margin: 20px;
    }

    .navgroup {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        
        width: 150px;
        margin: 0px;
        padding: 0px;
        height: 63px;
        text-align: center;
    }
    
    .navgroup div {
        margin: 20px;
        color: white;
    }
    
    .navgroup ul {
        visibility: hidden;
        list-style: none;
        margin-top: auto;
        background: blue;
        padding: 0px;
    }

    .navgroup:hover {
        background: blue;
    }

    .navgroup:hover ul{
        visibility: visible;
        
    }

    .navgroup ul:hover{
        visibility: visible;
    }

    .navgroup ul li:hover {
        visibility: visible;
    }

    .navgroup ul li {
        padding: 10px 0px 10px;
    }

`




/* const MenuCategory = styled.li`
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
        
        ul a:hover {
            background: #302C70;
            color:white;
        }
`
*/

export const ArrowDown = styled.div`
    border: solid white;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    margin: -3px 10px 0px;
    transform: rotate(45deg);
`

interface NavbarProps {
    text?: string,
    theme?: QuartzTheme,
    children?: React.ReactNode,
}

export const Navbar: React.FC<NavbarProps> = ({
    text,
    theme,
    children,
}) => {
    return (
        <MainNavbar>
            {children}
        </MainNavbar>
    )
}

Navbar.defaultProps = {
    theme: defaultTheme,
};

// Navlink

interface NavlinkProps {
    text?: string,
    theme? : QuartzTheme,
    target?: string,
};

export const Navlink: React.FC<NavlinkProps> = ({
    text,
    theme,
    target,
}) => {
    return (
        <a href={target}>{text}</a>
    )
}

Navlink.defaultProps = {
    theme: defaultTheme,
};

interface NavgroupProps {
    theme? : QuartzTheme,
    children?: React.ReactNode,
};

export const Navgroup: React.FC<NavgroupProps> = ({
    theme,
    children,
}) => {

    return (
        <div className="navgroup">
            {children}
        </div>
    )
}

Navgroup.defaultProps = {
    theme: defaultTheme,
};

interface MenugrpupProps {
    theme? : QuartzTheme,
    children? : React.ReactNode,
}

export const Menugroup: React.FC<MenugrpupProps> = ({
    theme,
    children,
}) => {
    return (
        <ul>
            {React.Children.map(children, (child, i) => {
                return <li>{child}</li>
            })}
        </ul>
    )
}

Menugroup.defaultProps = {
    theme: defaultTheme
};