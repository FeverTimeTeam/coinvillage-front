import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import color from '../constants/color';
import Button from './button';
import Typo from './typo';
import { axiosInstance } from '../queries/index';
import { useRecoilState } from 'recoil';
import { todayMessage } from '../recoil';

type Props = {
  closeModal: () => void;
};

const Root = styled.div`
  position: fixed;
  top: -9.5rem;
  left: 16rem;
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
  width: 10rem;
  padding: 1.5rem;
  text-align: left;
  font-family: 'NeoDunggeunmo';
  ${`background-color: ${color.white};`}
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;

const MessageInput = styled.input`
  width: 90%;
  outline: none;
  font-size: 1rem;
  border: none;
  font-family: 'NeoDunggeunmo';
`;

const Modal: React.FC<Props> = ({ closeModal }) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isMessage, setIsMessage] = useRecoilState(todayMessage);

  const modifyInfos = (message: string) => {
    axiosInstance
      .put('/infos', {
        message: message,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Root onClick={closeModal}>
      <ModalBody onClick={(e) => e.stopPropagation()}>
        <Typo
          onClick={() => {
            setIsClick(true);
          }}
          fontSize={1}
        >
          오늘의 Talk
        </Typo>
        {isClick ? (
          <div style={{ display: 'flex' }}>
            <MessageInput
              placeholder={'오늘의 메세지를 적어주세요.'}
              value={isMessage.message}
              onChange={(e) => {
                setIsMessage({ ...isMessage, message: e.target.value });
              }}
            />
            <Button
              backgroundColor={color.white}
              color={color.blue}
              style={{ width: '5rem', marginTop: '0.5rem' }}
              onClick={() => {
                modifyInfos(isMessage.message);
                setIsClick(false);
              }}
            >
              수정
            </Button>
          </div>
        ) : (
          <Typo
            onClick={() => {
              setIsClick(true);
            }}
            fontSize={1}
            color={color.warm_gray1}
          >
            {isMessage.message}
          </Typo>
        )}
      </ModalBody>
    </Root>
  );
};

export default Modal;
