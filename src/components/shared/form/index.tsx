import {
    FieldValues,
    FormProvider,
    UseFormProps,
    useForm,
} from 'react-hook-form'
import { PropsWithChildren } from 'react'
import { View, ViewProps } from 'react-native'

type FormProps<T extends FieldValues> = {
    formProps?: UseFormProps<T>
} & ViewProps & PropsWithChildren

export function Form<T extends FieldValues>({
    children,
    formProps,
    ...viewProps
}: FormProps<T>) {
    const methods = useForm<T>(formProps)

    return (
        <FormProvider {...methods}>
            <View {...viewProps}>
                {children}
            </View>
        </FormProvider>
    )
}

export { FormSubmit } from "./form-submit" 
export { FormField } from "./form-field" 
export { FormInput } from "./form-input" 
