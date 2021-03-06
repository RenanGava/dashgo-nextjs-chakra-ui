import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean
}

export function Profile({ showProfileData = false }: ProfileProps) {
    return (
        <Flex
            align='center'
        >
            {showProfileData &&
                <Box
                    mr='4'
                    textAlign='right'
                >
                    <Text >Renan Dellecrode</Text>
                    <Text color='gray.300' fontSize='small'>
                        renandellecrodegava7040@gmail.com
                    </Text>
                </Box>
            }
            <Avatar size='md' name='Renan Dellecrode' src='https://github.com/RenanGava.png' />
        </Flex>
    )
}