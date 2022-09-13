import React, { useState } from 'react';
import styled from 'styled-components';
import color from '../constants/color';
import Button from './button';
import Typo from './typo';
import { axiosInstance } from '../queries/index';
import TextInput from './textInput';

type Props = {
  closeModal: () => void;
  warningMessage?: string;
};

const Root = styled.div`
  position: fixed;
  top: -10rem;
  left: 18rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBody = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  padding: 1.5rem;
  text-align: left;
  font-family: 'NeoDunggeunmo';
  ${`background-color: ${color.light_gray3};`}
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;

const Modal: React.FC<Props> = ({ closeModal, warningMessage }) => {
  return (
    <Root onClick={closeModal}>
      <ModalBody onClick={(e) => e.stopPropagation()}>
        <Typo fontSize={1}>오늘의 Talk</Typo>
        <Typo fontSize={1} color={color.warm_gray1}>
          {warningMessage}
        </Typo>
      </ModalBody>
    </Root>
  );
};

export default Modal;
