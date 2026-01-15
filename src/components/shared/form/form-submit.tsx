import { ButtonProps } from '@/components/ui/button'
import { cloneElement, ReactElement, isValidElement } from 'react'
import {
    FieldValues,
    SubmitErrorHandler,
    SubmitHandler,
    useFormContext,
} from 'react-hook-form'

type FormSubmitProps<T extends FieldValues> = Omit<ButtonProps, 'onPress'> & {
    onSubmit: SubmitHandler<T>
    onError?: SubmitErrorHandler<T>
    children: ReactElement<ButtonProps>
}

/*
 * Handles form submit. Only Buttons are allowed!
*/
export function FormSubmit<T extends FieldValues>({
    onSubmit,
    onError,
    children,
    ...props
}: FormSubmitProps<T>) {
    const { handleSubmit } = useFormContext<T>()
    
    if (!isValidElement(children)) {
        return null
    }

    // Clone element to pass submit onPress
    return cloneElement(children, {
        ...props,
        onPress: handleSubmit(onSubmit, onError),
    })
}
