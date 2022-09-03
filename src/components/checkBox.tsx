import React, { useEffect } from 'react';
import styled from 'styled-components';
import color from '../constants/color';
import Image from './image';

type Props = {
  width?: number;
  height?: number;
  borderRadius?: number;
  isChecked: boolean;
  onClick: () => void;
};

type RootProps = {
  width?: number;
  height?: number;
  borderRadius?: number;
  isChecked: boolean;
};

const Root = styled.div<RootProps>`
  display: flex;
  ${(props) => `width: ${props.width}rem;`}
  ${(props) => `height: ${props.height}rem;`}
  ${(props) => `border-radius: ${props.borderRadius}rem;`}
  border: solid;
  cursor: pointer;
`;

const CheckBox: React.FC<Props> = ({
  width = 2.5,
  height = 2.5,
  borderRadius = 0.313,
  isChecked,
  onClick,
}) => {
  return (
    <>
      {isChecked ? (
        <Image src='/yellow_check.png' hover={true} onClick={onClick} />
      ) : (
        <Root
          width={width}
          height={height}
          borderRadius={borderRadius}
          isChecked={isChecked}
          onClick={onClick}
        />
      )}
    </>
  );
};

export default CheckBox;
