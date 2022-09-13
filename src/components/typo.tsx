import { ReactNode } from 'react';
import styled from 'styled-components';
import color from '../constants/color';

type Props = {
  color?: string;
  fontSize?: number;
  children: any;
  style?: any;
  onClick?: () => void;
};

type RootProps = {
  color?: string;
  fontSize: number;
};

const Root = styled.div<RootProps>`
  ${(props) => `color: ${props.color};`}
  ${(props) => `font-size: ${props.fontSize}rem;`}
`;

const Typo: React.FC<Props> = ({
  color = '#3A3A3A',
  fontSize = 1,
  children,
  style,
  onClick,
}) => {
  return (
    <Root color={color} fontSize={fontSize} style={style} onClick={onClick}>
      {children}
    </Root>
  );
};

export default Typo;
