import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const Reject = ({ children, rejectstatus, setRemarkquery }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const Saveaction = () =>{
    rejectstatus()
    onClose()
  }

  return (
    <>
      <Button onClick={onOpen}>{children}</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Why you want to reject</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Massage </FormLabel>
              <Input
                ref={initialRef}
                placeholder="querry here"
                onChange={(e) => setRemarkquery(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={() => Saveaction()} colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Reject;
