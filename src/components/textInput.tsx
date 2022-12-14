import styled from 'styled-components';
import color from '../constants/color';

type Props = {
  width?: number;
  height?: number;
  value: string | number | undefined;
  placeholder?: string;
  borderRadius: number;
  onChange: (e: any) => void;
  style?: any;
  disabled?: boolean;
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
  border: solid 0.15rem ${color.light_warm_gray};
  background: transparent;
  ::placeholder {
    color: ${color.black};
  }
  font-size: 1rem;
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
  style,
  disabled,
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
        style={style}
        disabled={disabled}
      />
    </>
  );
};

export default TextInput;
export { StyledInput };
