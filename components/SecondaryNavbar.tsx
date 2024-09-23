'use client'

import { Box, Flex, Avatar, Menu, MenuButton, MenuList, MenuItem, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { auth } from '../lib/firebase'
import { signOut } from 'firebase/auth'

export default function SecondaryNavbar() {
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      router.push('/')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <Box>
      <Flex
        bg={useColorModeValue('gray.700', 'gray.700')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'50px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}
        justify={'flex-end'}
      >

        <Menu>
          <MenuButton
            as={Avatar}
            size={'sm'}
            cursor={'pointer'}
            color={'blue'}
          />

          <MenuList>
            <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  )
}