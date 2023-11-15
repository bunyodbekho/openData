import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";

export default function Search() {
  return (
    <InputGroup size="md" w={"50%"}>
      <Input
        pr="4.5rem"
        type={"text"}
        placeholder="Enter password"
        borderColor={"black 200"}
        borderWidth={"2px"}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" colorScheme="blue">
          {"Hide"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
