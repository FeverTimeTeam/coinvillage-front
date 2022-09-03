import React, { useEffect } from 'react';
import styled from 'styled-components';
import color from '../constants/color';
import Image from './image';

type Props = {
  width?: number;
  height?: number;
  isChecked: boolean;
  onClick: () => void;
};

type RootProps = {
  width?: number;
  height?: number;
  isChecked: boolean;
};

const Root = styled.div<RootProps>`
  display: flex;
  ${(props) => `width: ${props.width}px;`}
  ${(props) => `height: ${props.height}px;`}
  border-radius: 8px;
  border: solid;
  ${(props) =>
    props.isChecked
      ? `border-color: ${color.kb}; background-color: ${color.kb};`
      : `border-color: ${color.warm_gray1}; background-color: ${color.white};`}
  /* ${(props) =>
    `background-color: ${props.isChecked ? color.kb : color.deep_green};`} */
  cursor: pointer;
`;

const CheckBox: React.FC<Props> = ({
  width = 40,
  height = 40,
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
          isChecked={isChecked}
          onClick={onClick}
        />
      )}
    </>
  );
};

export default CheckBox;
