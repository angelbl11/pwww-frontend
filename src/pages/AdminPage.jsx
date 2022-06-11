import React, { useEffect, useState } from 'react';
import LandingLayout from '../components/Layouts/LandingLayout';
import AdminItem from '../components/AdminItem';
import axios from 'axios';
import ApiUrl from '../api';
import { Flex, Spinner } from '@chakra-ui/react';
const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(ApiUrl + 'product');
      const { products } = data;
      setProducts(products);
      setIsLoading(false);
    };

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
          uri={'https://www.azendportafolio.com/static/img/not-found.png'}
        />
      ))}
    </LandingLayout>
  );
};

export default AdminPage;
