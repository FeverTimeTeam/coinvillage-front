import styled from 'styled-components';
import color from '../constants/color';

type Props = {
  color: string;
  fontSize?: number;
  children: string;
};

type RootProps = {
  color: string;
  fontSize: number;
};

const Root = styled.div<RootProps>`
  ${(props) => `color: ${props.color};`}
  ${(props) => `font-size: ${props.fontSize}rem;`}
`;

const Typo: React.FC<Props> = ({ color, fontSize = 1, children }) => {
  return (
    <Root color={color} fontSize={fontSize}>
      {children}
    </Root>
  );
};

export default Typo;
