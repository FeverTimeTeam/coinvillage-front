import React from 'react';
import styled from 'styled-components';
import color from '../constants/color';

type Props = {
  src: string;
  width?: number;
  height?: number;
  rotate?: number;
  hover?: boolean;
  onClick?: () => void;
  style?: any;
};

type RootProps = {
  width?: number;
  height?: number;
  hover?: boolean;
  rotate?: 0;
};

const Root = styled.img<RootProps>`
  ${(props) => `width: ${props.width}rem;`}
  ${(props) => `height: ${props.height}rem;`}
  ${(props) => props.hover && `cursor: pointer;`}
  ${(props) => `transform: rotate(${props.rotate}turn);`}
  &&& {
    object-fit: contain;
  }
`;

const Image: React.FC<Props> = ({
  src,
  width = 2,
  height = 2,
  hover = true,
  onClick = () => {},
  style,
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
        style={style}
      />
    </>
  );
};

export default Image;
