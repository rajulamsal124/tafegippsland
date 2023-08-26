// components/Faq.tsx
import { Box, Heading, VStack } from "@chakra-ui/react";
import useFetchFAQs from "@/hooks/useFetchFAQs";
import FaqDetails from "./FaqDetails";

const Faq = () => {
  const { faqs } = useFetchFAQs();

  return (
    <Box p={4} width="100%" maxWidth="800px">
      <VStack spacing={4}>
        {" "}
        {/* Align center */}
        <Heading as="h1" mb={4}>
          Frequently Asked Questions
        </Heading>
        {faqs.map((faq: any) => (
          <FaqDetails key={faq.id} faq={faq.attributes} />
        ))}
      </VStack>
    </Box>
  );
};

export default Faq;
