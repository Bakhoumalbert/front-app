import { UserProfileFormFielsType } from "@/src/types/forms"
import { MesProjetPageView } from "./mesprojets.view"
import { SubmitHandler, useForm } from "react-hook-form"
import { useState } from "react"
import { useToggle } from "@/src/hooks/use-toggle"

export const MesProjetPageContainer = () => {

    const { value: isLoading, setValue: setLoading } = useToggle()
    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
        setValue,
        setError,
    } = useForm<UserProfileFormFielsType>()

    const onSubmit: SubmitHandler<UserProfileFormFielsType> = async (formData) => {
    }

    return (
        <MesProjetPageView
            form={{
                errors,
                control,
                register,
                handleSubmit,
                onSubmit,
                isLoading,
            }}
        />
    )
}
