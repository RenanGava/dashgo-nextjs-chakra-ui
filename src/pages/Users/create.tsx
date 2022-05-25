import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";


type  CreateUserFormData= {
    name: string;
    email: string;
    password: string
    password_confirmation: string
  }
  
  const CreateUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório!').email('E-mail inválido'),
    password: yup.string().required('Senha obrigatória!').min(6, 'No mínimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([
        null,
        yup.ref('password')
    ], 'As senhas precisam ser iguais')
  })


export default function CreateUser() {

    const {register, handleSubmit, formState} = useForm({
        resolver: yupResolver(CreateUserFormSchema)
    })

    const handleCreateUser:SubmitHandler<CreateUserFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000))

        console.log(values);
        
    }

    const error = formState.errors

    return (
        <Box>
            <Header />
            <Flex
                width='100%'
                maxWidth={1480}
                marginX='auto'
                px='6'
                mx='auto'
            >
                <Sidebar />

                <Box 
                    as='form' 
                    flex='1' 
                    borderRadius={8} 
                    bg='gray.800' 
                    p={['6', '8']}
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size='lg' fontWeight='normal'>Criar Usuario</Heading>
                    <Divider my='6' borderColor='gray.700' />

                    <VStack spacing='8'>
                        <SimpleGrid minChildWidth='240px' spacing={['6', '8']} width='100%'>
                            <Input 
                                name="name" 
                                label="Nome" 
                                error={error.name}
                                {...register('name')}
                            />
                            <Input 
                                name="email" 
                                type='email' 
                                label="E-mail"
                                error={error.email}
                                {...register('email')}
                            />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth='240px' spacing={['6', '8']} width='100%'>
                            <Input 
                                name="password" 
                                type='password' 
                                label="Senha" 
                                error={error.password} 
                                {...register('password')} />
                            <Input
                                name="password_confirmation"
                                type='password'
                                label="Confirmação da senha"
                                error={error.password_confirmation}
                                {...register('password')}
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Link href={'/Users'} passHref>
                                <Button as='a' colorScheme='whiteAlpha'>Cancelar</Button>
                            </Link>
                            
                            <Button 
                                type='submit' 
                                colorScheme='pink'
                                isLoading={formState.isSubmitting}
                            >Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}