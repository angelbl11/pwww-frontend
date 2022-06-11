import React from 'react';
import LandingLayout from '../components/Layouts/LandingLayout';
import Item from '../components/Item';
const ProductsPage = () => {
  return (
    <LandingLayout>
      <Item
        description={
          'GPU de 16 núcleos Memoria unificada de 16 GB Almacenamiento SSD de 512 GB.'
        }
        product={'MacBook M1'}
        price={'25,999'}
        uri={
          'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_MX?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1633657358000'
        }
      ></Item>
      <Item
        description={
          'GPU de 16 núcleos Memoria unificada de 16 GB Almacenamiento SSD de 512 GB.'
        }
        product={'MacBook M1'}
        price={'25,999'}
        uri={
          'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_MX?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1633657358000'
        }
      ></Item>
    </LandingLayout>
  );
};

export default ProductsPage;
