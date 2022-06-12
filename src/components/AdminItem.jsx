import React, { useState } from 'react';
import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { uploadImg } from '../utils';
import ApiUrl from '../api';
import axios from 'axios';

const AdminItem = ({ product, uri, description, id, cost, updateProducts }) => {
  const {
    onClose: onCloseEdit,
    onOpen: onOpenEdit,
    isOpen: isOpenEdit,
  } = useDisclosure();
  const {
    onClose: onCloseDelete,
    onOpen: onOpenDelete,
    isOpen: isOpenDelete,
  } = useDisclosure();

  const [img, setImg] = useState(uri);
  const [name, setName] = useState(product);
  const [desc, setDesc] = useState(description);
  const [price, setPrice] = useState(cost);

   const handleEdit = async () => {
      if (!img) {
         return;
      }

      onCloseEdit()

      // Sube la imagen
      let imgUrl;
      if (typeof img !== String) {
         imgUrl = await uploadImg(img);
      } else {
         imgUrl = img;
      }

      
      const updatedProduct = {
         name,
         description: desc,
         price,
         img: imgUrl,
      };

      const url = ApiUrl + `product/${id}`
      const { data } = await axios.put(url, updatedProduct)
      console.log(data)

      updateProducts()
   };

   const handleDelete = async () => {
      onCloseDelete()
      const url = ApiUrl + `product/${id}`
      const { data } = await axios.delete(url);
      console.log(data)
      updateProducts()
      
   }

  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '18rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image objectFit="cover" boxSize="100%" src={uri} />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {product}
          </Heading>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
          >
            {description}
          </Text>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}
              onClick={onOpenEdit}
            >
              Editar
            </Button>
            <Modal isOpen={isOpenEdit} onClose={onCloseEdit}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Editar Producto</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl id="productImage">
                    <FormLabel>Editar Imagen</FormLabel>
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
                  <Button colorScheme="blue" mr={3} onClick={onCloseEdit}>
                    Cerrar
                  </Button>
                  <Button variant="ghost" type="submit" onClick={handleEdit}>
                    Editar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Modal isOpen={isOpenDelete} onClose={onCloseDelete}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Eliminar Producto</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  ¿Estás seguro que quieres eliminar este producto?
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onCloseDelete}>
                    Cerrar
                  </Button>
                  <Button variant="ghost" type="submit" onClick={handleDelete}>
                    Eliminar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
              onClick={onOpenDelete}
            >
              Borrar
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
};

export default AdminItem;
