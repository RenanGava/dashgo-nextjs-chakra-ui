import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;

}

export function Input({name, label, ...rest}: InputProps) {
    return (
        <FormControl>
            {/* só vai mostrar caso o label exista. */}
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
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
                {...rest} // todas as propriedades restantes do input
                          // passadas dinamicamente quando formos utilizalos
            />
        </FormControl>
    )
}