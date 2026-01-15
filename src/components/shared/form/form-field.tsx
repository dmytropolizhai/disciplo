import { createContext, PropsWithChildren, useContext } from 'react'
import { View } from 'react-native'
import { useFormContext } from 'react-hook-form'
import { Label } from '@/components/ui/label'
import { Text } from '@/components/ui/text'

type FieldContextType = {
    id: string
}

const FieldContext = createContext<FieldContextType | null>(null)

export const useField = () => {
    const ctx = useContext(FieldContext)
    if (!ctx) {
        throw new Error('FormInput must be inside FormField')
    }
    return ctx
}

type FormFieldProps = {
    id: string
    label?: string
} & PropsWithChildren

export function FormField({
    id,
    label,
    children,
}: FormFieldProps) {
    const {
        formState: { errors },
    } = useFormContext()

    const error = errors[id as keyof typeof errors]

    return (
        <FieldContext.Provider value={{ id }}>
            <View className="w-full gap-2">
                {label && (
                    <Label nativeID={id}>
                        {label}
                    </Label>
                )}

                {children}

                {error?.message && (
                    <Text className="text-red-500">
                        {String(error.message)}
                    </Text>
                )}
            </View>
        </FieldContext.Provider>
    )
}

