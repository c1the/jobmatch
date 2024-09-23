'use client';

import { Box, Container, Heading, SimpleGrid, Text, VStack, Image, Grid } from '@chakra-ui/react';
import Link from 'next/link';
import SecondaryNavbar from '../../components/SecondaryNavbar';
import Sidebar from '../../components/Sidebar';

const jobTypes = [
  {
    title: 'Landscaping',
    description: 'Best suited for individuals who enjoy working outdoors, have physical stamina, and appreciate nature. Ideal for those who like hands-on work and seeing tangible results of their efforts.',
    imageUrl: 'https://images.unsplash.com/photo-1683316924890-6a8c5ab10d29?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Fast Food',
    description: 'Suitable for people with good customer service skills, ability to work in a fast-paced environment, and those who can handle multitasking. Great for individuals seeking flexible hours and entry-level positions.',
    imageUrl: 'https://images.unsplash.com/photo-1541557435984-1c79685a082b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Retail',
    description: 'Ideal for those who enjoy interacting with people, have good communication skills, and can work in a customer-focused environment. Suits individuals who are comfortable with sales and have an interest in products or fashion.',
    imageUrl: 'https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Office Administration',
    description: 'Best for individuals with strong organizational skills, attention to detail, and proficiency in computer applications. Suits those who prefer a structured work environment and have good interpersonal skills.',
    imageUrl: 'https://images.unsplash.com/photo-1560264418-c4445382edbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlJTIwY3ViaWNsZXxlbnwwfHwwfHx8Mg%3D%3D',
  },
  {
    title: 'Warehouse',
    description: 'Suitable for people who are physically fit, can lift heavy items, and are comfortable with repetitive tasks. Ideal for those who prefer a more active job and can work well in a team.',
    imageUrl: 'https://images.unsplash.com/photo-1664382953403-fc1ac77073a0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Delivery Driver',
    description: 'Best for individuals who enjoy driving, have good time management skills, and are comfortable working independently. Suits those who like a change of scenery and interacting with customers briefly.',
    imageUrl: 'https://images.unsplash.com/photo-1551825687-f9de1603ed8b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const JobMatching = () => {
  return (
    <Box>
      <SecondaryNavbar />
      <Grid templateColumns="250px 1fr">
        <Sidebar />
        <Container maxW="container.xl" py={10} pl={8} pr={8} >
          <VStack spacing={8} align="stretch">
            <Heading as="h1" size="xl">Job Type Matching</Heading>
            <Text fontSize="lg">
              Explore different job types to find the best match for your skills and interests. 
              Each job type below includes information on who would be best suited for that role.
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
              {jobTypes.map((job, index) => (
                <Box key={index} borderWidth={1} borderRadius="lg" p={5} boxShadow="md">
                  <Image 
                    src={job.imageUrl} 
                    alt={job.title} 
                    width="100%" 
                    height="200px" 
                    borderTopRadius="lg"
                    borderBottomRadius="lg"
                    objectFit="cover" 
                  />
                  <Heading as="h3" size="lg" mb={3}>{job.title}</Heading>
                  <Text>{job.description}</Text>
                </Box>
              ))}
            </SimpleGrid>
            <Box mt={8}>
              <Text fontSize="lg">
                Once you have identified job types that interest you, use our{' '}
                <Link href="/resume-builder" passHref>
                  <Text as="span" color="blue.500" textDecoration="underline">
                    Resume Builder
                  </Text>
                </Link>{' '}
                to create a tailored resume for your chosen field. Then, check out our{' '}
                <Link href="/job-application-guide" passHref>
                  <Text as="span" color="blue.500" textDecoration="underline">
                    Job Application Guide
                  </Text>
                </Link>{' '}
                for tips on how to successfully apply for these positions.
              </Text>
            </Box>
          </VStack>
        </Container>
      </Grid>
    </Box>
  );
};

export default JobMatching;