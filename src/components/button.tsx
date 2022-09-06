import React from 'react';
import styled, { withTheme } from 'styled-components';
import color from '../constants/color';

type Props = {
  width?: number;
  height?: number;
  borderRadius?: number;
  backgroundColor: string;
  color: string;
  borderColor?: string;
  children: any;
  onClick?: () => void;
  style?: any;
  fontWeight?: string;
};

type RootProps = {
  width?: number;
  height?: number;
  borderRadius?: number;
  backgroundColor: string;
  color: string;
  borderColor?: string;
  fontWeight?: string;
};

const Root = styled.div<RootProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${(props) => `width: ${props.width}rem;`}
  ${(props) => `height: ${props.height}rem;`}
  ${(props) => `border-radius: ${props.borderRadius}rem;`}
  ${(props) => `background-color: ${props.backgroundColor};`}
  ${(props) => `color: ${props.color};`}
  ${(props) => `border-color: ${props.borderColor};`} 
  ${(props) => `font-weight: ${props.fontWeight};`}
  cursor: pointer;
`;

const Button: React.FC<Props> = ({
  width = 5,
  height = 2,
  borderRadius = 0.5,
  backgroundColor,
  color,
  borderColor,
  onClick,
  children,
  style,
  fontWeight,
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
        style={style}
        fontWeight={fontWeight}
      >
        {children}
      </Root>
    </>
  );
};

export default Button;
export { Root as StyledButton };
