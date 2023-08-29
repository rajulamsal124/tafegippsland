import React from 'react';
import { Box, Text, Heading, VStack } from '@chakra-ui/react';
import { CourseCardProps } from '@/types/course/course'; // Replace 'your-path-to-type' with the actual path

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const {
    Title,
    description,
    Duration,
    prerequisties,
    createdAt,
    updatedAt,
    publishedAt,
  } = course.attributes;

  return (
    <Box borderWidth="1px" borderRadius="lg" padding="4" width="full">
      <VStack align="start" spacing={2}>
        <Heading size="md">{Title}</Heading>
        <Text fontSize="sm">Duration: {Duration} hours</Text>
        <Text>{description}</Text>
        <Text fontSize="sm">Prerequisites: {prerequisties}</Text>
        <Text fontSize="xs">
          Created At: {new Date(createdAt).toLocaleDateString()}
        </Text>
        <Text fontSize="xs">
          Updated At: {new Date(updatedAt).toLocaleDateString()}
        </Text>
        <Text fontSize="xs">
          Published At: {new Date(publishedAt).toLocaleDateString()}
        </Text>
      </VStack>
    </Box>
  );
};

export default CourseCard;
