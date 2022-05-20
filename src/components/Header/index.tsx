import { Flex } from '@chakra-ui/react'

import { Profile } from './Profile'
import { SearchBox } from './SearchBox'
import { NotificationsNav } from './NotificationsNav'

// Stack é vertical
// HStack é horizontal

export function Header(){
    return(
        <Flex 
            as='header' 
            w='100%' 
            maxWidth={1480} 
            h='20'
            marginX='auto'
            marginTop='4'
            align='center'
            px='6'
        >
            <SearchBox/>

            <Flex
                align='center'
                ml='auto'
            >
                <NotificationsNav/>
                <Profile/>
            </Flex>
        </Flex>
    )
}