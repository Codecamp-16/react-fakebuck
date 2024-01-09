import styled from 'styled-components';
import { Button } from '../ui-styled-component/Button';

const Wrapper = styled.div`
  display: flex;
`;
function ButtonGroup() {
  return (
    <Wrapper>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>4</Button>
    </Wrapper>
  );
}

export default ButtonGroup;
