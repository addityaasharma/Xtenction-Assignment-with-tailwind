import CustomerList from "../components/CustomerList";
import CustomerForm from "../components/CustomerForm";



const CustomerManagement = () => {
  return (
    <div className="p-6">
      <h1 className="">Customer Management</h1>
      <CustomerForm />
      <CustomerList />
    </div>
  );
};

export default CustomerManagement;
