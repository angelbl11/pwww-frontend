import React from 'react';
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

const AdminItem = ({ product, uri, description }) => {
  const { onClose, onOpen, isOpen } = useDisclosure();
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
              onClick={onOpen}
            >
              Editar
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
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
                    />
                  </FormControl>
                  <FormControl id="productDescription" isRequired>
                    <FormLabel>Descripción del producto</FormLabel>
                    <Input _placeholder={{ color: 'gray.500' }} type="text" />
                  </FormControl>
                  <FormControl id="productPrice" isRequired>
                    <FormLabel>Precio del producto</FormLabel>
                    <Input
                      placeholder="$100"
                      _placeholder={{ color: 'gray.500' }}
                      type="number"
                      required
                    />
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Cerrar
                  </Button>
                  <Button variant="ghost" type="submit">
                    Editar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Eliminar Producto</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  ¿Estás seguro que quieres eliminar este producto?
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Cerrar
                  </Button>
                  <Button variant="ghost" type="submit">
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
              onClick={onOpen}
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
