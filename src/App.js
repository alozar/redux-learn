import { useDispatch, useSelector } from 'react-redux';
import { Button, Flex, Heading, ButtonGroup, Box, Spacer } from '@chakra-ui/react';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const addCash = () => {
    const cash = Number(prompt());
    dispatch({type: "ADD_CASH", payload: cash});
  };
  const getCash = () => {
    const cash = Number(prompt());
    dispatch({type: "GET_CASH", payload: cash});
  };

  return (
    <Flex minWidth='max-content' alignItems='center' gap='2'>
      <Box p='2'>
        <Heading size='md'>Счет: {cash}</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap='2'>
        <Button colorScheme='teal' onClick={addCash}>Пополнить счет</Button>
        <Button colorScheme='teal' onClick={getCash}>Снять счет</Button>
      </ButtonGroup>
    </Flex>
  );
}

export default App;
