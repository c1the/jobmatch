'use client';

import { useState } from 'react';
import { Box, Button, Container, VStack, Grid, useToast, Heading, Text } from '@chakra-ui/react';
import { usePDF } from 'react-to-pdf';
import SecondaryNavbar from '../../components/SecondaryNavbar';
import Sidebar from '../../components/Sidebar';
import ResumeForm from '../../components/ResumeForm';
import {ResumePreview } from '../../components/ResumePreview';
import { ResumeData } from '../../types/resumeTypes';

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState<ResumeData>({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    phone: '',
    education: {
      university: '',
      degree: '',
      graduationDate: '',
      gpa: '',
      thesis: '',
      relevantCoursework: ''
    },
    highSchool: {
      name: '',
      location: '',
      graduationDate: ''
    },
    experience: [
      {
        organization: '',
        position: '',
        location: '',
        dates: '',
        description: ''
      }
    ],
    activities: [
      {
        organization: '',
        role: '',
        location: '',
        dates: '',
        description: ''
      }
    ]
  });

  const { toPDF, targetRef } = usePDF({filename: 'resume.pdf'});
  const toast = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section?: keyof ResumeData,
    index?: number
  ) => {
    const { name, value } = e.target;
    setResumeData(prev => {
      if (section) {
        if (Array.isArray(prev[section])) {
          const newArray = [...prev[section] as Array<Record<string, string>>];
          newArray[index as number] = { ...newArray[index as number], [name]: value };
          return { ...prev, [section]: newArray };
        } else {
          return { 
            ...prev, 
            [section]: { ...(prev[section] as Record<string, string>), [name]: value } 
          };
        }
      } else {
        return { ...prev, [name]: value };
      }
    });
  };

  const handleAddItem = (section: 'experience' | 'activities') => {
    setResumeData(prev => ({
      ...prev,
      [section]: [...prev[section], {
        organization: '',
        position: '',
        location: '',
        dates: '',
        description: ''
      }]
    }));
  };

  const handleRemoveItem = (section: 'experience' | 'activities', index: number) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  const handleGeneratePDF = () => {
    toPDF();
    toast({
      title: 'PDF Generated',
      description: 'Your resume PDF has been generated successfully.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <SecondaryNavbar />
      <Grid templateColumns="250px 1fr">
        <Sidebar />
        <Container maxW="container.xl" py={10}>
          <VStack spacing={8} align="stretch">
            <Box>
              <Heading as="h1" size="xl" mb={4}>Resume Builder</Heading>
              <Text fontSize="lg" mb={4}>
                A resume is a document that summarizes your skills, experiences, and qualifications for people you want to work for. 
          
              </Text>
            </Box>
            <ResumeForm 
              resumeData={resumeData}
              handleInputChange={handleInputChange}
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem}
            />
            <Button onClick={handleGeneratePDF} colorScheme="blue" size="lg">Generate PDF Resume</Button>
          </VStack>
          <Box mt={10}>
            <Heading as="h2" size="lg" mb={4}>Resume Preview</Heading>
            <Text fontSize="md" mb={4}>
              This is how your resume will look when generated as a PDF. Make sure all the information is correct and formatted properly.
            </Text>
            <ResumePreview resumeData={resumeData} targetRef={targetRef} />
          </Box>
        </Container>
      </Grid>
    </Box>
  );
};

export default ResumeBuilder;