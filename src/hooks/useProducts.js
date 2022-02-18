import { useEffect } from "react";
import { useState } from "react";
import fakeData from '../fakeData/index';

const useProducts = () => {
   const [products, setProducts] = useState([]);
   useEffect(() => {
       setProducts(fakeData);
   }, []);
   return [products];
};

export default useProducts;