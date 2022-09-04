import styled from 'styled-components';
import TextInput, { StyledInput } from './textInput';
import color from '../constants/color';
import Image from './image';

type Props = {
  width?: number;
  height?: number;
  value: string;
  placeholder: string;
  onChange: (e: any) => void;
  onSubmit: (e: any) => void;
};

const Root = styled.div`
  display: flex;
  align-items: center;
  border-radius: 3rem;
  background-color: ${color.light_gray2};
`;

const Input = styled(StyledInput)`
  color: ${color.warm_gray1};
  border: none;
  background: transparent;
  ::placeholder {
    color: ${color.gray};
  }
  padding-left: 1rem;
`;

const SearchBox: React.FC<Props> = ({
  width,
  height,
  value,
  placeholder,
  onChange,
  onSubmit,
}) => {
  return (
    <Root>
      <form onSubmit={onSubmit}>
        <Input
          width={width}
          height={height}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        <Image
          src='/search.png'
          width={1}
          height={1}
          style={{ marginRight: '1rem' }}
        />
      </form>
    </Root>
  );
};

export default SearchBox;
