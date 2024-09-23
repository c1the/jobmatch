import { Box, Text, VStack } from '@chakra-ui/react';
import { ResumeData } from '../types/resumeTypes';

interface ResumePreviewProps {
  resumeData: ResumeData;
  targetRef: React.RefObject<HTMLDivElement>;
}

export const ResumePreview: React.FC<ResumePreviewProps> = ({ resumeData, targetRef }) => {
  return (
    <Box ref={targetRef} mt={10} p={5} borderWidth={1} borderRadius="lg" width="100%">
      <VStack align="stretch" spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">{resumeData.name}</Text>
        <Text>{`${resumeData.address}, ${resumeData.city}, ${resumeData.state} ${resumeData.zip}`}</Text>
        <Text>{`${resumeData.email} • ${resumeData.phone}`}</Text>

        <Text fontWeight="bold" fontSize="xl">Education</Text>
        <Text>{resumeData.education.university}</Text>
        <Text>{`${resumeData.education.degree}${resumeData.education.gpa ? `, GPA: ${resumeData.education.gpa}` : ''}`}</Text>
        <Text>{resumeData.education.graduationDate}</Text>
        {resumeData.education.thesis && <Text>{`Thesis: ${resumeData.education.thesis}`}</Text>}
        {resumeData.education.relevantCoursework && <Text>{`Relevant Coursework: ${resumeData.education.relevantCoursework}`}</Text>}

        {resumeData.highSchool.name && (
          <>
            <Text fontWeight="bold" fontSize="xl">High School</Text>
            <Text>{`${resumeData.highSchool.name}, ${resumeData.highSchool.location}`}</Text>
            <Text>{resumeData.highSchool.graduationDate}</Text>
          </>
        )}

        <Text fontWeight="bold" fontSize="xl">Experience</Text>
        {resumeData.experience.map((exp, index) => (
          <Box key={index} mt={2}>
            <Text fontWeight="semibold">{exp.organization}</Text>
            <Text>{`${exp.position}, ${exp.location}`}</Text>
            <Text>{exp.dates}</Text>
            <Text>{exp.description}</Text>
          </Box>
        ))}

        <Text fontWeight="bold" fontSize="xl">Leadership and Activities</Text>
        {resumeData.activities.map((activity, index) => (
          <Box key={index} mt={2}>
            <Text fontWeight="semibold">{activity.organization}</Text>
            <Text>{`${activity.role}, ${activity.location}`}</Text>
            <Text>{activity.dates}</Text>
            {activity.description && <Text>{activity.description}</Text>}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};