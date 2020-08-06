import * as React from "react"
import styled from "@emotion/styled"
import { defaultTheme, Themeable} from "../theme/index"

const MainSidebar = styled.nav<Themeable>`
    background: ${props => props.theme.blue};
    font-size: 14px;
    z-index: 100;
    position: relative;
    height: 100%;
    width: 300px;
    display: flex;
    flex-direction: column;
    color: white;

    .Header {
        text-align: center;
    }

    .Middle {
        order:1;
        flex-grow: 1    
    }

    .Footer {
        order:2;
    }
`


// Sidebar

interface SidebarProps extends Themeable {
    children?: React.ReactNode
}

export const Sidebar: React.FC<SidebarProps> = ({
        theme,
        children,
        className,
    }) => (
    <MainSidebar theme={theme} className={className}>
        {children}
    </MainSidebar>
)

Sidebar.defaultProps = {
    theme: defaultTheme,
};


// Sidebargroup

const MainSidebarGroup = styled.div<SidebarGroupProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: white;
    padding: 10px 0px 10px 0px;
`

const SidebarGroupHeader = styled.div`
    border: 1px solid #1E1B47;
    padding: 15px 0px 15px 0px;
    cursor: pointer;

    .arrow {
        border: solid #C9C9C9;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 3px;
        margin: 4px 20px 0px;
        float: right;
    }



    .down{
        transform: rotate(45deg);
    }

    .up {
        margin-top: 10px;
        transform: rotate(-135deg);
    }

    .left {
        transform: rotate(135deg);
    }

    .right {
        transform: rotate(-45deg);
    }
`

const SidebarGroupLink = styled.a`
    margin: 0px 0px 0px 24px;
    color: white;
`

interface SidebarGroupProps extends Themeable {
    children? : React.ReactNode,
    title? : string,
}

export const SidebarGroup: React.FC<SidebarGroupProps> = ({
    children,
    title,
    theme
}) => {
    const [displaySection, setDisplaySection] = React.useState(false)

    var toggleDisplay = () => {
        setDisplaySection(!displaySection)
    }

    return (
        <div>
            <SidebarGroupHeader onClick={toggleDisplay}>
                <SidebarGroupLink >{title}</SidebarGroupLink> <div className={displaySection ? "arrow up" : "arrow down"} /> 
            </SidebarGroupHeader>
            {displaySection == true &&
            <MainSidebarGroup>
                {children}
            </MainSidebarGroup>}
            
        </div>
    )
}


SidebarGroup.defaultProps = {
    theme: defaultTheme,
};

// SidebarGroupItem

const SidebarMenuGroupLink = styled.div<Themeable>`
    background: ${props => props.theme.light30};
    font-weight: normal;
    padding: 10px 0px 10px 0px;
    

    .focus {
        font-weight: bold;
    }
`
const Primary = styled.div`
    margin: 0px 0px 0px 28px;
    float:left;

    a, span {
        text-decoration: none;
        color: black;
    }

`

const Secondary = styled.div`
    float:right;
    margin-right: 28px;

    

    a, span {
        text-decoration: none;
        color: black;
    }
`
interface SidebarGroupItemProps extends Themeable {
    title? : string,
    target?: string,
    secondaryTitle?: string,
    secondaryTarget?: string,
    focus?: boolean,
    divider?: boolean
}

export const SidebarGroupItem: React.FC<SidebarGroupItemProps> = ({
    title,
    target,
    secondaryTitle,
    secondaryTarget,
    focus,
    divider
}) => {
    return (
        <div>
            <SidebarMenuGroupLink>
                <Primary>{target ? <a href={target} className={focus ? "focus" : ""}>{title}</a> : <span className={focus ? "focus" : ""}>{title}</span>}</Primary>
                <Secondary>{secondaryTitle ? secondaryTarget? <a href={secondaryTarget} className={focus ? "focus" : ""}>{secondaryTitle}</a> : <span className={focus ? "focus" : ""}>{secondaryTitle}</span> : ""}</Secondary>
            </SidebarMenuGroupLink>
            {divider && <Divider />}
        </div>
        
    )
}

SidebarGroupItem.defaultProps = {
    theme: defaultTheme
};

// SideBarItem
const SidebarMenuLink = styled.div<Themeable>`
    background: ${props => props.theme.light30};
    font-weight: normal;
    padding: 10px 0px 10px 0px;
    
    margin: 0px 0px 0px 24px;

    .focus {
        font-weight: bold;
    }

    a {
        color: white;
        text-decoration: none;
    }
`

interface SidebarItemProps extends Themeable {
    title? : string,
    target?: string,
    focus?: boolean
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
    title,
    target,
    focus
}) => {
    return (
        <div>
            <SidebarMenuLink>
                {target ? <a href={target} className={focus ? "focus" : ""}>{title}</a> : <span className={focus ? "focus" : ""}>{title}</span>}
            </SidebarMenuLink>
        </div>
    )
}




// Divider

const Divider = styled.hr`
    border: 1px solid #E8E8E8;  
    margin: 0px 0px 0px 0px;
    clear: both;
`

// Footer Linkbox

const Linkbox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border-top: 1px solid #000000;

    a {
        color: white;
        text-decoration: none;
        margin: 20px 20px 20px 20px;
    }
`

interface FooterLinkBoxProps extends Themeable {
    children? : React.ReactNode,
}

export const FooterLinkBox: React.FC<FooterLinkBoxProps> = ({
    children
}) => {

    return (
        <Linkbox>
            {children}
        </Linkbox>
    )
}

FooterLinkBox.defaultProps = {
    theme: defaultTheme
};

// Footer Accountbox

const Accountbox = styled.div`
    border-top: 1px solid #000000;
    padding: 20px 20px 20px 20px;
    line-height: 22px;

    .username {
        color: white;
    }

    .subtitle {
        color: #B4B4B4;
    }
`

interface FooterAccountBoxProps extends Themeable {
    name? : string
    subtitle? : string
}

export const FooterAccountBox: React.FC<FooterAccountBoxProps> = ({
    name,
    subtitle
}) => {

    return (
        <Accountbox>
            <div className="username">{name}</div>
            <div className="subtitle">{subtitle}</div>
        </Accountbox>
    )
}

FooterAccountBox.defaultProps = {
    theme: defaultTheme
};