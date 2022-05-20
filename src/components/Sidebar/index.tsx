import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
    return (
        <Box as='aside' width='64' mr='8'>
            <Stack
                spacing='12'
                align='flex-start'
            >
                <NavSection title="GERAL">
                    <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
                    <NavLink icon={RiDashboardLine}>Usuários</NavLink>
                </NavSection>
                <NavSection title="AUTOMAÇÃO">
                    <NavLink icon={RiDashboardLine}>Formulários</NavLink>
                    <NavLink icon={RiDashboardLine}>Automação</NavLink>
                </NavSection>
            </Stack>
        </Box>
    )
}