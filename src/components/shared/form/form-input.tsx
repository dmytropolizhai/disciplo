import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'
import { Input, InputProps } from '@/components/ui/input'
import { useField } from './form-field'

type FormInputProps = {
    rules?: RegisterOptions
} & InputProps

export function FormInput({ rules, ...props }: FormInputProps) {
    const { control } = useFormContext()
    const { id } = useField()

    return (
        <Controller
            name={id}
            control={control}
            rules={rules}
            render={({ field }) => (
                <Input
                    {...props}
                    value={field.value}
                    onChangeText={field.onChange}
                    onBlur={field.onBlur}
                />
            )}
        />
    )
}

