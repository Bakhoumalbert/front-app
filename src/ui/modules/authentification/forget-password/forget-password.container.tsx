import { ForgetPasswordView } from "./forget-password.view"
import { useForm, SubmitHandler } from "react-hook-form"
import { ForgetPasswordFormFielsType, RegisterFormFielsType } from "@/src/types/forms"
import { useToggle } from "@/src/hooks/use-toggle"
import { toast } from "react-toastify";
import { sendEmailToResetPassword } from "@/src/api/authentification";
import { useRouter } from "next/router";

export const ForgetPasswordContainer = () => {

  const router = useRouter();
  const { value: isLoading, setValue: setIsLoading } = useToggle()

  const handleResetPassword = async ({ email }: ForgetPasswordFormFielsType) => {
    const { error } = await sendEmailToResetPassword(email)

    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success(`Un e-mail a été expédié à l'adresse ${email}`)
    setIsLoading(false);
    reset()
    router.push("/connexion")
  }


  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<ForgetPasswordFormFielsType>()
  const onSubmit: SubmitHandler<ForgetPasswordFormFielsType> = async (formData) => {
    setIsLoading(true);
    handleResetPassword(formData)
  }
  return (
    <ForgetPasswordView form={{ errors, isLoading, register, handleSubmit, onSubmit }} />
  )
}
