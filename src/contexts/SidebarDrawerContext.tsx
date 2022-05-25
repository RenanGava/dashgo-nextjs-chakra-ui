import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
    children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export function SidebarDrawerProvider({children}:SidebarDrawerProviderProps){
    const disclosure = useDisclosure()
    const router = useRouter()

    // feach a sidebar sempre que a rota da aplicação mudar.
    useEffect(()=>{
        disclosure.onClose
    },[router.asPath])

    return(
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}


export const useSidebarDrawer = () => useContext(SidebarDrawerContext)