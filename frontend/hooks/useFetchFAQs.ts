// hooks/useFetchFAQs.ts
import { useEffect, useState } from 'react';
import axios from 'axios';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const useFetchFAQs = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await axios.get<any>('http://localhost:3500/api/faqs'); // Use 'any' type for response
        const faqData = response.data.data; // Extract the 'data' array from the response
        console.log('API Response:', faqData); // Log the extracted data
        setFaqs(faqData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  return { faqs, loading };
};

export default useFetchFAQs;
