import React from 'react';
import styled from 'styled-components';
import color from '../constants/color';

type Props = {
  src: string;
  width?: number;
  height?: number;
  hover?: boolean;
  onClick?: () => void;
};

type RootProps = {
  width?: number;
  height?: number;
  hover?: boolean;
};

const Root = styled.img<RootProps>`
  ${(props) => `width: ${props.width}rem;`}
  ${(props) => `height: ${props.height}rem;`}
  ${(props) => props.hover && `cursor: pointer;`}
`;

const Image: React.FC<Props> = ({
  src,
  width = 2.5,
  height = 2.5,
  hover = true,
  onClick = () => {},
}) => {
  return (
    <>
      <Root
        src={src}
        alt=''
        width={width}
        height={height}
        hover={hover}
        onClick={onClick}
      />
    </>
  );
};

export default Image;
