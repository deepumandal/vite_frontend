import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getloginapi, getresisterapi } from "../store/auth/actions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [PgType, setPgType] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((store) => store.auth.data);

  // login
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [loginquery, setLoginquery] = useState({});

  const loginchange = (e) => {
    const { name, value } = e.target;
    setLoginquery({
      ...loginquery,
      [name]: value,
    });
  };
  const loginSubmit = (e) => {
    // console.log(loginquery);
    dispatch(getloginapi(loginquery));
    navigate("/");
  };

  // signup
  const [resisterQuery, setResisterQuery] = useState({});
  const resisterchange = (e) => {
    const { name, value } = e.target;
    setResisterQuery({
      ...resisterQuery,
      [name]: value,
    });
  };
  const resisterSubmit = (e) => {
    dispatch(getresisterapi(resisterQuery));
  };

  return (
    <Box>
      <VStack>
        <Text textAlign={"center"} fontWeight="bold">
          {PgType ? "Login" : "Signup"}
        </Text>
        {PgType ? (
          <FormControl
            sx={{
              maxW: "400px",
              margin: "auto",
              // border: "1px solid red",
              padding: "0.8rem",
              mt: "1.5rem",
              display: "flex",
              gap: "20px",
              flexDir: "column",
            }}
          >
            <Input
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={(e) => loginchange(e)}
            />

            <InputGroup>
              <Input
                name="password"
                onChange={(e) => loginchange(e)}
                type={show ? "text" : "password"}
                placeholder="Enter Password"
              />{" "}
              <InputRightElement width="4.5rem">
                <Button onClick={handleClick}>{show ? "Hide" : "Show"}</Button>
              </InputRightElement>
            </InputGroup>
            <Button type="submit" onClick={loginSubmit}>
              submit
            </Button>
          </FormControl>
        ) : (
          <FormControl
            sx={{
              maxW: "400px",
              margin: "auto",
              // border: "1px solid red",
              padding: "0.8rem",
              mt: "1.5rem",
              display: "flex",
              gap: "20px",
              flexDir: "column",
            }}
          >
            <HStack>
              <Input
                type="text"
                placeholder="FirstName"
                name="firstname"
                onChange={(e) => resisterchange(e)}
              />
              <Input
                type="text"
                placeholder="LastName"
                name="lastname"
                onChange={(e) => resisterchange(e)}
              />
            </HStack>
            <Input
              type="text"
              placeholder="Address"
              name="address"
              onChange={(e) => resisterchange(e)}
            />

            <Input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => resisterchange(e)}
            />
            <HStack>
            <Input
              type="date"
              placeholder="age"
              name="dob"
              onChange={(e) => resisterchange(e)}
            />
            <Select placeholder="gender" name="gender" onChange={resisterchange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
            </HStack>
            <Input
              type="number"
              placeholder="Salary"
              name="salary"
              onChange={(e) => resisterchange(e)}
            />

            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                onChange={(e) => resisterchange(e)}
              />{" "}
              <InputRightElement width="4.5rem">
                <Button onClick={handleClick}>{show ? "Hide" : "Show"}</Button>
              </InputRightElement>
            </InputGroup>
            <Button type="submit" onClick={resisterSubmit}>
              submit
            </Button>
          </FormControl>
        )}
        <Text
          sx={{
            color: "#7babff",
          }}
          onClick={() => setPgType(!PgType)}
        >
          {PgType ? "Don't have an account/signup" : "Already resistered"}
        </Text>
      </VStack>
    </Box>
  );
};

export default Login;
