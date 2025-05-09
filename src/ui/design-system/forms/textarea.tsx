import clsx from "clsx";
import { Typography } from "../typography/Typography";

interface Props {
    isLoading: boolean;
    placeholder: string;
    rows?: number;
    register: any;
    errors: any;
    errorMsg: string;
    id: string;
    required?: boolean;
    isAutocompleted?: boolean;
    label?: string
}

export const Textarea = ({
    isLoading,
    placeholder,
    rows = 5,
    register,
    errors,
    errorMsg,
    id,
    required = true,
    isAutocompleted = false,
    label }: Props) => {
    return (
        <div className="space-y-2">
            {
                label && (
                    <Typography variant="caption4" component="div" theme={errors[id] ? "danger" : "gray-600"}>
                        {label}
                    </Typography>
                )
            }
            <textarea
                rows={rows}
                placeholder={placeholder}
                className={clsx(isLoading ? "bg-gray-300 focus:ring-gray-300 cursor-not-allowed" : "bg-white", errors[id] ? "placeholder-alert-danger text-alert-danger" : "placeholder-gray-600", "w-full p-3 font-light border border-gray-500 rounded focus:outline-none focus:ring-1 focus:ring-primary placeholder-gray-600")}
                disabled={isLoading}
                {...register(id, {
                    required: { value: required, message: errorMsg },
                })}
                autoComplete={isAutocompleted ? "on" : "off"}
            />
            {
                errors[id] && (
                    <Typography variant="caption4" component="div" theme="danger">
                        {errors[id]?.message}
                    </Typography>
                )
            }
        </div>
    )
}
