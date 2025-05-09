import { FormsType } from "@/src/types/forms";
import { Button } from "@/src/ui/design-system/button/Button";
import { Input } from "@/src/ui/design-system/forms/input";

interface Props {
  form: FormsType;
}

export const RegisterForm = ({ form }: Props) => {
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
      <Input
        id="password"
        placeholder="Mot de passe"
        type="password"
        isAutocompleted={false}
        isLoading={isLoading}
        errors={errors}
        errorMsg="Mot de passe est requis !"
        register={register}
      />
      <Input
        id="how_did_hear"
        placeholder="Comment nous avez-vous connu ?"
        isAutocompleted={false}
        isLoading={isLoading}
        errors={errors}
        errorMsg="Champ est requis !"
        register={register}
      />
      <Button isLoading={isLoading} type="submit" fullWith>
        S'incrire
      </Button>
    </form>
  );
};
