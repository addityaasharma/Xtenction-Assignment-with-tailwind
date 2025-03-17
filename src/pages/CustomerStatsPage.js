import { useContext } from "react";
import { CustomerContext } from "../context/CustomerContext";


const CustomerStatsPage = () => {
  const { customers } = useContext(CustomerContext);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Customer Stats</h1>
      <p>Total Customers: {customers.length}</p>
    </div>
  );
};

export default CustomerStatsPage;
