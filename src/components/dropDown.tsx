import React, { useState } from 'react';
import styled from 'styled-components';
import color from '../constants/color';
import Image from './image';
import Typo from './typo';

type Props = {
  itemList: string[];
  style?: any;
};

type RootProps = {};

const Root = styled.select<RootProps>`
  height: 1.8rem;
  ${`border: solid ${color.light_warm_gray};`}
  border-radius: 0.5rem;
  cursor: pointer;
`;

const DropDown: React.FC<Props> = ({ itemList, style }) => {
  return (
    <div style={style}>
      <Root>
        <option value=''>직업선택</option>
        {itemList.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </Root>
    </div>
  );
};

export default DropDown;
