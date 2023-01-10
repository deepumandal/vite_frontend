import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getstatusdataapi } from "../store/reducer/actions";
import axios from "axios";
const api = `http://localhost:3000`;

const Dashboard = () => {
  const { user } = useSelector((store) => store.auth.data);
  const { status } = useSelector((store) => store.feed.status);
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
  useEffect(() => {
    
    dispatch(getstatusdataapi({_id : user?._id}))
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
        <Text fontWeight={"bold"}>Hello {greet} </Text>
        <Button  onClick={()=>dispatch(getstatusdataapi({_id : user?._id}))}>Account Status</Button>
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
        <Heading>Marriage Form</Heading>
        <FormControl display="flex" flexDir={"column"} gap={"0.5rem"}>
          <FormLabel>Email </FormLabel>
          <Input type="email" name="email" onChange={(e) => formchange(e)} />
          <FormLabel> phone no </FormLabel>
          <Input type="number" name="number" onChange={(e) => formchange(e)} />
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
                Photograph{" "}
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
                Addhar card{" "}
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
                signature{" "}
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
          <FormLabel> Date of submission </FormLabel>
          <Input type="date" name="dos" onChange={(e) => formchange(e)} />
          <Button onClick={submitformdata} type="submit">
            Submit
          </Button>
        </FormControl>
      </VStack>
    </VStack>
  );
};

export default Dashboard;
