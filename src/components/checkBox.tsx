import React, { useEffect } from 'react';
import styled from 'styled-components';
import color from '../constants/color';
import Image from './image';

type Props = {
  width?: number;
  height?: number;
  isChecked: boolean;
  onClick: () => void;
  style?: any;
};

const CheckBox: React.FC<Props> = ({
  width = 1.5,
  height = 1.5,
  isChecked,
  onClick,
  style,
}) => {
  return (
    <>
      {isChecked ? (
        <Image
          width={width}
          height={height}
          src='/yellow_check.png'
          hover={true}
          onClick={onClick}
          style={style}
        />
      ) : (
        <Image
          width={width}
          height={height}
          src='/uncheck.png'
          hover={true}
          onClick={onClick}
          style={style}
        />
      )}
    </>
  );
};

export default CheckBox;
