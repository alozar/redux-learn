import { addManyCustomersAction } from "../customersReducer";

export const fetchAddCustomers = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(customers => dispatch(addManyCustomersAction(customers)));
    }
};