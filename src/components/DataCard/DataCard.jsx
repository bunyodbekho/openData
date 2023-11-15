import { Flex, Heading, Text } from "@chakra-ui/react";

const iconStyles = {
  fontSize: "40px",
};

export default function DataCard({ heading, numData, icon, setCurSection }) {
  return (
    <Flex
      bg={"#3369c7"}
      padding={"20px"}
      borderRadius={"10px"}
      color={"white"}
      alignItems={"center"}
      gap={"20px"}
      justifyContent={"space-between"}
      cursor={"pointer"}
      onClick={() => setCurSection(heading)}
    >
      <Flex flexDirection={"column"}>
        <Heading size={"lg"}>{heading}</Heading>
        <Text>{numData}</Text>
      </Flex>
      <Flex>
        <i style={iconStyles} className={icon}></i>
      </Flex>
    </Flex>
  );
}
