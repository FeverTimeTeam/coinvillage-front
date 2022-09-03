import React from 'react';
import styled, { withTheme } from 'styled-components';
import color from '../constants/color';

type Props = {
  width?: number;
  height?: number;
  borderRadius?: number;
  backgroundColor: string;
  color: string;
  borderColor: string;
  children: any;
  onClick: () => void;
};

type RootProps = {
  width?: number;
  height?: number;
  borderRadius?: number;
  backgroundColor: string;
  color: string;
  borderColor: string;
};

const Root = styled.div<RootProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${(props) => `width: ${props.width}px;`}
  ${(props) => `height: ${props.height}px;`}
  ${(props) => `border-radius: ${props.borderRadius}px;`}
  ${(props) => `background-color: ${props.backgroundColor};`}
  ${(props) => `color: ${props.color};`}
  border: solid;
  ${(props) => `border-color: ${props.borderColor};`}
  cursor: pointer;
`;

const Button: React.FC<Props> = ({
  width = 120,
  height = 50,
  borderRadius = 8,
  backgroundColor,
  color,
  borderColor,
  onClick,
  children,
}) => {
  return (
    <>
      <Root
        width={width}
        height={height}
        borderRadius={borderRadius}
        backgroundColor={backgroundColor}
        color={color}
        borderColor={borderColor}
        onClick={onClick}
      >
        {children}
      </Root>
    </>
  );
};

export default Button;
