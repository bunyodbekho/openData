import { Grid, GridItem } from "@chakra-ui/react";
import DataCard from "../DataCard/DataCard";

export default function Sections({ setCurSection }) {
  const dataCard = [
    { heading: "Territory", numData: "548", icon: "fa-solid fa-location-dot" },
    {
      heading: "Healthcare",
      numData: "649",
      icon: "fa-solid fa-notes-medical",
    },
    { heading: "Education", numData: "619", icon: "fa-solid fa-school" },
    {
      heading: "Transportation",
      numData: "86",
      icon: "fa-solid fa-train-subway",
    },
    { heading: "Ecology", numData: "152", icon: "fa-solid fa-leaf" },
    { heading: "Population", numData: "1223", icon: "fa-solid fa-person" },
    { heading: "Agriculture", numData: "1027", icon: "fa-solid fa-tractor" },
    { heading: "Aral Sea region", numData: "3668", icon: "fa-solid fa-water" },
  ];

  return (
    <Grid templateColumns={"repeat(4, 1fr)"} gap={6}>
      {dataCard.map((data) => {
        return (
          <GridItem w={"100%"} key={data.heading}>
            <DataCard
              heading={data.heading}
              numData={data.numData}
              icon={data.icon}
              setCurSection={setCurSection}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
}
