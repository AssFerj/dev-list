
type UserType = {
  id: string;
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  foto?: string;
  banner?: string;
  age: number;
  description: string;
  stack: string[];
  hardSkills?: string[];
  softSkills?: string[];
};

export default UserType;
