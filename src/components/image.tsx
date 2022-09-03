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
  ${(props) => `width: ${props.width}px;`}
  ${(props) => `height: ${props.height}px;`}
  ${(props) => props.hover && `cursor: pointer;`}
`;

const Image: React.FC<Props> = ({
  src,
  width = 40,
  height = 40,
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
