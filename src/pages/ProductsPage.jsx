import React, { useEffect, useState } from 'react';
import LandingLayout from '../components/Layouts/LandingLayout';
import Item from '../components/Item';
import ApiUrl from '../api';
import axios from 'axios';
import { Flex, Spinner } from '@chakra-ui/react';

const ProductsPage = () => {
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
        <Item
          key={product._id}
          description={product.description}
          product={product.name}
          price={product.price}
          uri={'https://www.azendportafolio.com/static/img/not-found.png'}
        />
      ))}
    </LandingLayout>
  );
};

export default ProductsPage;
