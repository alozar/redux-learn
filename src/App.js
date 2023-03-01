import { Container } from '@chakra-ui/react';
import CashAndCustomers from './components/CashAndCustomers';
import CounterAndUsers from './components/CounterAndUsers';

function App() {

  return (
    <Container>
      <CounterAndUsers />
      {/* <CashAndCustomers /> */}
    </Container>
  );
}

export default App;