// components/FaqDetails.tsx
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Container,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface FaqDetailsProps {
  faq: FAQ;
}

const FaqDetails: React.FC<FaqDetailsProps> = ({ faq }) => {
  return (
    <Container mx="auto" textAlign="center">
      <Accordion allowMultiple width="100%" maxW="lg" bg="white" rounded="lg">
        <AccordionItem>
          <AccordionButton
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={4}
            _hover={{ bg: "gray.100" }}
          >
            <Text fontSize="md" color="gray.800">
              {faq.question}
            </Text>
            <ChevronDownIcon fontSize="24px" />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text color="gray.600">{faq.answer}</Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default FaqDetails;
