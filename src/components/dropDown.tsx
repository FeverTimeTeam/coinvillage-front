import React, { useState } from 'react';
import styled from 'styled-components';
import color from '../constants/color';
import Image from './image';
import Typo from './typo';

type Props = {
  itemList: string[];
  selectedItem?: string;
  style?: any;
  height?: number;
  disabled?: boolean;
  onChange?: (e: any) => void;
};

type RootProps = {
  height?: number;
};

const Root = styled.select<RootProps>`
  ${(props) => `height: ${props.height}rem;`}
  ${`border: solid 0.15rem ${color.light_warm_gray};`}
  border-radius: 0.5rem;
  cursor: pointer;
`;

const DropDown: React.FC<Props> = ({
  itemList,
  selectedItem,
  style,
  height,
  disabled,
  onChange = (e: any) => {
    console.log(e.target.value);
  },
}) => {
  return (
    <div style={style}>
      <Root height={height} onChange={onChange} disabled={disabled}>
        {itemList.map((item, index) =>
          selectedItem === item ? (
            <option key={index} value={item} selected={true}>
              {item}
            </option>
          ) : (
            <option key={index} value={item}>
              {item}
            </option>
          )
        )}
      </Root>
    </div>
  );
};
export default DropDown;
