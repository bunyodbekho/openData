import { Divider, Flex, Heading, Text } from "@chakra-ui/react";

export default function DataPassport({
  id,
  name,
  organisation,
  owner,
  number,
  email,
  date,
}) {
  function PassportComp({ heading, children }) {
    return (
      <Flex flexDirection={"column"} gap={"20px"} mt={"20px"}>
        <Heading size={"md"} fontWeight={"500"} color={"#3369c7"}>
          {heading}
        </Heading>
        {children}
        <Divider size={"2xl"} colorScheme="blackAlpha" />
      </Flex>
    );
  }

  return (
    <Flex
      flexDirection={"column"}
      padding={"20px"}
      boxShadow={"2xl"}
      borderRadius={"10px"}
      w={"100%"}
      bg={"#fff"}
    >
      <PassportComp heading={"Data set identification number (code)"}>
        <Text fontSize={"lg"}>{id}</Text>
      </PassportComp>
      <PassportComp heading={"Data set name"}>
        <Text fontSize={"lg"}>{name}</Text>
      </PassportComp>
      <PassportComp heading={"An organization that provides open data"}>
        <Text fontSize={"lg"}>{organisation}</Text>
      </PassportComp>
      <PassportComp heading={"Owner of the dataset"}>
        <Text fontSize={"lg"}>{owner}</Text>
      </PassportComp>
      <PassportComp heading={"Contacts of the responsible person"}>
        <Text fontSize={"lg"}>Phone number: {number}</Text>
        <Text fontSize={"lg"}>Email: {email}</Text>
      </PassportComp>
      <PassportComp heading={"Date of the first published dataset"}>
        <Text fontSize={"lg"}>{date}</Text>
      </PassportComp>
    </Flex>
  );
}
