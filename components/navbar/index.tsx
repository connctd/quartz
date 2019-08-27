import * as React from "react"
import styled from "styled-components"
import { defaultTheme, Themeable } from "../theme/index"

const MainNavbar = styled.div`
    background: ${props => props.theme.blue};
    font-size: 14px;
    z-index: 100;
    position: sticky;
    width: 100%;
    height: 50px;
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
        padding: 14px 14px 13px 14px;
        font-size: 14px;
        font-weight: 500;
        width: 150px;
        color: white;
        text-decoration: none;
        height: 100%;
        text-align: center;
    }
`

const MainNavgroup = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0px;
    text-align: center;

    box-shadow: ${props => (props.focus ? `0px 3px 0px 0px ${props.theme.secondary}` : "none")};

    &>div {
        color: white;
        display: inline-block;
        transition: transform 0.25s;
        user-select: none;
        padding: 14px 14px 13px 14px;
    }

    :hover {
        background: ${props => props.theme.tertiary};
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
        display: none;
        list-style: none;
        margin-top: auto;
        background: ${props => props.theme.tertiary};
        padding: 0px;
        opacity: 0.0;
        transition: opacity 0.25s;
    }

    :hover ul{
        display: block;
        opacity: 1.0;
    }

    ul li:hover {
        visibility: visible;
        background: ${props => props.theme.blue};
    }

    ul li {
        padding: 12px 0px 12px;
    }

`

interface NavbarProps extends Themeable {
    children?: React.ReactNode
}

const NavWrapper = styled.div`
    position: relative;
    height: 50px;
`

export const Navbar: React.FC<NavbarProps> = ({
    theme,
    children,
}) => (
    <NavWrapper>
        <MainNavbar theme={theme}>
            {children}
        </MainNavbar>
    </NavWrapper>

)

Navbar.defaultProps = {
    theme: defaultTheme,
}

// Navlink

interface NavlinkProps extends Themeable{
    text?: string
    target?: string
    focus?: boolean
}

export const Navlink: React.FC<NavlinkProps> = ({
    text,
    target,
    focus,
}) => (
    <a className={focus ? "focus" : ""} href={target}>{text}</a>
)

Navlink.defaultProps = {
    theme: defaultTheme,
}

interface NavgroupProps extends Themeable {
    children?: React.ReactNode
    focus?: boolean
}

export const Navgroup: React.FC<NavgroupProps> = ({
    theme,
    children,
    focus,
}) => (
    <MainNavgroup focus={focus} theme={theme}>

        {children}
    </MainNavgroup>
)

Navgroup.defaultProps = {
    theme: defaultTheme,
}

interface MenugroupProps extends Themeable {
    children? : React.ReactNode
}

export const Menugroup: React.FC<MenugroupProps> = ({
    children,
}) => (
    <ul>
        {React.Children.map(children, child => <li>{child}</li>)}
    </ul>

)

Menugroup.defaultProps = {
    theme: defaultTheme,
}

interface MenuarrowProps extends Themeable {
    up? : boolean
    down? : boolean
    left? : boolean
    right? : boolean
}

export const Menuarrow: React.FC<MenuarrowProps> = ({
    up,
    down,
    left,
    right,
}) => {
    let arrowName = ""

    if (up === true) {
        arrowName = "menuArrow up"
    } else if (down === true) {
        arrowName = "menuArrow down"
    } else if (left === true) {
        arrowName = "menuArrow left"
    } else if (right === true) {
        arrowName = "menuArrow right"
    }

    return (
        <div className={arrowName} />
    )
}

Menuarrow.defaultProps = {
    theme: defaultTheme,
}
