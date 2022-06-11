import React from 'react';
import Hero from '../components/Hero';
import LandingLayout from '../components/Layouts/LandingLayout';
const HomePage = () => {
  return (
    <LandingLayout>
      <Hero
        title="La tienda donde encuentras todo lo que buscas"
        subtitle="Todo para cualquier tipo de usuario"
        image="https://images.unsplash.com/photo-1505327191481-d31e1fb4ff79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1349&q=80"
      />
    </LandingLayout>
  );
};

export default HomePage;
