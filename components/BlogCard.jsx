// import Image from 'next/image';
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function BlogCard() {
    return (
        <Link style={{cursor:'pointer'}} href={'/blogpost/slug=1'}>
            <Center py={6}>
                <Box
                    maxW={'445px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    p={6}
                    overflow={'hidden'}>
                    <Box
                        h={'210px'}
                        bg={'gray.100'}
                        mt={-6}
                        mx={-6}
                        mb={6}
                        pos={'relative'}>
                        <img
                            alt=''
                            src=
                            '/blog.avif'

                        // layout={'fill'}
                        />
                    </Box>
                    <Stack>
                        <Text
                            color={'green.500'}
                            textTransform={'uppercase'}
                            fontWeight={800}
                            fontSize={'sm'}
                            letterSpacing={1.1}>
                            Blog
                        </Text>
                        <Heading
                            color={useColorModeValue('gray.700', 'white')}
                            fontSize={'2xl'}
                            fontFamily={'body'}>
                            Boost your conversion rate
                        </Heading>
                        <Text color={'gray.500'}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod...
                        </Text>
                    </Stack>
                    <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                        <Avatar
                            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                            alt={'Author'}
                        />
                        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                            <Text fontWeight={600}>Achim Rolle</Text>
                            <Text color={'gray.500'}>Feb 08, 2021 ?? 6min read</Text>
                        </Stack>
                    </Stack>
                </Box>
            </Center>
        </Link>

    );
}