import { Flex, Heading, Text, Link, Center, Divider } from "@chakra-ui/react";
import Header from "../../Header/Header";
import { colors } from "../../../constants/constants";
import React, { useState, useCallback } from "react";
import { BarChart, Bar, Cell } from "recharts";

const iconStyles = {
  color: colors.txtGolden,
  fontSize: "80px",
};

const data = [
  {
    name: "0-14",
    uv: 200,
  },
  {
    name: "15-19",
    uv: 400,
  },
  {
    name: "20-24",
    uv: 820,
  },
  {
    name: "25-30",
    uv: 440,
  },
  {
    name: "31-34",
    uv: 140,
  },
  {
    name: "35+",
    uv: 160,
  },
];

export default function MainLayout() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data[activeIndex];

  const handleClick = useCallback(
    (entry, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <Flex flexDirection={"column"}>
      {/* Header */}
      <Header />

      {/* Section - Main */}
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        bgImage={"./src/assets/main-section.jpg"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        bgPosition={"center"}
        h={"600px"}
      >
        <Heading as={"h2"} color={"#fff"} textAlign={"center"}>
          <Text as={("u", "i")}>
            <Link>Join OpenData!</Link>
          </Text>
          <br /> Your Opinion Is Important
        </Heading>
      </Flex>

      {/* Section - 1 */}
      <Flex bg={colors.bgSecondary} padding={"0 50px"}>
        <Flex
          flexDirection={"column"}
          gap={"20px"}
          w={"50%"}
          alignItems={"center"}
          bg={colors.bgMain}
          padding={"30px"}
        >
          <Heading color={colors.txtGolden} fontSize={"40px"}>
            Overall Statistics
          </Heading>
          <Flex alignItems={"center"} gap={"5px"}>
            <Text color={colors.txtWhite} fontSize={"40px"} as={"b"}>
              169 835
            </Text>
            <Divider orientation="vertical" color={colors.txtWhite} />
            <Text color={colors.txtGolden} fontSize={"30px"}>
              Reporters this year
            </Text>
          </Flex>
          <Flex gap={"30px"}>
            <Flex gap={"20px"}>
              <Flex flexDirection={"column"} alignItems={"center"}>
                <i style={iconStyles} className="fa-solid fa-child-dress"></i>
                <Text color={colors.txtWhite} as={"b"} fontSize={"30px"}>
                  56%
                </Text>
                <Text color={colors.txtGolden} as={"b"}>
                  58 695
                </Text>
              </Flex>
              <Flex flexDirection={"column"} alignItems={"center"}>
                <i style={iconStyles} className="fa-solid fa-child"></i>
                <Text color={colors.txtWhite} as={"b"} fontSize={"30px"}>
                  44%
                </Text>
                <Text color={colors.txtGolden} as={"b"}>
                  46 698
                </Text>
              </Flex>
            </Flex>
            <Flex color={colors.txtWhite} flexDirection={"column"}>
              <BarChart width={300} height={100} data={data}>
                <Bar dataKey="uv" onClick={handleClick}>
                  {data.map((entry, index) => (
                    <Cell
                      cursor="pointer"
                      fill={
                        index === activeIndex
                          ? colors.txtWhite
                          : colors.txtGolden
                      }
                      key={`cell-${index}`}
                    />
                  ))}
                </Bar>
              </BarChart>
              <p className="content">{`Participation of "${activeItem.name}": ${
                activeItem.uv / 20
              }%`}</p>
            </Flex>
          </Flex>
        </Flex>
        <Center></Center>
      </Flex>
    </Flex>
  );
}

/*
1. main section
2. some graph
3. some graph
4. some graph
5. about us
6. join us
*/
