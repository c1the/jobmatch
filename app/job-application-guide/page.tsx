/* eslint-disable react/no-unescaped-entities */
'use client';

import { Box, Container, VStack, Heading, Text, UnorderedList, ListItem, Link as ChakraLink, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import SecondaryNavbar from '../../components/SecondaryNavbar';
import Sidebar from '../../components/Sidebar';

const JobApplicationGuide = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const GuideSection = ({ title, children }) => (
    <Box bg={bgColor} p={6} borderRadius="md" borderWidth={1} borderColor={borderColor} mb={6}>
      <Heading as="h2" size="xl" mb={4}>{title}</Heading>
      {children}
    </Box>
  );

  return (
    <Box>
      <SecondaryNavbar />
      <Box display="flex">
        <Sidebar />
        <Container maxW="container.xl" py={10} pl={8}>
          <VStack spacing={8} align="stretch">
            <Heading as="h1" size="2xl" mb={6}>Job Application Guide</Heading>
            
            <GuideSection title="1. Create a Strong Resume">
              <Text mb={4}>
                Your resume is your first impression on potential employers. Use our{' '}
                <Link href="/resume-builder" passHref>
                  <ChakraLink color="blue.500">Resume Builder</ChakraLink>
                </Link>{' '}
                to create a professional and tailored resume that highlights your skills and experiences.
              </Text>
              <UnorderedList spacing={2}>
                <ListItem>Tailor your resume for each job application</ListItem>
                <ListItem>Use clear, concise language and bullet points</ListItem>
                <ListItem>Highlight your achievements and quantify results when possible</ListItem>
                <ListItem>Proofread carefully for any errors or typos</ListItem>
              </UnorderedList>
            </GuideSection>

            <GuideSection title="2. Find Suitable Job Opportunities">
              <Text mb={4}>
                Use our{' '}
                <Link href="/job-matching" passHref>
                  <ChakraLink color="blue.500">Job Matching</ChakraLink>
                </Link>{' '}
                feature to discover job opportunities that align with your skills and interests.
              </Text>
              <UnorderedList spacing={2}>
                <ListItem>Research companies and positions that interest you</ListItem>
                <ListItem>Set up job alerts on various job boards</ListItem>
                <ListItem>Network with professionals in your desired field</ListItem>
                <ListItem>Consider internships or entry-level positions to gain experience</ListItem>
              </UnorderedList>
            </GuideSection>

            <GuideSection title="3. Prepare Your Application">
              <Text mb={4}>
                Once you've found a job you're interested in, it's time to prepare your application.
              </Text>
              <UnorderedList spacing={2}>
                <ListItem>Carefully read the job description and requirements</ListItem>
                <ListItem>Customize your resume to highlight relevant skills and experiences</ListItem>
                <ListItem>Write a compelling cover letter (if required)</ListItem>
                <ListItem>Gather any additional documents or portfolio items requested</ListItem>
              </UnorderedList>
            </GuideSection>

            <GuideSection title="4. Submit Your Application">
              <Text mb={4}>
                Follow the application instructions carefully when submitting your application.
              </Text>
              <UnorderedList spacing={2}>
                <ListItem>Double-check all your documents for accuracy</ListItem>
                <ListItem>Submit your application before the deadline</ListItem>
                <ListItem>If possible, find a contact at the company and follow up on your application</ListItem>
                <ListItem>Keep track of the jobs you've applied to and their status</ListItem>
              </UnorderedList>
            </GuideSection>

            <GuideSection title="5. Prepare for Interviews">
              <Text mb={4}>
                If your application is successful, you may be invited for an interview.
              </Text>
              <UnorderedList spacing={2}>
                <ListItem>Research the company thoroughly</ListItem>
                <ListItem>Practice common interview questions</ListItem>
                <ListItem>Prepare questions to ask the interviewer</ListItem>
                <ListItem>Dress appropriately and arrive on time (or log in early for virtual interviews)</ListItem>
              </UnorderedList>
            </GuideSection>

            <GuideSection title="6. Follow Up">
              <Text mb={4}>
                After your interview, it's important to follow up.
              </Text>
              <UnorderedList spacing={2}>
                <ListItem>Send a thank-you note or email within 24 hours of your interview</ListItem>
                <ListItem>Reiterate your interest in the position</ListItem>
                <ListItem>If you don't hear back within the specified timeframe, follow up politely</ListItem>
                <ListItem>Be patient and continue your job search while waiting for responses</ListItem>
              </UnorderedList>
            </GuideSection>

            <Text fontSize="lg" fontWeight="bold">
              Remember, job searching can take time and persistence. Stay positive and keep refining your approach. Good luck with your job applications!
            </Text>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default JobApplicationGuide;