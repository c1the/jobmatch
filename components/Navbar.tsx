'use client'

import { Box, Flex, Text, Button, Stack, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        justify={'space-between'}
      >
        <Text
          fontFamily={'heading'}
          color={useColorModeValue('gray.800', 'white')}
          fontWeight={'bold'}
          fontSize={'xl'}
        >
          CareersForAll
        </Text>

        <Stack direction={'row'} spacing={6} alignItems="center">
          <Link href="/signin" passHref>
            <Button fontSize={'sm'} fontWeight={600} variant={'link'}>
              Sign In
            </Button>
          </Link>
          <Link href="/signup" passHref>
            <Button
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'blue.400'}
              _hover={{ bg: 'blue.300' }}
            >
              Sign Up
            </Button>
          </Link>
        </Stack>
      </Flex>
    </Box>
  )
}
