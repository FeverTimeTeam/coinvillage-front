import styled from 'styled-components';
import color from '../constants/color';

type Props = {
  width?: number;
  height?: number;
  value: string;
  placeholder: string;
  onChange: (e: any) => void;
};

type RootProps = {
  width?: number;
  height?: number;
};

const StyledInput = styled.input<RootProps>`
  :focus {
    outline: 0;
  }
`;

const TextInput: React.FC<Props> = ({
  width,
  height,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <>
      <Root
        width={width}
        height={height}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default TextInput;
export { StyledInput };
