import { Flex, Heading, Grid } from "@chakra-ui/react";
import React, { useState } from "react";
import Search from "../../Search/Search";
import Sections from "../../Sections/Sections";
import DisplayProgress from "../../DisplayProgress/DisplayProgress";
import DataInfo from "../../DataInfo/DataInfo";
import {
  territoryData,
  healthcareData,
  educationData,
  transportationData,
  ecologyData,
  populationData,
  agricultureData,
  aralData,
} from "../../../constants/constants";

const blue = [
  {
    header:
      "The list of certified professionals applying for participation in the field of conformity assessment as a staff",
    numData: "6347",
    value: 90,
  },
  {
    header: "Purchase Plan List",
    numData: "5185",
    value: 90,
  },
  {
    header: "Information on existing vacancies",
    numData: "3890",
    value: 90,
  },
  {
    header: "List of extremist organizations",
    numData: "3571",
    value: 90,
  },
  {
    header:
      "Register of licenses for the commercial transportation of passengers and goods by road on urban, suburban, intercity and international routes",
    numData: "3099",
    value: 90,
  },
];

const red = [
  { header: "MASS MEDIA", numData: "6759", value: 33 },
  { header: "Personal goals", numData: "32096", value: 95 },
  { header: "Application Development", numData: "6383", value: 30 },
  { header: "Research work", numData: "29865", value: 80 },
  { header: "Other", numData: "23668", value: 70 },
];

export default function MainLayout() {
  const [curSection, setCurSection] = useState("");

  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      padding={"90px 80px"}
      gap={"40px"}
      bg={"#f2f4f7"}
    >
      <Heading color={"#3369c7"} size={"3xl"}>
        Easy to use Open Data platform!
      </Heading>
      <Search />
      <Sections setCurSection={setCurSection} />

      <Heading color={"#3369c7"}>{curSection}</Heading>
      {curSection === "Territory" &&
        territoryData.map((data) => {
          return (
            <DataInfo
              date={data.date}
              owner={data.owner}
              name={data.name}
              id={data.id}
              number={data.number}
              organisation={data.organisation}
              email={data.email}
              key={data.id}
            />
          );
        })}
      {curSection === "Healthcare" &&
        healthcareData.map((data) => {
          return (
            <DataInfo
              date={data.date}
              owner={data.owner}
              name={data.name}
              id={data.id}
              number={data.number}
              organisation={data.organisation}
              email={data.email}
              key={data.id}
            />
          );
        })}
      {curSection === "Education" &&
        educationData.map((data) => {
          return (
            <DataInfo
              date={data.date}
              owner={data.owner}
              name={data.name}
              id={data.id}
              number={data.number}
              organisation={data.organisation}
              email={data.email}
              key={data.id}
            />
          );
        })}
      {curSection === "Transportation" &&
        transportationData.map((data) => {
          return (
            <DataInfo
              date={data.date}
              owner={data.owner}
              name={data.name}
              id={data.id}
              number={data.number}
              organisation={data.organisation}
              email={data.email}
              key={data.id}
            />
          );
        })}
      {curSection === "Ecology" &&
        ecologyData.map((data) => {
          return (
            <DataInfo
              date={data.date}
              owner={data.owner}
              name={data.name}
              id={data.id}
              number={data.number}
              organisation={data.organisation}
              email={data.email}
              key={data.id}
            />
          );
        })}
      {curSection === "Population" &&
        populationData.map((data) => {
          return (
            <DataInfo
              date={data.date}
              owner={data.owner}
              name={data.name}
              id={data.id}
              number={data.number}
              organisation={data.organisation}
              email={data.email}
              key={data.id}
            />
          );
        })}
      {curSection === "Agriculture" &&
        agricultureData.map((data) => {
          return (
            <DataInfo
              date={data.date}
              owner={data.owner}
              name={data.name}
              id={data.id}
              number={data.number}
              organisation={data.organisation}
              email={data.email}
              key={data.id}
            />
          );
        })}
      {curSection === "Aral Sea region" &&
        aralData.map((data) => {
          return (
            <DataInfo
              date={data.date}
              owner={data.owner}
              name={data.name}
              id={data.id}
              number={data.number}
              organisation={data.organisation}
              email={data.email}
              key={data.id}
            />
          );
        })}

      <Grid templateColumns={"1fr 1fr"} gap={"30px"}>
        <DisplayProgress
          heading={"Frequently used datasets"}
          color={"blue"}
          dataset={blue}
        />
        <DisplayProgress
          heading={"Scope of application"}
          color={"red"}
          dataset={red}
        />
      </Grid>
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
