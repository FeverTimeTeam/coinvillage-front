import React from 'react';
import styled from 'styled-components';
import color from '../constants/color';
import Button from './button';
import Typo from './typo';

type Props = {
  closeModal: () => void;
  warningMessage?: string;
  leftButtonText?: string;
  rightButtonText?: string;
};

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBody = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 15rem;
  height: 5rem;
  padding: 2.5rem;
  text-align: center;
  ${`background-color: ${color.light_gray3};`}
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;

const Modal: React.FC<Props> = ({
  closeModal,
  warningMessage = '삭제되었습니다.',
}) => {
  return (
    <Root onClick={closeModal}>
      <ModalBody onClick={(e) => e.stopPropagation()}>
        <Typo fontSize={1.2}>{warningMessage}</Typo>
        <Button
          color={color.system_ok}
          backgroundColor={color.light_gray3}
          borderColor={color.white}
          onClick={() => {
            closeModal();
          }}
        >
          확인
        </Button>
      </ModalBody>
    </Root>
  );
};

export default Modal;
