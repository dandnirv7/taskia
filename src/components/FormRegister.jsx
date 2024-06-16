import { TextInput } from "@/components/elements/TextInput";
import useRegisterForm from "@/hooks/useRegisterForm";
import { Button } from "@/components/ui/button";
import profile from "@/assets/img/profile-circle.svg";

export const FormRegister = () => {
  const { handleSubmit, errors, handleValues, registerUser, registerData } =
    useRegisterForm();

  return (
    <form onSubmit={handleSubmit(registerUser)}>
      <div className="flex flex-col justify-center gap-3">
        <div className="flex flex-col gap-2">
          <TextInput
            id="fullName"
            image={profile}
            alt="profil-icon"
            label="Full Name"
            value={registerData.fullName}
            onChange={(e) => handleValues("fullName", e.target.value)}
            placeholder="Full name (e.g., John Doe)"
            errors={errors?.fullName}
          />

          <TextInput
            id="username"
            image={profile}
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
