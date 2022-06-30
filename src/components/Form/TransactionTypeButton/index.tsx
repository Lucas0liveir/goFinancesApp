import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
    Container,
    Icon,
    Title
} from "./styles";

const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle'
}

interface Props extends TouchableOpacityProps {
    isActive: boolean;
    title: string;
    type: 'up' | 'down'
}
export function TransactionTypeButton({ title, type, isActive, ...rest }: Props) {

    return (
        <Container
            {...rest}
            type={type}
            isActive={isActive}
        >
            <Icon
                type={type}
                name={icons[type]}
            />
            <Title>
                {title}
            </Title>
        </Container>
    )
}