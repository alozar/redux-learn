import { useDispatch, useSelector } from 'react-redux';
import { VStack, StackDivider, Flex, Box, Heading, Spacer, ButtonGroup, Button, Text } from '@chakra-ui/react';
import { incrementCreator, decrementCreator, asyncIncrementCreator, asyncDecrementCreator } from '../store/countReducer';
import { addUsersCreator, removeUsersCreator, fetchUsersCreator } from '../store/usersReducer';

const CounterAndUsers = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.countReducer.count);
  const users = useSelector(state => state.usersReducer.users);

  const increment = () => {
    dispatch(incrementCreator(1));
  }
  const asyncIncrement = () => {
    dispatch(asyncIncrementCreator(2));
  }
  const decrement = () => {
    dispatch(decrementCreator(1));
  }
  const asyncDecrement = () => {
    dispatch(asyncDecrementCreator(2));
  }
  const addUser = () => {
    const user = {
      name: prompt(),
      id: Date.now(),
    };
    dispatch(addUsersCreator([user]));
  }
  const removeUser = (id) => {
    dispatch(removeUsersCreator(id));
  }
  const fetchUsers = () => {
    dispatch(fetchUsersCreator());
  };

  return (
    <VStack
      align='stretch'
      divider={<StackDivider borderColor='gray.200' />}
      spacing={4}
      mb='3'>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Box p='2'>
          <Heading size='md'>Количество: {count}</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap='2'>
          <Button colorScheme='teal' onClick={increment}>Инкремент++</Button>
          <Button colorScheme='teal' onClick={asyncIncrement}>async Инкремент+2</Button>
          <Button colorScheme='teal' onClick={decrement}>Декремент--</Button>
          <Button colorScheme='teal' onClick={asyncDecrement}>async Декремент-2</Button>
        </ButtonGroup>
      </Flex>
      <ButtonGroup mx="auto">
        <Button colorScheme='green' onClick={fetchUsers}>Получить юзеров</Button>
        <Button colorScheme='green' onClick={addUser}>Добавить юзера</Button>
      </ButtonGroup>
      {users.length > 0 ?
        users.map(user => (
          <Box key={user.id} borderWidth='1px' borderRadius='lg' mx="auto" bg='blue.400' w='80%' p={4} color='white' fontSize='2rem' onClick={() => removeUser(user.id)}>
            {user.name}
          </Box>
        ))
        :
        <Text fontSize='2rem' mx="auto">Клиенты отсутствуют!</Text>
      }
    </VStack>
  )
}

export default CounterAndUsers;