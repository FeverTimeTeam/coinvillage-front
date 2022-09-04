import React, { useState } from 'react';
import styled from 'styled-components';
import color from '../constants/color';
import Image from './image';
import Typo from './typo';

type RootProps = {
  borderColor?: string;
};

const Root = styled.div<RootProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 8rem;
  box-sizing: border-box;
  cursor: pointer;
  background-color: ${color.white};
`;

type TitleContainerProps = {
  borderColor?: string;
};

const TitleContainer = styled.div<TitleContainerProps>`
  display: flex;
  position: relative;
  align-items: center;
  height: 1.2rem;
  border: solid 0.063rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border-color: ${color.light_warm_gray};
`;

const TitleTypoWrapper = styled.div`
  position: absolute;
  left: 0.75rem;
`;

const ImageWrapper = styled.div`
  position: absolute;
  right: 0.5rem;
`;

const ItemListContainer = styled.div`
  position: absolute;
  z-index: 3;
  left: 0rem;
  top: 2.4rem;
  width: 8rem;
  border-radius: 0.5rem;
  background-color: ${color.white};
  box-shadow: 0.125rem 0.125rem 0.25rem 0.063rem rgba(0, 0, 0, 0.2);
`;

type ItemContainerProps = {
  hover?: boolean;
};

const ItemContainer = styled.div<ItemContainerProps>`
  ${(props) => props.hover && `background-color: ${color.light_gray}`}
`;

const ItemTypoWrapper = styled.div<RootProps>`
  padding: 0.625rem;
  padding-left: 1rem;
`;

type Props = {
  itemList: string[];
  select: number;
  handleSelect: (id: number) => () => void;
  placeholder: string;
  onClickTitle?: () => void;
  isToggled: boolean;
};

const DropDown: React.FC<Props> = ({
  onClickTitle,
  itemList,
  select,
  handleSelect,
  placeholder,
  isToggled,
}) => {
  const [hover, setHover] = useState<boolean[]>(
    [...Array(itemList?.length)].fill(false)
  );

  const onMouseEnter = (id: number) => () => {
    setHover((prev) =>
      prev.map((value, index) => (index === id ? true : false))
    );
  };

  const onMouseLeave = () => {
    setHover((prev) => [...Array(prev.length)].fill(false));
  };

  return (
    <Root>
      <TitleContainer onClick={onClickTitle}>
        <TitleTypoWrapper>
          <Typo fontSize={1} color={color.deep}>
            {select === -1 ? placeholder : itemList[select]}
          </Typo>
        </TitleTypoWrapper>
        <ImageWrapper>
          <Image
            width={0.9}
            height={0.5}
            src='/gray_down.png'
            rotate={isToggled ? 0.5 : 0}
          />
        </ImageWrapper>
      </TitleContainer>
      <ItemListContainer>
        {isToggled &&
          itemList?.map((item, index) => (
            <ItemContainer
              key={item}
              onMouseEnter={onMouseEnter(index)}
              onMouseLeave={onMouseLeave}
              onClick={handleSelect(index)}
              hover={hover[index]}
            >
              <ItemTypoWrapper>
                <Typo fontSize={1} color={color.deep}>
                  {item}
                </Typo>
              </ItemTypoWrapper>
            </ItemContainer>
          ))}
      </ItemListContainer>
    </Root>
  );
};

export default DropDown;
