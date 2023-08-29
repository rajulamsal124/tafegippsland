import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Course } from '@/types/course/course';
const fetchCourses = async (): Promise<Course[]> => {
  const { data } = await axios.get('http://localhost:3500/api/courses');
  return data;
};
export const useCourses = () => {
  return useQuery(['courses'], fetchCourses);
};
