import { useContext } from "react";

import { useLoginForm } from "@/hooks/useLoginForm";
import { UserContext } from "@/context/UserContext";

import { TextInput } from "@/components/elements/TextInput";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { profile, profileDark } from "@/assets/images";

export const FormLogin = () => {
  const { handleSubmit, handleValues, loginData, errors, loginUser } =
    useLoginForm();
  const { isDarkmode } = useContext(UserContext);

  return (
    <form onSubmit={handleSubmit(loginUser)}>
      <TextInput
        id="username"
        image={isDarkmode ? profileDark : profile}
        alt="profil-icon"
        label="Username"
        value={loginData.username}
        onChange={(e) => handleValues("username", e.target.value)}
        placeholder="Enter your username"
        errors={errors?.username}
      />
      <div className="flex items-center gap-2 mt-5">
        <Checkbox
          id="rememberMe"
          checked={loginData.isRememberMe}
          onCheckedChange={(value) => handleValues("isRememberMe", value)}
        />
        <label
          htmlFor="rememberMe"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Remember Me
        </label>
      </div>

      <Button
        type="submit"
        variant="primary"
        shadow="default"
        className="w-full my-5"
      >
        Sign In
      </Button>
    </form>
  );
};
