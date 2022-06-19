import React, { useEffect, useState } from 'react';
import LandingLayout from '../components/Layouts/LandingLayout';
import AdminItem from '../components/AdminItem';
import axios from 'axios';
import ApiUrl from '../api';
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { uploadImg } from '../utils';
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

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [img, setImg] = useState(null);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const onSubmit = async () => {
    if (!img) {
      return;
    }

    onClose();

    // Sube la imagen
    let imgUrl;
    if (typeof img !== String) {
      imgUrl = await uploadImg(img);
    } else {
      imgUrl = img;
    }

    const newProduct = {
      name,
      description: desc,
      price,
      img: imgUrl,
    };

    const url = ApiUrl + `product`;
    const { data } = await axios.post(url, newProduct);
    console.log(data);

    fetchProducts();
  };

  if (isLoading) {
    return (
      <Flex w="100%" justifyContent="center" pt={30}>
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <LandingLayout>
      <Button onClick={onOpen}>Agregar</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crear Producto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="productImage">
              <FormLabel>Imagen</FormLabel>
              <Stack direction={['column', 'row']} spacing={6}>
                <Center w="full">
                  <Input
                    _placeholder={{ color: 'gray.500' }}
                    type="file"
                    required
                    onChange={e => setImg(e.target.files[0])}
                  />
                </Center>
              </Stack>
            </FormControl>
            <FormControl id="productName" isRequired>
              <FormLabel>Nombre del producto</FormLabel>
              <Input
                _placeholder={{ color: 'gray.500' }}
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="productDescription" isRequired>
              <FormLabel>Descripción del producto</FormLabel>
              <Input
                _placeholder={{ color: 'gray.500' }}
                type="text"
                value={desc}
                onChange={e => setDesc(e.target.value)}
              />
            </FormControl>
            <FormControl id="productPrice" isRequired>
              <FormLabel>Precio del producto</FormLabel>
              <Input
                placeholder="$100"
                _placeholder={{ color: 'gray.500' }}
                type="number"
                required
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cerrar
            </Button>
            <Button variant="ghost" type="submit" onClick={onSubmit}>
              Crear
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {products.length === 0 ? (
        <LandingLayout>
          <Heading>No se encontraron productos</Heading>
        </LandingLayout>
      ) : (
        products.map(product => (
          <AdminItem
            key={product._id}
            product={product.name}
            description={product.description}
            cost={product.price}
            uri={product.img}
            id={product._id}
            updateProducts={fetchProducts}
          />
        ))
      )}
    </LandingLayout>
  );
};

export default AdminPage;
