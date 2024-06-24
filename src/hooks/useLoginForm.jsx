import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "@/context/UserContext";

export const useLoginForm = () => {
  const { users, userLoggedIn, userLogin } = useContext(UserContext);

  const navigate = useNavigate();

  const loginSchema = yup.object().shape({
    username: yup
      .string()
      .required("Username is required")
      .oneOf(
        users.map((user) => user.username),
        "User not found"
      ),
  });

  const {
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      username: userLoggedIn || "",
      isRememberMe: JSON.parse(localStorage.getItem("isRememberMe")),
    },
  });

  const [loginData, setLoginData] = useState({
    username: userLoggedIn || "",
    isRememberMe: JSON.parse(localStorage.getItem("isRememberMe") || false),
  });

  const handleValues = (name, value) => {
    setLoginData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setValue(name, value, { shouldValidate: false });
  };

  const loginUser = (data) => {
    userLogin(data);

    setLoginData({
      username: "",
      isRememberMe: JSON.parse(localStorage.getItem("isRememberMe")),
    });

    navigate("/dashboard");
  };

  return {
    loginData,
    setLoginData,
    handleSubmit,
    errors,
    handleValues,
    loginUser,
  };
};
