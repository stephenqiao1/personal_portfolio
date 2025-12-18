import {
  Container,
  Badge,
  Box,
  VStack,
  Text,
  Heading,
  Divider,
  useColorModeValue,
  Link,
  SimpleGrid,
  Icon
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

const Project = () => {
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const cardBg = useColorModeValue('white', 'gray.800')
  const linkColor = useColorModeValue('teal.600', 'teal.300')

  return (
    <Layout title="gesture_cv">
      <Container maxW="container.lg">
        <Title>
          Gesture-Controlled Light System w/ Computer Vision <Badge colorScheme="teal">2023</Badge>
        </Title>

        <MotionVStack
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          spacing={8}
          align="stretch"
        >
        {/* Project Overview */}
          <MotionBox variants={itemVariants}>
            <Box
              bg={cardBg}
              borderRadius="xl"
              p={6}
              borderWidth="1px"
              borderColor={borderColor}
              boxShadow="md"
              _hover={{
                boxShadow: 'xl',
                transform: 'translateY(-2px)'
              }}
              transition="all 0.3s"
            >
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                Project Overview
              </Heading>
          <P fontSize="lg" lineHeight="tall" color={textColor}>
            This project showcases the integration of computer vision and IoT to create a gesture-controlled lighting system. Utilizing a Raspberry Pi 4 and a USB camera, the system captures real-time video to recognize specific hand gestures, which then triggers a relay module to control a light source.
          </P>
        </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Key Features */}
          <MotionBox variants={itemVariants}>
            <Box
              bg={cardBg}
              borderRadius="xl"
              p={6}
              borderWidth="1px"
              borderColor={borderColor}
              boxShadow="md"
              _hover={{
                boxShadow: 'xl',
                transform: 'translateY(-2px)'
              }}
              transition="all 0.3s"
            >
          <Heading
            as="h2"
            size="md"
            fontWeight="semibold"
            color={headingColor}
                mb={4}
          >
            Key Features
          </Heading>
              <VStack spacing={4} align="stretch">
          <P>
            Real-Time Gesture Recognition: Implemented using Python and the MediaPipe library, the system can accurately recognize a variety of hand gestures in real-time.
          </P>
          <P>
            IoT Light Control: Integrated a relay module with a Raspberry Pi 4 to control a USB-powered lamp based on the recognized gestures.
          </P>
          <P>
            Safety and Efficiency: Designed with safety in mind, the system uses a relay module to isolate the Raspberry Pi from the high voltage, ensuring safe operation.
          </P>
        </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

        {/* Project Information */}
          <MotionBox variants={itemVariants}>
        <Box
          bg={cardBg}
          borderRadius="xl"
          p={6}
          borderWidth="1px"
          borderColor={borderColor}
              boxShadow="md"
              _hover={{
                boxShadow: 'xl',
                transform: 'translateY(-2px)'
              }}
              transition="all 0.3s"
        >
          <Heading
            as="h2"
            size="md"
            fontWeight="semibold"
            color={headingColor}
            mb={6}
          >
            Project Information
          </Heading>
          <SimpleGrid columns={[1, 2]} spacing={6}>
              <Box>
                <Meta>Repository</Meta>
                <Link
                  href="https://github.com/stephenqiao1/gesture_controlled_light"
                  target="_blank"
                  color={linkColor}
                    _hover={{
                      textDecoration: 'underline',
                      transform: 'translateX(4px)'
                    }}
                    transition="all 0.2s"
                  mt={2}
                    display="flex"
                    alignItems="center"
                    gap={2}
                >
                    <Text>GitHub Repository</Text>
                    <Icon as={ExternalLinkIcon} />
                </Link>
              </Box>
              <Box>
                <Meta>Stack</Meta>
                <Text mt={2} color={textColor} lineHeight="tall">
                  Hardware: Raspberry Pi 4, USB Camera, Relay Module, USB-powered Lamp
                  <br />
                  Software: Python, OpenCV, MediaPipe
                </Text>
              </Box>
          </SimpleGrid>
        </Box>
          </MotionBox>
        </MotionVStack>
      </Container>
    </Layout>
  )
}

export default Project
export { getServerSideProps } from '../../components/chakra'
