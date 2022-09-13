import styled from 'styled-components';
import color from '../constants/color';

type Props = {
  value: string | number | undefined;
  onChange: (e: any) => void;
  style?: any;
};

type RootProps = {};

const StyledInput = styled.input<RootProps>`
  width: 10%;
  height: 3.6rem;
  outline: none;
  font-size: 1rem;
  text-align: right;
  margin-left: 75%;
  font-weight: bold;
  border: none;
  padding-top: 0.3rem;
`;

const numberInput: React.FC<Props> = ({ value, onChange, style }) => {
  return (
    <>
      <StyledInput value={value} onChange={onChange} style={style} />
    </>
  );
};

export default numberInput;
export { StyledInput };
