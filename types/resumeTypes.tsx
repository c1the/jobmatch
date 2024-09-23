export interface ResumeData {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    email: string;
    phone: string;
    education: {
      university: string;
      degree: string;
      graduationDate: string;
      gpa: string;
      thesis: string;
      relevantCoursework: string;
    };
    highSchool: {
      name: string;
      location: string;
      graduationDate: string;
    };
    experience: Array<{
      organization: string;
      position: string;
      location: string;
      dates: string;
      description: string;
    }>;
    activities: Array<{
      organization: string;
      role: string;
      location: string;
      dates: string;
      description: string;
    }>;
  }