import { useContext } from "react";
import { CustomerContext } from "../context/CustomerContext";

const CustomerList = () => {
  const { customers, deleteCustomer } = useContext(CustomerContext);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Customers</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id} className="flex justify-between p-2 bg-gray-100 mb-2">
            {customer.name}
            <button onClick={() => deleteCustomer(customer.id)} className="bg-red-500 text-white px-2">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
