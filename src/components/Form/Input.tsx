import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;

}

const InputBase: ForwardRefRenderFunction<HTMLInputElement,
    InputProps> = ({ name, label, error = null, ...rest }, ref) => {
        return (
            <FormControl isInvalid={!!error}>
                {/* só vai mostrar caso o label exista. */}
                {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
                <ChakraInput
                    name={name}
                    id={name}
                    focusBorderColor='pink.500'  //cor da borda com foco
                    bgColor='gray.900'
                    variant='filled' //borda do foco do input
                    _hover={{ // para não mudar a cor de fundo quando passar o mouse por cima
                        bgColor: 'gray.900'
                    }}
                    size='lg' // o size é referente a altura
                    ref={ref} // referencia do react-hook-form
                    {...rest} // todas as propriedades restantes do input
                // passadas dinamicamente quando formos utilizalos
                />
                {
                    !!error && (
                        <FormErrorMessage>
                            { error.message }
                        </FormErrorMessage>
                    )
                }
            </FormControl>
        )
    }


export const Input = forwardRef(InputBase)