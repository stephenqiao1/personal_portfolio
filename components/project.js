import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, HStack, Icon, useColorModeValue, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)

export const Title = ({ children }) => {
  const linkColor = useColorModeValue('teal.600', 'teal.300')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const headingColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  
  return (
    <MotionBox
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      mb={8}
    >
      <HStack spacing={2} mb={4} fontSize="sm" color={textColor}>
        <Link
          as={NextLink}
          href="/projects"
          color={linkColor}
          _hover={{ textDecoration: 'underline' }}
        >
          Projects
        </Link>
        <Icon as={ChevronRightIcon} />
        <Text>Project Details</Text>
      </HStack>
      <MotionHeading
        as="h1"
        size="xl"
        fontWeight="bold"
        lineHeight="shorter"
        color={headingColor}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {children}
      </MotionHeading>
    </MotionBox>
  )
}

export const WorkImage = ({ src, alt }) => (
  <MotionBox
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.02 }}
    borderRadius="lg"
    overflow="hidden"
    mb={6}
    boxShadow="xl"
  >
  <Image
    borderRadius="lg"
    w="full"
    src={src}
    alt={alt}
    boxShadow="lg"
  />
  </MotionBox>
)

export const Meta = ({ children }) => {
  const bgColor = useColorModeValue('teal.50', 'teal.900')
  const textColor = useColorModeValue('teal.800', 'teal.200')
  
  return (
    <MotionBox
      display="inline-block"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
    <Badge
      bg={bgColor}
      color={textColor}
      px={3}
      py={1}
      borderRadius="md"
      fontWeight="semibold"
      fontSize="xs"
      textTransform="uppercase"
      letterSpacing="wide"
        boxShadow="sm"
    >
      {children}
    </Badge>
    </MotionBox>
  )
}
