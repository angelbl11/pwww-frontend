import React from 'react';
import { Flex } from '@chakra-ui/react';
import NavBar from '../NavBar';
import Footer from '../Footer';
export default function LandingLayout(props) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: '1200px' }}
      m="0 auto"
      {...props}
    >
      <NavBar />
      {props.children}
      <Footer />
    </Flex>
  );
}
