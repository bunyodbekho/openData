import { Flex, Heading, Tabs, TabList, Tab, Link } from "@chakra-ui/react";

export default function Navbar() {
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
          <Link to="/">
            <Tab>Home</Tab>
          </Link>
          <Link to="/about">
            <Tab>About</Tab>
          </Link>
          <Link to="/program-overview">
            <Tab>Program Overview</Tab>
          </Link>
          <Link to="/join-us">
            <Tab>Join Us</Tab>
          </Link>
        </TabList>
      </Tabs>
    </Flex>
  );
}
