import { Box, Stack, useBreakpointValue, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { SidebarNav } from "./SidebarNav";

export function Sidebar() {

    const {isOpen, onClose} = useSidebarDrawer()

    const DrawerSidebar = useBreakpointValue({
        base: true,
        lg: false,
    })

    const [isDrawerSidebar, setIsDrawerSidebar] = useState(true)

    useEffect(()=>{
        setIsDrawerSidebar(DrawerSidebar)
    },[DrawerSidebar])

    if (isDrawerSidebar) {
        return (
            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg='gray.800' p='4'>

                        <DrawerCloseButton mt='6' />

                        <DrawerHeader>Navegação</DrawerHeader>

                        <DrawerBody>
                            <SidebarNav />
                        </DrawerBody>

                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }

    return (
        <Box as='aside' width='64' mr='8'>
            <Stack
                spacing='12'
                align='flex-start'
            >
                <SidebarNav />
            </Stack>
        </Box>
    )
}