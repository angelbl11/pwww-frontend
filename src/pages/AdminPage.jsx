import React, { useEffect, useState } from 'react';
import LandingLayout from '../components/Layouts/LandingLayout';
import AdminItem from '../components/AdminItem';
import axios from 'axios';
import ApiUrl from '../api';
import { Flex, Spinner } from '@chakra-ui/react';
const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

   const fetchProducts = async () => {
      setIsLoading(true);
      const { data } = await axios.get(ApiUrl + 'product');
      const { products } = data;
      setProducts(products);
      setIsLoading(false);
   };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <Flex w="100%" justifyContent="center" pt={30}>
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <LandingLayout>
      {products.map(product => (
        <AdminItem
          key={product._id}
          product={product.name}
          description={product.description}
          cost={product.price}
          uri={product.img}
          id={product._id}
          updateProducts={fetchProducts}
        />
      ))}
    </LandingLayout>
  );
};

export default AdminPage;
