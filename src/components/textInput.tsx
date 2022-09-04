import styled from 'styled-components';
import color from '../constants/color';

type Props = {
  width?: number;
  height?: number;
  value: string;
  placeholder: string;
  borderRadius: number;
  onChange: (e: any) => void;
};

type RootProps = {
  width?: number;
  height?: number;
  borderRadius?: number;
};

const StyledInput = styled.input<RootProps>`
  ${(props) => `width: ${props.width}rem;`}
  ${(props) => `height: ${props.height}rem;`}
  ${(props) => `border-radius: ${props.borderRadius}rem;`}
  :focus {
    outline: 0;
  }
`;

const TextInput: React.FC<Props> = ({
  width,
  height,
  value,
  placeholder,
  borderRadius,
  onChange,
}) => {
  return (
    <>
      <StyledInput
        width={width}
        height={height}
        borderRadius={borderRadius}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default TextInput;
export { StyledInput };
