import {
  Box,
  Button,
  Menu,
  MenuButton,
  Text,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutuser } from "../store/auth/actions";

const Navbar = () => {
  const dispatch = useDispatch();
    const { isAuth, user } = useSelector((store) => store.auth.data);
  // console.log(user, isAuth);
  const username = `${user?.firstname || "guest"}`;
  const navigate = useNavigate();

  const loginroutebtn = () => {
    if (isAuth) {
      dispatch(logoutuser());
    } else {
      navigate("/login");
    }
  };

  return (
    <Box
      backgroundColor={"white"}
      position="fixed"
      left={10}
      right={10}
      top={0}
      height={"60px"}
      maxWidth={"1200px"}
      margin="auto"
      display="flex"
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={"0 0.2rem"}
    >
      <Text onClick={() => navigate("/")}>MP</Text>
      <Menu>
        <MenuButton as={Button}>Hello, {username}</MenuButton>
        <MenuList>
          <MenuItem onClick={() => navigate("/dashboard")}>My Account</MenuItem>
          <MenuItem onClick={() => navigate("/dashboard")}>Dashboard</MenuItem>
          <MenuItem onClick={loginroutebtn}>
            {isAuth ? "logout" : "login"}
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Navbar;
