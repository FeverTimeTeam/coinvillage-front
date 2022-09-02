import React from 'react';
import styled from 'styled-components';
import color from '../constants/color';

type Props = {
  width?: number;
  height?: number;
  children: any;
  onClick: () => void;
};

type RootProps = {
  width?: number;
  height?: number;
};

const Root = styled.div<RootProps>`
  display: flex;
  ${(props) => `width: ${props.width}px;`}
  ${(props) => `height: ${props.height}px;`}
  border-radius: 1rem;
  background-color: ${color.kb};
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;

const Button: React.FC<Props> = ({
  width = 120,
  height = 60,
  onClick,
  children,
}) => {
  return (
    <>
      <Root width={width} height={height} onClick={onClick}>
        {children}
      </Root>
    </>
  );
};

export default Button;
