import { useDispatch, useSelector } from 'react-redux';
import { VStack, StackDivider, Flex, Box, Heading, Spacer, ButtonGroup, Button, Text } from '@chakra-ui/react';
import { addCashAction, getCashAction } from '../store/cashReducer';
import { addCustomerAction, removeCustomerAction } from '../store/customersReducer';
import { fetchAddCustomers } from '../store/asyncActions/customers';

const CashAndCustomers = () => {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const addCash = () => {
    const cash = Number(prompt());
    dispatch(addCashAction(cash));
  };
  const getCash = () => {
    const cash = Number(prompt());
    dispatch(getCashAction(cash));
  };
  const addCustomer = () => {
    const customer = {
      name: prompt(),
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };
  const addManyCustomers = () => {
    dispatch(fetchAddCustomers());
  };
  const removeCustomer = (id) => {
    dispatch(removeCustomerAction(id));
  };

  return (
    <VStack
      align='stretch'
      divider={<StackDivider borderColor='gray.200' />}
      spacing={4}>
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
      <ButtonGroup mx="auto">
        <Button colorScheme='teal' onClick={addCustomer}>Добавить клиента</Button>
        <Button colorScheme='teal' onClick={addManyCustomers}>Получить клиентов из бд</Button>
      </ButtonGroup>
      {customers.length > 0 ?
        customers.map(customer => (
          <Box key={customer.id} borderWidth='1px' borderRadius='lg' mx="auto" bg='blue.400' w='80%' p={4} color='white' fontSize='2rem' onClick={() => removeCustomer(customer.id)}>
            {customer.name}
          </Box>
        ))
        :
        <Text fontSize='2rem' mx="auto">Клиенты отсутствуют!</Text>
      }
    </VStack>
  )
}

export default CashAndCustomers;