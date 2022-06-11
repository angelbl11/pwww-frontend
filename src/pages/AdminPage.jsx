import React from 'react';
import LandingLayout from '../components/Layouts/LandingLayout';
import AdminItem from '../components/AdminItem';
const AdminPage = () => {
  return (
    <LandingLayout>
      <AdminItem
        product={'Iphone 11'}
        description={'Iphone 11 Descripcion'}
        uri={
          'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=90&.v=1567022175704'
        }
      />
    </LandingLayout>
  );
};

export default AdminPage;
