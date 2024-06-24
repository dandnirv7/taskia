import { useContext } from "react";

import { UserContext } from "@/context/UserContext";
import { useRegisterForm } from "@/hooks/useRegisterForm";

import { TextInput } from "@/components/elements/TextInput";
import { Button } from "@/components/ui/button";

import { profile, profileDark } from "@/assets/images";

export const FormRegister = () => {
  const { handleSubmit, errors, handleValues, registerUser, registerData } =
    useRegisterForm();
  const { isDarkmode } = useContext(UserContext);

  return (
    <form onSubmit={handleSubmit(registerUser)}>
      <div className="flex flex-col justify-center gap-3">
        <div className="flex flex-col gap-2">
          <TextInput
            id="fullName"
            image={isDarkmode ? profileDark : profile}
            alt="profil-icon"
            label="Full Name"
            value={registerData.fullName}
            onChange={(e) => handleValues("fullName", e.target.value)}
            placeholder="Full name (e.g., John Doe)"
            errors={errors?.fullName}
          />

          <TextInput
            id="username"
            image={isDarkmode ? profileDark : profile}
            alt="profil-icon"
            label="Username"
            value={registerData.username}
            onChange={(e) => handleValues("username", e.target.value)}
            placeholder="Username (e.g john)"
            errors={errors?.username}
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          shadow="default"
          className="my-3"
        >
          Sign Up
        </Button>
      </div>
    </form>
  );
};
