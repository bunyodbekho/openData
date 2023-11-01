import { Flex, Heading, Divider } from "@chakra-ui/react";
import { colors } from "../../constants/constants";

export default function Header() {
  return (
    <Flex flexDirection={"column"} padding={"20px 0px"} bg={colors.bgMain}>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Heading color={colors.txtGolden} as={"h1"} size={"4xl"}>
          OpenData
        </Heading>
      </Flex>
      <Divider mt={"30px"} />

      <Flex></Flex>
    </Flex>
  );
}
