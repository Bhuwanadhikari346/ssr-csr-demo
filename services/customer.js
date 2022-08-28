import { db } from "../config/firebase";
import { collection, getDocs, addDoc, getDoc, doc } from "firebase/firestore";

const customerCollectionRef = collection(db, "users");
class CustomerData {
  getAllCustomers = () => {
    return getDocs(customerCollectionRef);
  };
  addcustomers = (newCustomer) => {
    return addDoc(customerCollectionRef, newCustomer);
  };

  getCustomer = (id) => {
    const userDoc = doc(db, "users", id);
    return getDoc(userDoc);
  };
}

export default new CustomerData();
