import { useState, useEffect } from 'react';
import axios from 'axios';
interface SocialLink {
  id: number;
  platform: string;
  link: string;
  icon: string;
}

const API_URL = 'http://localhost:3500/api'; // Update with your API URL

const useFetchSocialLinks = (): SocialLink[] => {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await axios.get<SocialLink[]>(`${API_URL}/social-links`);
        setSocialLinks(response.data);
        console.log('Fetched Social Links in useFetchSocialLinks:', response.data); // Log fetched data
      } catch (error) {
        console.error('Error fetching social links:', error);
      }
    };

    fetchSocialLinks();
  }, []);

  return socialLinks;
};

export default useFetchSocialLinks;
