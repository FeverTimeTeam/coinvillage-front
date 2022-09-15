import React, { useState } from 'react';
import styled from 'styled-components';
import color from '../constants/color';
import Button from './button';
import Typo from './typo';
import { axiosInstance } from '../queries/index';
import TextInput from './textInput';
import { useRecoilState } from 'recoil';
import { putState } from '../recoil';

type Props = {
  closeModal: () => void;
  warningMessage?: string;
  leftButtonText?: string;
  rightButtonText?: string;
  jobInput?: boolean;
  informationInput?: boolean;
  width: number;
  height: number;
};

type RootProps = {
  width?: number;
  height?: number;
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

const ModalBody = styled.div<RootProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ${(props) => `width: ${props.width}rem;`}
  ${(props) => `height: ${props.height}rem;`}
  padding: 2.5rem;
  text-align: center;
  ${`background-color: ${color.light_gray3};`}
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;

const Modal: React.FC<Props> = ({
  closeModal,
  warningMessage,
  jobInput,
  informationInput,
  width,
  height,
}) => {
  const [isJobName, setIsJobName] = useState<string>('');
  const [isJobContent, setIsJobContent] = useState<string>('');
  const [isJobPay, setIsJobPay] = useState<number>(0);
  const [isPutState, setIsPutState] = useRecoilState(putState);
  const postJob = (jobName: string, jobContent: string, payCheck: number) => {
    axiosInstance
      .post('/jobs', {
        jobName: jobName,
        jobContent: jobContent,
        payCheck: payCheck,
      })
      .then((response) => {
        console.log(response.data);
        setIsPutState(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Root onClick={closeModal}>
      <ModalBody
        width={width}
        height={height}
        onClick={(e) => e.stopPropagation()}
      >
        {jobInput ? (
          <>
            <div style={{ display: 'flex' }}>
              <Typo
                fontSize={1.2}
                style={{
                  marginTop: '0.5rem',
                  textAlign: 'right',
                  width: '5rem',
                }}
              >
                직업명 :
              </Typo>
              <TextInput
                value={isJobName}
                borderRadius={0.5}
                onChange={(e) => {
                  setIsJobName(e.target.value);
                }}
                height={2.5}
                style={{
                  marginLeft: '1rem',
                  width: '15rem',
                  textAlign: 'center',
                }}
              />
            </div>
            <div style={{ marginTop: '0.5rem', display: 'flex' }}>
              <Typo
                fontSize={1.2}
                style={{
                  marginTop: '0.5rem',
                  textAlign: 'right',
                  width: '5rem',
                }}
              >
                하는 일 :
              </Typo>
              <TextInput
                value={isJobContent}
                borderRadius={0.5}
                onChange={(e) => {
                  setIsJobContent(e.target.value);
                }}
                height={2.5}
                style={{
                  marginLeft: '1rem',
                  width: '15rem',
                  textAlign: 'center',
                }}
              />
            </div>
            <div style={{ marginTop: '0.5rem', display: 'flex' }}>
              <Typo
                fontSize={1.2}
                style={{
                  marginTop: '0.5rem',
                  textAlign: 'right',
                  width: '5rem',
                }}
              >
                월급 :
              </Typo>
              <TextInput
                value={isJobPay}
                borderRadius={0.5}
                onChange={(e) => {
                  setIsJobPay(e.target.value);
                }}
                height={2.5}
                style={{
                  marginLeft: '1rem',
                  width: '15rem',
                  textAlign: 'center',
                }}
              />
            </div>
            <div style={{ display: 'flex' }}>
              <Button
                color={color.system_ok}
                backgroundColor={color.light_gray3}
                style={{ marginLeft: '12rem' }}
                onClick={() => {
                  closeModal();
                  postJob(isJobName, isJobContent, isJobPay);
                }}
              >
                추가하기
              </Button>
              <Button
                color={color.system_ok}
                backgroundColor={color.light_gray3}
                style={{ marginLeft: '1rem' }}
                onClick={() => {
                  closeModal();
                }}
              >
                취소하기
              </Button>
            </div>
          </>
        ) : (
          <>
            {informationInput ? (
              <>
                <div style={{ marginTop: '4rem', display: 'flex' }}>
                  <Typo
                    fontSize={1.2}
                    style={{
                      marginTop: '0.5rem',
                      textAlign: 'center',
                      width: '10rem',
                    }}
                  >
                    오늘의 정보 :
                  </Typo>
                  <TextInput
                    value={isJobContent}
                    borderRadius={0.5}
                    onChange={(e) => {
                      setIsJobContent(e.target.value);
                    }}
                    height={2.5}
                    style={{
                      marginLeft: '1rem',
                      width: '15rem',
                      textAlign: 'center',
                    }}
                  />
                </div>
                <div style={{ display: 'flex' }}>
                  <Button
                    color={color.system_ok}
                    backgroundColor={color.light_gray3}
                    style={{ marginBottom: '3rem' }}
                    onClick={() => {
                      closeModal();
                      postJob(isJobName, isJobContent, isJobPay);
                    }}
                  >
                    추가하기
                  </Button>
                  <Button
                    color={color.system_ok}
                    backgroundColor={color.light_gray3}
                    style={{ marginLeft: '1rem' }}
                    onClick={() => {
                      closeModal();
                    }}
                  >
                    취소하기
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Typo fontSize={1.2}>{warningMessage}</Typo>
                <Button
                  color={color.system_ok}
                  backgroundColor={color.light_gray3}
                  onClick={() => {
                    closeModal();
                  }}
                >
                  확인
                </Button>
              </>
            )}
          </>
        )}
      </ModalBody>
    </Root>
  );
};

export default Modal;
