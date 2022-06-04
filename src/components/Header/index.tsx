import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'

import { Profile } from './Profile'
import { SearchBox } from './SearchBox'
import { NotificationsNav } from './NotificationsNav'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { Logo } from './Logo'
import { RiMenuLine } from 'react-icons/ri'
import { useEffect, useState } from 'react'

// Stack é vertical
// HStack é horizontal

export function Header(){

    const { onOpen } = useSidebarDrawer()

    const WideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    const [isWideVersion, setIsWideVersion] = useState(true)

    useEffect(()=>{
        setIsWideVersion(WideVersion)
    },[WideVersion])

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
            { !isWideVersion && (
                <IconButton
                aria-label='Open Navigation'
                icon={<Icon as={RiMenuLine}/>}
                fontSize='24'
                variant='unstyled'
                onClick={onOpen}
                mr='2'>

                </IconButton>
            )}

            <Logo/>
            {isWideVersion && <SearchBox/>}

            <Flex
                align='center'
                ml='auto'
            >
                <NotificationsNav/>
                <Profile showProfileData={isWideVersion}/>
            </Flex>
        </Flex>
    )
}