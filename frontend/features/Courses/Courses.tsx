'use client';
import { VStack, Spinner, Alert, AlertIcon } from '@chakra-ui/react';
import { useCourses } from '@/hooks/coursesHoook';
import { CourseSchema } from '@/features/Courses/schema';
import CourseCard from '@/components/common/CourseCard/CourseCard';

const Courses: React.FC = () => {
  const response = useCourses();
  const { data: coursesData, isLoading, isError } = response;

  // Loading State
  if (isLoading) {
    return (
      <VStack spacing={4}>
        <Spinner size="xl" />
        <div>Loading courses...</div>
      </VStack>
    );
  }

  // Error State
  if (isError || !coursesData) {
    return (
      <Alert status="error" borderRadius="lg">
        <AlertIcon />
        Error fetching courses.
      </Alert>
    );
  }

  // Extract courses from the response data
  const courses = coursesData.data;

  // Filter out invalid courses based on schema
  const validCourses = courses.filter(
    (course) => CourseSchema.safeParse(course).success,
  );

  // Empty State
  if (validCourses.length === 0) {
    return <div>No valid courses available.</div>;
  }

  return (
    <VStack spacing={4}>
      {validCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </VStack>
  );
};

export default Courses;
