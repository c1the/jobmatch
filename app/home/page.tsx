'use client';

import { Box, Container, Heading, SimpleGrid, Text, Button, Grid, Image } from '@chakra-ui/react';
import Link from 'next/link';
import SecondaryNavbar from '../../components/SecondaryNavbar';
import Sidebar from '../../components/Sidebar'; 

const Home = () => {
  return (
    <Box bg ={'gray.100'}>
      <SecondaryNavbar />
      <Grid templateColumns="250px 1fr">
        <Sidebar />
        <Container maxW="container.xl" py={10} bg='gray.100'>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box borderWidth={1} borderRadius="lg" p={5} bg='gray.200'>
            <Image 
                    src= 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt= "ResumeImage"
                    width="100%" 
                    height="200px" 
                    borderTopRadius="lg"
                    borderBottomRadius="lg"
                    objectFit="cover" 
                  />
              <Heading as="h3" size="lg" mb={3}>Resume Builder</Heading>
              <Text mb={3}>Create a professional resume tailored to your skills and experience.</Text>
              <Link href="/resume-builder" passHref>
                <Button as="a" colorScheme="blue">Get Started</Button>
              </Link>
            </Box>
            <Box borderWidth={1} borderRadius="lg" p={5} bg='gray.200'>
            <Image 
                    src= 'https://images.unsplash.com/photo-1476231790875-016a80c274f3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt= "ResumeImage"
                    width="100%" 
                    height="200px" 
                    borderTopRadius="lg"
                    borderBottomRadius="lg"
                    objectFit="cover" 
                  />
              <Heading as="h3" size="lg" mb={3}>Job Matching</Heading>
              <Text mb={3}>Explore different job types and find the best fit for your skills and interests.</Text>
              <Link href="/job-matching" passHref>
                <Button as="a" colorScheme="purple">Explore Jobs</Button>
              </Link>
            </Box>
            <Box borderWidth={1} borderRadius="lg" p={5} bg='gray.200'>
            <Image 
                    src= 'https://images.unsplash.com/photo-1598870783714-7db1e192e047?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt= "ResumeImage"
                    width="100%" 
                    height="200px" 
                    borderTopRadius="lg"
                    borderBottomRadius="lg"
                    objectFit="cover" 
                  />
              <Heading as="h3" size="lg" mb={3}>Job Application Guide</Heading>
              <Text mb={3}>Get tips and strategies for successfully applying to jobs.</Text>
              <Link href="/job-application-guide" passHref>
                <Button as="a" colorScheme="teal">Read Guide</Button>
              </Link>
            </Box>
          </SimpleGrid>
        </Container>
      </Grid>
    </Box>
  );
};

export default Home;