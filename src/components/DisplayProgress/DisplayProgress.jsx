import { Flex, Heading, Progress, Text } from "@chakra-ui/react";

export default function DisplayProgress({ heading, dataset, color }) {
  function ProgressData({ text, num, color, value }) {
    return (
      <Flex flexDirection={"column"} padding={"10px"} gap={"10px"}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"30px"}
        >
          <Text>{text}</Text>
          <Text color={color}>{num}</Text>
        </Flex>
        <Progress height={"4px"} value={value} colorScheme={color} />
      </Flex>
    );
  }

  return (
    <Flex flexDirection={"column"} gap={"20px"}>
      <Heading fontWeight={"400"}>{heading}</Heading>
      <Flex
        bg={"#fff"}
        borderRadius={"10px"}
        padding={"10px"}
        flexDirection={"column"}
      >
        {dataset?.map((item) => {
          return (
            <ProgressData
              text={item.header}
              num={item.numData}
              value={item.value}
              color={color}
              key={item.header}
            />
          );
        })}
      </Flex>
    </Flex>
  );
}
