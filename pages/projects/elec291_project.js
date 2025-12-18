import {
  Container,
  Badge,
  Box,
  VStack,
  Text,
  Heading,
  Divider,
  useColorModeValue,
  SimpleGrid
} from '@chakra-ui/react'
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

  return (
    <Layout title="elec291_project">
      <Container maxW="container.lg">
        <Title>
          Magnetic Field Controlled Robot <Badge colorScheme="teal">2023</Badge>
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
            A magnetic field controlled car with a PIC32 Timer Interrupt that measures signal pauses from a joystick controller at millisecond precision, which then converts to movement instructions.
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
            Implemented a following mode in the car, which tracks the transmitter at up to 100cm by detecting the strength of the magnetic field and signal strength difference between the car&apos;s left and right inductors.
          </P>
          <P>
            Created a &apos;Go Home&apos; extra feature for the car that allows it to backtrack its movements and return to its starting location using an algorithm programmed on the PIC32 in Embedded C.
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
              <source src="/videos/elec291_project2.mp4" type="video/mp4" />
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
              <Meta>Stack</Meta>
              <Text mt={2} color={textColor}>
                Embedded C, STM32 and PIC32 Microcontrollers, Circuit Design
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
