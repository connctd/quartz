import * as React from "react"
import styled from "styled-components"
import { defaultTheme, QuartzTheme } from "../theme"

const MainNavbar = styled.div`
    background: ${props => props.theme.gradient.secondary.end};
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
        background: ${props => props.theme.tertiary};
    }

    .Staples {
        order:1;
        align-self: flex-start;
        margin-left: auto;
        display: flex;
        background: ${props => props.theme.tertiary};
    }

    .menuName {
        color: white;
        margin: 20px;
    }

    a {
        width: 150px;
        color: white;
        text-decoration: none;
        padding: 20px 0px 20px;
        text-align: center;
    }
    
    

`

const MainNavgroup = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    width: 150px;
    margin: 0px;
    padding: 0px;
    height: 63px;
    text-align: center;
    

    box-shadow: ${props => {const shadow = "0px 3px 0px 0px " + props.theme.secondary; if (props.focus === true) {return shadow;} else {return "none"} }};


    div {
    margin: 20px;
    color: white;
    display: inline-block;
    transition: transform 0.25s;
    
    }

    :hover .down {
        transform: rotate(-135deg);
    }

    :hover .up {
        transform: rotate(45deg);
    }

    :hover .left {
        transform: rotate(-45deg);
    }

    :hover .right {
        transform: rotate(135deg);
    }
    
    div p {
        margin: 0px;
    }

    .menuArrow {
        border: solid white;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 3px;
        margin: -3px 10px 0px;
        
    }

    

    .down{
        transform: rotate(45deg);
    }

    .up {
        transform: rotate(-135deg);
    }

    .left {
        transform: rotate(135deg);
    }

    .right {
        transform: rotate(-45deg);
    }

    

    ul {
        visibility: hidden;
        list-style: none;
        margin-top: auto;
        background: ${props => props.theme.tertiary};
        padding: 0px;
        opacity: 0.0;
        transition: opacity 0.25s;
    }

    :hover ul{
        visibility: visible;
        opacity: 1.0;
    }

    ul:hover{
        visibility: visible;
    }

    ul li:hover {
        visibility: visible;
        background: ${props => props.theme.gradient.secondary.end};
    }

    ul li {
        padding: 12px 0px 12px;
    }

`





/* const MenuCategory = styled.li`
    float:left;

    div {
        width: 150px;
        height: 60px;
        
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
        <MainNavbar theme={theme}>
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
    focus?: Boolean,
};

export const Navlink: React.FC<NavlinkProps> = ({
    text,
    theme,
    target,
    focus,
}) => {
    return (
        <a className={focus? "focus" : ""} href={target}>{text}</a>
    )
}

Navlink.defaultProps = {
    theme: defaultTheme,
};

interface NavgroupProps {
    theme? : QuartzTheme,
    children?: React.ReactNode,
    focus?: Boolean,
};

export const Navgroup: React.FC<NavgroupProps> = ({
    theme,
    children,
    focus,
}) => {

    return (
        <MainNavgroup focus={focus} theme={theme}>
            {children}
        </MainNavgroup>
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
    theme: defaultTheme,
};

interface MenuarrowProps {
    theme? : QuartzTheme,
    up? : Boolean,
    down? : Boolean,
    left? : Boolean,
    right? : Boolean,
}

export const Menuarrow: React.FC<MenuarrowProps> = ({
    theme,
    up,
    down,
    left,
    right,
}) => {
    var arrowName: string = "";

    if (up === true) {
        arrowName = "menuArrow up";
    } else if (down === true) {
        arrowName = "menuArrow down";
    } else if (left === true) {
        arrowName = "menuArrow left";
    } else if (right === true) {
        arrowName = "menuArrow right";
    }

    return (
        <div className={arrowName}></div>
    )
}

Menuarrow.defaultProps = {
    theme: defaultTheme,
};