export type JobCard = {
  id: number;
  icon: string;
  time: number;
  isFullTime: boolean;
  company: string;
  jobTitle: string;
  locations: string[];
}