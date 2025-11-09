export interface EducationItem {
  id: string;
  schoolType: string;
  schoolName: string;
  major: string;
  startDate: string;
  endDate: string;
  grade: string;
  maxGrade: string;
  status: string;
  majorType: string;
  thesis: string;
}

export interface ActivityItem {
  id: string;
  activityType: string;
  organization: string;
  startDate: string;
  endDate: string;
  employed: string;
  description: string;
  task: string;
}

export interface CareerItem {
  id: string;
  companyName: string;
  department: string;
  startDate: string;
  endDate: string;
  isCurrentlyWorking: boolean;
  position: string;
  role: string;
  salary: string;
  responsibilities: string;
}

export interface TrainingItem {
  id: string;
  courseName: string;
  institution: string;
  startDate: string;
  endDate: string;
  content: string;
}

export interface CertificateItem {
  id: string;
  certificateName: string;
  issuer: string;
  acquisitionDate: string;
}

export interface AwardItem {
  id: string;
  awardName: string;
  institution: string;
  awardYear: string;
  content: string;
}

export interface AbroadItem {
  id: string;
  country: string;
  startDate: string;
  endDate: string;
  content: string;
}
