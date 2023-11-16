import {
  Flex,
  Heading,
  Tabs,
  TabList,
  Tab,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      justifyContent={"space-between"}
      padding={"30px"}
      bg={"#3369c7"}
      color={"#fff"}
    >
      <Heading>OpenData</Heading>
      <Tabs
        colorScheme="twitter"
        bg={"#fff"}
        padding={"5px"}
        borderRadius={"15px"}
        variant={"soft-rounded"}
        color={"#fff"}
      >
        <TabList>
          <Tab onClick={onOpen}>Request Dataset</Tab>
        </TabList>
      </Tabs>

      <Modal isOpen={isOpen} onClose={onClose} size={"3xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Request Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfWFzzk9zOStfGBGTe0HoJ3gsVZTfW-20IHu2HLUvT8HIzBkQ/viewform?embedded=true"
              width="640"
              height="1037"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
