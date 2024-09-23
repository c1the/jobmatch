import { ResumeData } from '../types/resumeTypes';
import { FormControl, FormLabel, Input, Textarea, VStack, Text, Box, Button, Heading } from '@chakra-ui/react';

interface ResumeFormProps {
    resumeData: ResumeData;
    handleInputChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      section?: keyof ResumeData,
      index?: number
    ) => void;
    handleAddItem: (section: 'experience' | 'activities') => void;
    handleRemoveItem: (section: 'experience' | 'activities', index: number) => void;
  }
  
  const ResumeForm: React.FC<ResumeFormProps> = ({ resumeData, handleInputChange, handleAddItem, handleRemoveItem }) => {
    const renderInputField = (label: string, name: string, value: string, section?: keyof ResumeData, index?: number) => (
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <Input 
          name={name} 
          value={value} 
          onChange={(e) => handleInputChange(e, section, index)} 
          required 
        />
      </FormControl>
    );
  
    return (
      <VStack spacing={8} align="stretch" width="90%">
        <Box>
          <Heading as="h3" size="lg" mb={2}>Personal Information</Heading>
          <Text fontSize="md" mb={4}>
            This section helps employers contact you. Make sure your information is up-to-date and professional.
          </Text>
          {renderInputField("Full Name", "name", resumeData.name)}
          {renderInputField("Street Address", "address", resumeData.address)}
          {renderInputField("City", "city", resumeData.city)}
          {renderInputField("State", "state", resumeData.state)}
          {renderInputField("Zip Code", "zip", resumeData.zip)}
          {renderInputField("Email", "email", resumeData.email)}
          {renderInputField("Phone", "phone", resumeData.phone)}
        </Box>
  
        <Box>
          <Heading as="h3" size="lg" mb={2}>Education</Heading>
          <Text fontSize="md" mb={4}>
            Highlight your educational achievements. This shows employers your academic background and qualifications.
          </Text>
          {renderInputField("University Name", "university", resumeData.education.university, "education")}
          {renderInputField("Degree and Concentration", "degree", resumeData.education.degree, "education")}
          {renderInputField("Graduation Date", "graduationDate", resumeData.education.graduationDate, "education")}
          {renderInputField("GPA (Optional)", "gpa", resumeData.education.gpa, "education")}
          {renderInputField("Thesis (Optional)", "thesis", resumeData.education.thesis, "education")}
          {renderInputField("Relevant Coursework (Optional)", "relevantCoursework", resumeData.education.relevantCoursework, "education")}
        </Box>
  
        <Box>
          <Heading as="h3" size="lg" mb={2}>High School</Heading>
          <Text fontSize="md" mb={4}>
            Include your high school information if you are a recent graduate or if it is relevant to the job.
          </Text>
          {renderInputField("High School Name", "name", resumeData.highSchool.name, "highSchool")}
          {renderInputField("Location (City, State)", "location", resumeData.highSchool.location, "highSchool")}
          {renderInputField("Graduation Date", "graduationDate", resumeData.highSchool.graduationDate, "highSchool")}
        </Box>
  
        <Box>
          <Heading as="h3" size="lg" mb={2}>Experience</Heading>
          <Text fontSize="md" mb={4}>
            List your work experiences, starting with the most recent. This shows employers your practical skills and work history.
          </Text>
          {resumeData.experience.map((exp, index) => (
            <Box key={index} borderWidth={1} borderRadius="lg" p={5} mb={4}>
              {renderInputField("Organization", "organization", exp.organization, "experience", index)}
              {renderInputField("Position Title", "position", exp.position, "experience", index)}
              {renderInputField("Location (City, State)", "location", exp.location, "experience", index)}
              {renderInputField("Dates", "dates", exp.dates, "experience", index)}
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea 
                  name="description" 
                  value={exp.description} 
                  onChange={(e) => handleInputChange(e, "experience", index)} 
                  required 
                />
              </FormControl>
              <Button mt={2} onClick={() => handleRemoveItem("experience", index)}>Remove Experience</Button>
            </Box>
          ))}
          <Button onClick={() => handleAddItem("experience")}>Add Experience</Button>
        </Box>
  
        <Box>
          <Heading as="h3" size="lg" mb={2}>Leadership and Activities</Heading>
          <Text fontSize="md" mb={4}>
            Include relevant extracurricular activities and leadership roles. This section showcases your skills beyond work and academics.
          </Text>
          {resumeData.activities.map((activity, index) => (
            <Box key={index} borderWidth={1} borderRadius="lg" p={5} mb={4}>
              {renderInputField("Organization", "organization", activity.organization, "activities", index)}
              {renderInputField("Role", "role", activity.role, "activities", index)}
              {renderInputField("Location (City, State)", "location", activity.location, "activities", index)}
              {renderInputField("Dates", "dates", activity.dates, "activities", index)}
              <FormControl>
                <FormLabel>Description (Optional)</FormLabel>
                <Textarea 
                  name="description" 
                  value={activity.description} 
                  onChange={(e) => handleInputChange(e, "activities", index)} 
                />
              </FormControl>
              <Button mt={2} onClick={() => handleRemoveItem("activities", index)}>Remove Activity</Button>
            </Box>
          ))}
          <Button onClick={() => handleAddItem("activities")}>Add Activity</Button>
        </Box>
      </VStack>
    );
  };
  
  export default ResumeForm;