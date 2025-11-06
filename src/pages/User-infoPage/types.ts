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
