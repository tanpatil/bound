import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  Center,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  ModalCloseButton,
  HStack,
  IconButton,
  Spacer,
  VStack,
  Textarea,
} from '@chakra-ui/react';
import * as React from 'react';
import { BiStar, BiPlus } from 'react-icons/bi';
import { FiPlusSquare } from 'react-icons/fi';
import PerkForm from './PerkForm';

export default function ModalPerkMint({ value, setter }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack
        minH={115}
        backgroundColor="#FEFFFE"
        borderColor="#D3D3D3"
        borderWidth={1}
        borderRadius="lg"
        p={3}
      >
        <Box p={1}>
          <BiStar size={30} color="#1A202C" />
        </Box>
        <Spacer />
        <VStack spacing={1}>
          <Heading size="sm">Perks</Heading>
          <Text>List the benefits of having the token</Text>
        </VStack>

        <Spacer />
        <IconButton
          icon={<FiPlusSquare />}
          aria-label="Add a requirement"
          onClick={onOpen}
          fontSize="4xl"
          background="none"
          color="#FEA401"
        />

        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent h="600px" maxW="800px">
            <ModalHeader>Perks</ModalHeader>
            <ModalBody>
              <VStack spacing={5}>
                <FormControl isRequired>
                  <FormLabel mt={5} fontWeight="semibold">
                    Benefits
                  </FormLabel>
                  <Box>
                    <Textarea
                      size="lg"
                      resize="none"
                      h={400}
                      placeholder="Include three perks of the subscription (separate with commas)"
                      bg="#FEFFFE"
                      borderColor="#D3D3D3"
                      onChange={(e) => {
                        setter(e.target.value);
                      }}
                      value={value}
                    />
                  </Box>
                </FormControl>
                {/* <Button leftIcon={<FiPlusSquare />}>Add Another Detail</Button> */}
              </VStack>
            </ModalBody>
            <ModalCloseButton />

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Save
              </Button>
              <Button
                onClick={() => {
                  onClose();
                  setter('');
                }}
              >
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </HStack>
    </>
  );
}
