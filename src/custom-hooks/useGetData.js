import React from "react";
import { db } from "../firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";

const useGetData = (collectionName) => {
  const [data, setData] = useState([]);
  const collectionRef = collection(db, collectionName);

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collectionRef);
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
  }, []);
  return <div></div>;
};

export default useGetData;
