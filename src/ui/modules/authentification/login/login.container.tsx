import { firebaseSignInUser } from "@/src/api/authentification";
import { useToggle } from "@/src/hooks/use-toggle";
import { LoginFormFielsType } from "@/src/types/forms";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { LoginView } from "./login.view";
import { useRouter } from "next/router";

export const LoginContainer = () => {

  const router = useRouter()

  const { value: isLoading, setValue: setIsLoading } = useToggle()

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<LoginFormFielsType>()

  const handleSignInUser = async ({ email, password }: LoginFormFielsType) => {
    const { error } = await firebaseSignInUser(email, password);

    if (error) {
      setIsLoading(false);
      toast.error(error.message)
      return;
    }
    toast.success("Bienvenue sur Coders UAM");
    setIsLoading(false)
    reset()
    router.push("/mon-espace")
  }

  const onSubmit: SubmitHandler<LoginFormFielsType> = async (formData) => {
    setIsLoading(true)
    const { password } = formData
    if (password.length <= 5) {
      setError("password", {
        type: "manual",
        message: "Ton mot de passe doit comporter au minimum 6 caractéres",
      });
      setIsLoading(false);
      return;
    }
    handleSignInUser(formData)
  }

  return (
    <LoginView form={{ errors, isLoading, register, handleSubmit, onSubmit }} />
  )
}
