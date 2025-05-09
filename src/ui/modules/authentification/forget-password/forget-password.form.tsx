import { FormsType } from '@/src/types/forms';
import { Button } from '@/src/ui/design-system/button/Button';
import { Input } from '@/src/ui/design-system/forms/input'
import React from 'react'

interface Props {
  form: FormsType;
}

export const ForgetPasswordForm = ({ form }: Props) => {

  const { errors, isLoading, register, handleSubmit, onSubmit } = form;


  return (
    <form
      className="pt-8 pb-5 space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        id="email"
        placeholder="albert@gmail.com"
        type="email"
        isAutocompleted={false}
        isLoading={isLoading}
        errors={errors}
        errorMsg="L'email est requis !"
        register={register}
      />
      <Button isLoading={isLoading} type="submit" fullWith>
        Envoyer
      </Button>
    </form>
  )
}
