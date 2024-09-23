import { Box, Container, Heading, Text, Button, VStack, HStack, Image } from '@chakra-ui/react'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <Box>
      <Navbar />
      <VStack spacing={8} align="stretch" >
        <Box position="relative" height="700px">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="People working"
            objectFit="cover"
            width="100%"
            height="100%"
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="rgba(0,0,0,0.6)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            px={12}
          >
            <VStack spacing={4} textAlign="center" color="white">
              <Heading as="h2" size="2xl">Connecting Your Unique Talents to Meaningful Opportunities</Heading>
              <Text fontSize="xl">Unlock your potential and discover job opportunities specifically designed for individuals 
                with special needs.</Text>
              <HStack spacing={4}>
                  <Button as="a" href="/signin" colorScheme="blue" size="lg">Sign In</Button>
                  <Button as="a" href="/signup" colorScheme="green" size="lg">Sign Up</Button>
              </HStack>
            </VStack>
          </Box>
        </Box>

        <Container maxW="container.xl" py={10}>
          <VStack spacing={8} align="stretch">
            <HStack spacing={8} justify="center">
              <VStack>
                <Box boxSize="100px" bg="blue.500" borderRadius="full" />
                <Text fontWeight="bold">Create an application</Text>
                <Text textAlign="center">Showcase your skills and experience with our resume creator</Text>
              </VStack>
              <VStack>
                <Box boxSize="100px" bg="green.500" borderRadius="full" />
                <Text fontWeight="bold">Browse Jobs</Text>
                <Text textAlign="center">Find opportunities that match your abilities</Text>
              </VStack>
              <VStack>
                <Box boxSize="100px" bg="purple.500" borderRadius="full" />
                <Text fontWeight="bold">Apply</Text>
                <Text textAlign="center">Follow our guide to find employers that value you!</Text>
              </VStack>
            </HStack>
          </VStack>
        </Container>
      </VStack>
    </Box>
  )
}