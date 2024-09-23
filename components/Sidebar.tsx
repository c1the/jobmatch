'use client'

import { VStack, Box, Button, Text, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { FiFileText, FiSearch, FiClipboard, FiHome } from 'react-icons/fi'

const Sidebar = () => {
  const menuItems = [
    { title: 'Home', href: '/home', icon: FiHome },
    { title: 'Resume Builder', href: '/resume-builder', icon: FiFileText },
    { title: 'Job Matching', href: '/job-matching', icon: FiSearch },
    { title: 'Job Application Guide', href: '/job-application-guide', icon: FiClipboard },
  ]

  return (
    <Box 
      w="250px" 
      bg={useColorModeValue('gray.50', 'gray.800')} 
      p={5} 
      height="100vh" 
      borderRightWidth="1px" 
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" mb={16} as='a' href='/home' >
      CareersForAll
      </Text>
      <VStack spacing={4} align="stretch" mt={5}>
        {menuItems.map((item, index) => (
          // eslint-disable-next-line react-hooks/rules-of-hooks
          <Box key={index} borderWidth={1} borderRadius="lg" p={3} bg={useColorModeValue('gray.100', 'gray.700')}>
            <Link href={item.href} passHref>
              <Button as="a" width="100%" leftIcon={<item.icon />} >
                {item.title}
              </Button>
            </Link>
          </Box>
        ))}
      </VStack>
    </Box>
  )
}

export default Sidebar
