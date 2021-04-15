import React from "react";
import styled from "styled-components";
import { Router } from "next/router";

import * as ROUTES from "@constants/routes";

interface MessageItemProps {
    router: Router
    id: number
}

const MessageItem: React.FC<MessageItemProps> = ({ router, id }) => {

    const handleClick = (event) => {
        event.preventDefault();
        router.push(`${ROUTES.MESSAGES}/${id}`)
    }

    return (
        <Container onClick={handleClick}>
            <PictureContainer>
                <SenderPicture src={`https://picsum.photos/200/200`} />
            </PictureContainer>
            <Content>
                <Sender>Alice</Sender>
                <Description>Sent • 3h • 26 🔥</Description>
            </Content>
        </Container>
    );
}


const Container = styled.li`
    display: flex;
    padding: 10px;
    cursor: pointer;
    transition: all .2s;
    user-select: none;

    &:hover {
        background-color: rgba(0, 0, 0, .5);
    }
`;

const PictureContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
`;

const SenderPicture = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    object-fit: center;
`;

const Content = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10px;
    line-height: 1.2;
`;

const Sender = styled.p`
    font-size: 16px;
`;

const Description = styled.p`
    display: flex;
    font-size: 13px;
    color: ${props => props.theme.colors.text.primaryLight};
`;

export default MessageItem;