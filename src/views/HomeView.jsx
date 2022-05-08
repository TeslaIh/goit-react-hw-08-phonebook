import React from "react";
import {Box,Flex, Container, Heading, Image} from '@chakra-ui/react';
import defaultImg from 'components/Img/icon-avatar.gif'

export default function HomeView(){
    return(
        <Container maxW='container.lg'>
            <Box py='3'>
                <Flex alignItems='center' flexDirection='column' >
                    <Heading
                        size='xl'
                        bgGradient='linear(to-t, yellow, blue)'
                        bgClip='text'
                        fontSize='6xl'
                        fontWeight='extrabold'>
                        MY PHONEBOOK
                    </Heading>
                <Image src={defaultImg} boxSize='300px' my="50"></Image>
                </Flex>
            </Box>
           </Container>
    )
}