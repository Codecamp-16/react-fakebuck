import styled from 'styled-components';

// Create Component + Inject CSS
// Syntax : styled.tag`css rule`
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// ส่ง Props
const Button = styled.button`
  background: ${(props) => (props.primary ? '#BF4F74' : 'white')};
  color: ${(props) => (props.primary ? 'white' : '#BF4F74')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  cursor: pointer;
`;

// Extend Style => ถูกดีไซน์มาจาก Design Pattern หนึ่ง (Higher Order Component)
const MyFirstButton = styled.button`
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;
// NewComponent = styled(OldComponent)
// Ironman = styled(Tony Stark)
const MySecondButton = styled(MyFirstButton)`
  color: tomato;
  border-color: tomato;
`;

// Try it yourself
const SplitScreen = styled.div`
  display: flex;
`;

const Child = styled.div`
  flex: ${(p) => p.flex};
  text-align: center;
  border: 2px solid #bf4f74;
  &:hover {
    background: #bf4f74;
    color: white;
  }
`;

const MyInput = styled.input`
  border: 2px solid #bf4f74;
  border-radius: 4px;
  &:focus {
    border: none;
    outline: none;
  }
`;
function App() {
  return (
    <Wrapper>
      <Title>Hello React Ecosystem</Title>
      <Button primary={true}>Primary</Button>
      <Button>Normal</Button>
      <MyFirstButton>My 1st BTN</MyFirstButton>
      <MySecondButton>My 2nd BTN</MySecondButton>
      <SplitScreen>
        <Child flex={2}>left</Child>
        <Child flex={10}>rigth</Child>
      </SplitScreen>
      <MyInput />
    </Wrapper>
  );
}

export default App;
