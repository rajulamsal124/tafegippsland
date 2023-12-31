'use client';

import React from 'react';
import {
  Box,
  Heading,
  IconButton,
  useBreakpointValue,
  Text,
  Flex,
  VStack,
} from '@chakra-ui/react';
import color from '@/theme/color';
import Button from '@/components/common/Buttons/ButtonComponent';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

import { useRouter } from 'next/navigation';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const router = useRouter();
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const navigateToAbout = () => {
    router.push('/about');
  };
  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  ];

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
            pl={90}
          >
            <Box
              bg="rgba(0,0,0,0.5)"
              borderRadius="lg"
              p={10}
              justifyContent={'space-between'}
              m={40}
              display="inline-flex" // This makes the Box only as wide as its content
            >
              <VStack spacing={4} alignItems="flex-start">
                <Text fontSize="2xl" fontWeight="bold" color="white">
                  Main Heading
                </Text>
                <Text color="white" fontSize="md" wordBreak={'break-word'}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                  consequat urna. <br /> Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Quisque nisl eros, pulvinar facilisis justo
                  mollis, auctor consequat urna.
                </Text>
                <Button
                  label="Take a Tour"
                  variantColor="green.600"
                  color="white"
                  type="button"
                  _hover={{
                    bg: 'green.600',
                  }}
                  onClick={navigateToAbout}
                />
              </VStack>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
