import {
  Container,
  Badge,
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  useColorModeValue,
  Divider,
  SimpleGrid,
  Link,
  Icon
} from '@chakra-ui/react'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { motion } from 'framer-motion'
import { ExternalLinkIcon } from '@chakra-ui/icons'

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
    <Layout title="robotic_wrist">
      <Container maxW="container.lg">
        <Title>
          High-Frequency Shape-Drawing Robotic Wrist <Badge colorScheme="teal">2024</Badge>
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
              <VStack spacing={4} align="stretch">
                <P>
                  Developed a 2 Degree-of-Freedom (DOF) robotic wrist equipped with a laser pointer as the end effector, capable of drawing complex shapes at high frequencies.
                </P>
                <P>
                  Engineered a sophisticated control system to govern the movement of the robotic wrist. Incorporated PID logic for real-time adjustments, enhancing the accuracy of shape drawing.
                </P>
                <P>
                  Integrated various sensors to detect and respond to environmental changes. Implemented Fault Detection and Diagnostics (FDD) with Weighted Sum Filters for enhanced sensor data accuracy and reliability.
                </P>
              </VStack>
            </Box>
          </MotionBox>

          {/* Technical Details */}
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
                Technical Implementation
              </Heading>
              <VStack spacing={4} align="stretch">
                <P>
                  Wrote and optimized Interrupt Service Routine (ISR) code for STM microcontrollers in C, achieving efficient handling of high-frequency tasks and sensor inputs.
                </P>
                <P>
                  Successfully integrated mechanical and electronic components, demonstrating a fully functional prototype. Conducted rigorous testing to validate the design, control logic, and overall system performance.
                </P>
                <P>
                  Integrated Bluetooth via ESP32 for remote control and implemented an ultrasonic sensor to detect wall distances, enabling precise manual and automatic adjustments of the shape&apos;s proportion.
                </P>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Demo Video */}
          <MotionBox variants={itemVariants}>
            <Heading
              as="h2"
              size="md"
              fontWeight="semibold"
              color={headingColor}
              mb={4}
            >
              Demo
            </Heading>
            <Box
              borderRadius="xl"
              overflow="hidden"
              boxShadow="xl"
              bg={cardBg}
              borderWidth="1px"
              borderColor={borderColor}
              _hover={{
                boxShadow: '2xl',
                transform: 'scale(1.01)'
              }}
              transition="all 0.3s"
            >
              <video
                width="100%"
                height="auto"
                controls
                style={{
                  display: 'block',
                  maxHeight: '600px'
                }}
              >
                <source src="/videos/robotic_wrist_demo.mov" type="video/quicktime" />
              </video>
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
                  <Meta>Location</Meta>
                  <Text mt={2} color={textColor}>
                    Vancouver, Canada
                  </Text>
                </Box>
                <Box>
                  <Meta>Duration</Meta>
                  <Text mt={2} color={textColor}>
                    Feb 2024 – April 2024
                  </Text>
                </Box>
                <Box gridColumn={[1, 'span 2']}>
                  <Meta>Stack</Meta>
                  <Text mt={2} color={textColor}>
                    Embedded C, STM32 Microcontrollers, ESP32, PID Control, Bluetooth, Ultrasonic Sensors, Circuit Design
                  </Text>
                </Box>
                <Box gridColumn={[1, 'span 2']}>
                  <Meta>Documentation</Meta>
                  <HStack mt={2} spacing={4} flexWrap="wrap">
                    <Link
                      href="/docs/robotic_wrist_slideshow.pdf"
                      target="_blank"
                      color={linkColor}
                      _hover={{
                        textDecoration: 'underline',
                        transform: 'translateX(4px)'
                      }}
                      transition="all 0.2s"
                      display="flex"
                      alignItems="center"
                      gap={1}
                    >
                      Slideshow
                      <Icon as={ExternalLinkIcon} />
                    </Link>
                    <Text color={textColor}>•</Text>
                    <Link
                      href="/docs/robotic_wrist_report.pdf"
                      target="_blank"
                      color={linkColor}
                      _hover={{
                        textDecoration: 'underline',
                        transform: 'translateX(4px)'
                      }}
                      transition="all 0.2s"
                      display="flex"
                      alignItems="center"
                      gap={1}
                    >
                      Systems Report
                      <Icon as={ExternalLinkIcon} />
                    </Link>
                  </HStack>
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
