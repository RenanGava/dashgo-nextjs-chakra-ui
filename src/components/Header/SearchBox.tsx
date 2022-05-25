import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef} from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {

    // const [search, setSearch] = useState("")

    // podemos tipar a ref para ele saber qual o tipo de elemento
    // está referenciando
    const searchInputRef = useRef<HTMLInputElement>(null)
    

    return (
        <Flex
            as='label'
            flex='1'
            py='4'
            px='8'
            ml='6'
            maxWidth={400}
            alignSelf='center'
            color='gray.200'
            position='relative'
            bgColor='gray.800'
            borderRadius='full'
        >
            <Input
                color='gray.50'
                variant='unstyled'
                px='4'
                mr='4'
                placeholder='buscar na plataforma'
                _placeholder={{ color: 'gray.400' }}
                ref={searchInputRef}
            />
            <Icon
                as={RiSearchLine}
                fontSize='20'
            />
        </Flex>
    )
}