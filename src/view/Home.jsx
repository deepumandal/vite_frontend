import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <VStack>
      <Heading> {t("MP")} </Heading>
      <Box
        // border={'1px solid red'}
        maxW={"1200px"}
        minW={{
          base: "100%",
          md: "80%",
          lg: "90%",
        }}
      >
        <HStack padding={"1rem 1%"} gap="1rem" w={"100%"} alignItems="start">
          <Image src="https://media.gettyimages.com/id/1384689945/photo/background-of-artificial-pink-rose-blooms.jpg?s=612x612&w=0&k=20&c=DtNyBBANvnbEIQqgT8dO6KzaK2Shq0sUTjDHtr3InRQ=" />
          <VStack alignItems={"start"} gap="1rem">
            <Text>{t("desb")}</Text>
            <Button onClick={() => navigate("/dashboard")}>
              {t("apply_here")}
            </Button>
          </VStack>
        </HStack>
      </Box>
    </VStack>
  );
};

export default Home;
