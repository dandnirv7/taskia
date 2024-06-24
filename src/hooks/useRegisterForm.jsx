import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { UserContext } from "@/context/UserContext";
import { useNavigate } from "react-router-dom";

export const useRegisterForm = () => {
  const { users, addUser } = useContext(UserContext);
  const navigate = useNavigate();

  const registerSchema = yup.object().shape({
    fullName: yup
      .string()
      .required("Full Name is required")
      .transform((value) => value.trim())
      .min(4, "Full Name must be at least 4 characters")
      .max(255, "Full Name cannot exceed 255 characters")
      .matches(
        /^[A-Za-z\s]+$/,
        "Full Name must only contain letters and spaces"
      )
      .test(
        "no-consecutive-spaces",
        "Full Name cannot contain consecutive spaces",
        (value) => {
          return !/\s{2,}/.test(value);
        }
      ),
    username: yup
      .string()
      .transform((value) => value.trim())
      .min(4, "Username must be at least 4 characters")
      .max(255, "Username cannot exceed 255 characters")
      .matches(
        /^[a-zA-Z0-9_]+$/,
        "Username must only contain letters, numbers, or underscores"
      )
      .required("Username is required")
      .test("checkDuplicateUsername", "Username already exists", (value) => {
        return !users.some((user) => user.username === value);
      }),
  });

  const {
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      fullName: "",
      username: "",
    },
  });

  const [registerData, setRegisterData] = useState({
    fullName: "",
    username: "",
  });

  const handleValues = (name, value) => {
    setRegisterData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setValue(name, value, { shouldValidate: true });
  };

  const registerUser = (data) => {
    addUser(data);

    setRegisterData({
      fullName: "",
      username: "",
    });

    reset();

    navigate("/login");
  };

  return {
    registerData,
    setRegisterData,
    handleSubmit,
    errors,
    reset,
    handleValues,
    registerUser,
  };
};
