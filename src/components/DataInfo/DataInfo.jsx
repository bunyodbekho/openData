import { Button, Flex, Text } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import DataPassport from "../DataPassport/DataPassport";

export default function DataInfo({
  date,
  name,
  owner,
  id,
  organisation,
  number,
  email,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      flexDirection={"column"}
      padding={"20px"}
      boxShadow={"2xl"}
      bg={"#fff"}
      w={"100%"}
      borderRadius={"10px"}
      gap={"20px"}
    >
      <Text color={"#4e4e4e"}>{date}</Text>
      <Text color={"#222222"} as={"b"} fontSize={"2xl"}>
        {name}
      </Text>
      <Text color={"#6880aa"} fontSize={"lg"}>
        {organisation}
      </Text>
      <Text color={"#222222"} fontSize={"xl"}>
        {id}
      </Text>
      <Button colorScheme="blue" w={"80px"} onClick={onOpen}>
        More...
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"6xl"}>
        <ModalOverlay />

        <ModalContent w={"80%"}>
          <ModalHeader fontSize={"2xl"}>{name}</ModalHeader>
          <ModalCloseButton />
          <DataPassport
            id={id}
            name={name}
            organisation={organisation}
            number={number}
            email={email}
            date={date}
            owner={owner}
            onClose={onClose}
          />
        </ModalContent>
      </Modal>
    </Flex>
  );
}
