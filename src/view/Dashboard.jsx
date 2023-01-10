import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getstatusdataapi } from "../store/reducer/actions";
import axios from "axios";
import Reject from "../components/Reject";
const api = `http://localhost:3000`;

import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation();

  const { user } = useSelector((store) => store.auth.data);

  const role = user.role == "r1" ? true : false;

  const { status } = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const [isstatus, setIsstatus] = useState(true);
  // console.log(user)
  const firstname = user?.firstname;
  const greet = firstname;

  // FORM control
  const [formdata, setformdata] = useState({});
  const formchange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };
  const submitformdata = () => {
    console.log(formdata);

    const UpdatedFormData = new FormData();
    for (let key in formdata) {
      UpdatedFormData.append(key, formdata[key]);
    }
    axios
      .post(`${api}/status`, formdata)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };
  const addfile = (e) => {
    const { name } = e.target;
    setformdata({ ...formdata, [name]: e.target.files[0] });
  };

  // stauts

  const [remarkquery, setRemarkquery] = useState("");

  const approvestatus = () => {
    const id = status?._id;
    axios
      .patch(`${api}/updatestatus?_id=${id}`, { remarkStatus: "approved" })
      .then((res) => {
        console.log(res);
        dispatch(getstatusdataapi({ _id: user?._id }));
      })
      .catch((e) => console.error(e));
  };
  const rejectstatus = () => {
    const id = status?._id;
    axios
      .patch(`${api}/updatestatus?_id=${id}`, {
        remarkStatus: "rejected",
        remarkMassage: remarkquery,
      })
      .then((res) => {
        console.log(res);
        dispatch(getstatusdataapi({ _id: user?._id }));
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    dispatch(getstatusdataapi({ _id: user?._id }));
  }, []);

  return (
    <VStack>
      <HStack
        maxW={"1200px"}
        minW={{
          base: "100%",
          md: "80%",
          lg: "90%",
        }}
        padding={"1rem 1%"}
        justifyContent={"center"}
        gap={"400px"}
      >
        <Text fontWeight={"bold"}>
          {" "}
          {t("Hello")} {greet}{" "}
        </Text>
        <Button onClick={() => setIsstatus(!isstatus)}> {t("Status")} </Button>
      </HStack>
      <VStack
        // border="1px solid red"
        mb={"20rem"}
        minW={{
          base: "100%",
          md: "1000px%",
          lg: "900px",
        }}
        padding={"1rem 1rem"}
        justifyContent={"center"}
        gap={"0.6rem"}
        maxw={"1400px"}
      >
        <Heading>{isstatus ? t("MP") : t("status bar")}</Heading>
        {isstatus ? (
          <FormControl display="flex" flexDir={"column"} gap={"0.5rem"}>
            <FormLabel> {t("email")} </FormLabel>
            <Input type="email" name="email" onChange={(e) => formchange(e)} />
            <FormLabel> {t("Phone_no")} </FormLabel>
            <Input
              type="number"
              name="number"
              onChange={(e) => formchange(e)}
            />
            <Flex
              flexDir={{
                base: "column",
                md: "row",
                lg: "row",
              }}
            >
              <VStack>
                <FormLabel textAlign={"left"} w={"100%"}>
                  {" "}
                  {t("Photograph")}
                </FormLabel>
                <Input
                  name="photograph"
                  border={"none"}
                  type="file"
                  onChange={addfile}
                  accept="image/png, image/jpg, image/jpeg"
                />
              </VStack>
              <VStack>
                <FormLabel textAlign={"left"} w={"100%"}>
                  {" "}
                  {t("addhar_card")}
                </FormLabel>
                <Input
                  name="addhar"
                  type="file"
                  border={"none"}
                  onChange={addfile}
                  accept="image/png, image/jpg, image/jpeg"
                />
              </VStack>
              <VStack>
                <FormLabel textAlign={"left"} w={"100%"}>
                  {" "}
                  {t("signature")}
                </FormLabel>
                <Input
                  name="signature"
                  type="file"
                  border={"none"}
                  onChange={addfile}
                  accept="image/png, image/jpg, image/jpeg"
                />
              </VStack>
            </Flex>
            <FormLabel> {t("date_of_submission")} </FormLabel>
            <Input type="date" name="dos" onChange={(e) => formchange(e)} />
            <Button onClick={submitformdata} type="submit">
              {t("submit")}
            </Button>
          </FormControl>
        ) : (
          <VStack
            minW={{
              base: "100%",
              md: "1000px",
              lg: "900px",
            }}
            maxw={"1400px"}
            padding={"1rem 0%"}
            // border={"1px solid red"}
          >
            <Button
              onClick={() => dispatch(getstatusdataapi({ _id: user?._id }))}
            >
              {" "}
              {t("refresh")}{" "}
            </Button>
            <TableContainer w={"100%"}>
              <Table variant="striped" colorScheme="teal">
                <Thead>
                  <Tr>
                    <Th> {t("id")} </Th>
                    <Th> {t("fullName")} </Th>
                    <Th> {t("address")} </Th>
                    <Th> {t("email")} </Th>
                    <Th isNumeric> {t("Phone_no")} </Th>
                    <Th> {t("Status")} </Th>
                    {role && (
                      <>
                        <Th>{t("approve")} </Th>
                        <Th> {t("reject")} </Th>
                      </>
                    )}
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      {status?._id.trim().split("").slice(0, 5).join("") || 0}
                    </Td>
                    <Td> {status?.firstname + "  " + status?.lastname} </Td>
                    <Td isNumeric>{status?.address}</Td>
                    <Td>{status?.email}</Td>
                    <Td>{status?.number}</Td>
                    <Td> {t(`${status?.remarkStatus}`)} </Td>
                    {role && (
                      <>
                        <Td>
                          {" "}
                          <Button onClick={() => approvestatus()}>
                            {t('approve')}
                          </Button>{" "}
                        </Td>
                        <Td>
                          {" "}
                          <Reject
                            setRemarkquery={setRemarkquery}
                            rejectstatus={rejectstatus}
                          >
                            {" "}
                            {t("rejected")}{" "}
                          </Reject>
                        </Td>
                      </>
                    )}
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </VStack>
        )}
      </VStack>
    </VStack>
  );
};

export default Dashboard;
