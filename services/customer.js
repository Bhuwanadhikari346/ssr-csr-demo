import { db } from "../config/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const customerCollectionRef = collection(db, "users");
class CustomerData {
  getAllCustomers = () => {
    return getDocs(customerCollectionRef);
  };
  addcustomers = (newCustomer) => {
    return addDoc(customerCollectionRef, newCustomer);
  };
}

export default new CustomerData();
