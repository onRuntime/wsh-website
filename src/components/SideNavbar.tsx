import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { WshLogo } from "./layout/Icons";
import Link from "./Link";
import * as ROUTES from "@constants/routes";

const SideNavbar: React.FC = () => {

    const { pathname } = useRouter();

    return (
        <Container>
            <Link href={ROUTES.INDEX}>
                <Logo />
            </Link>
            <Nav>
                <NavItem>
                    <NavLink href={ROUTES.INDEX}><Icon className={pathname === ROUTES.INDEX ? 'ri-home-4-fill active' : 'ri-home-4-line'} /></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href={ROUTES.MESSAGES}><Icon className={pathname.includes(ROUTES.MESSAGES) ? 'ri-chat-1-fill active' : 'ri-chat-1-line'} /></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href={ROUTES.SETTINGS}><Icon className={pathname.includes(ROUTES.SETTINGS) ? 'ri-settings-fill active' : 'ri-settings-line'} /></NavLink>
                </NavItem>
            </Nav>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80px;
    height: calc(100% - 60px);
    padding: 30px 0;
    overflow: auto;
    
    @media (max-width: 768px) {
        height: 40px;
        width: 100%;
        flex-direction: row;
    }
`;

const Logo = styled(WshLogo)`
    justify-self: flex-start;

    @media (max-width: 768px) {
        display: none;
    }
`;

const Nav = styled.ul`
    display: flex;
    flex-direction: column;
    margin: auto 0;
    align-items: center;
    width: 100%;
    
    @media (max-width: 768px) {
        flex-direction: row;
        margin: 0 auto;
    }
`;


const NavLink = styled(Link)``;

const NavItem = styled.li`
    padding: 15px 0;
    font-size: 20px;

    @media (max-width: 768px) {
        margin: 0 15px;

        &:first-child {
            margin-left: 0;
        }

        &:last-child {
            margin-right: 0;
        }
    }
`;

const Icon = styled.i`
    &.active {
        color: #fff
    }
`;

export default SideNavbar;