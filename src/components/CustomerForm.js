import { useState, useContext } from "react";
import { CustomerContext } from "../context/CustomerContext";

const CustomerForm = () => {
  const [name, setName] = useState("");
  const { addCustomer } = useContext(CustomerContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCustomer({ name });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2"
      />
      <button type="submit" className="ml-2 bg-blue-500 text-white px-4">Add</button>
    </form>
  );
};

export default CustomerForm;
