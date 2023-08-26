// components/SocialLinks.tsx
import React from "react";
import { VStack, Link, Box } from "@chakra-ui/react";
import useFetchSocialLinks from "@/hooks/useFetchSocialLinks";
import * as ReactIcons from "react-icons/fa";

type ValidIconName = "FaTwitter" | "FaFacebook" | "FaInstagram"; // Add more icons if needed

const SocialLinks: React.FC = () => {
  const socialLinks = useFetchSocialLinks();

  if (!Array.isArray(socialLinks)) {
    return null; // Handle loading or error state here
  }
  console.log("Fetched Social Links:", socialLinks);
  return (
    <VStack spacing={4} align="start">
      {socialLinks.map((link) => {
        const IconComponent = ReactIcons[link.icon as ValidIconName];

        return (
          <Box key={link.id}>
            {IconComponent && <IconComponent size={24} />}{" "}
            {/* Render the icon */}
            <Link href={link.link} isExternal>
              {link.platform}
            </Link>
          </Box>
        );
      })}
    </VStack>
  );
};

export default SocialLinks;
