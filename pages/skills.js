import {
  Container,
  Heading,
  Text,
  Divider,
  Box,
  VStack,
  Badge,
  useColorModeValue,
  Flex
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { motion } from 'framer-motion'
import Section from '../components/section'

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

const SkillCategory = ({ title, skills, colorScheme }) => {
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const headingColor = useColorModeValue('gray.800', 'whiteAlpha.900')

  return (
    <MotionBox variants={itemVariants}>
      <Box
        bg={cardBg}
        borderRadius="xl"
        p={6}
        borderWidth="1px"
        borderColor={borderColor}
        boxShadow="md"
        height="100%"
        _hover={{
          boxShadow: 'xl',
          transform: 'translateY(-4px)',
          borderColor: useColorModeValue(`${colorScheme}.300`, `${colorScheme}.600`)
        }}
        transition="all 0.3s"
      >
        <Heading
          as="h3"
          size="md"
          fontWeight="semibold"
          color={headingColor}
          mb={4}
          pb={2}
          borderBottom="2px solid"
          borderColor={useColorModeValue(`${colorScheme}.200`, `${colorScheme}.700`)}
        >
          {title}
        </Heading>
        <Flex wrap="wrap" gap={2}>
          {skills.map((skill, index) => (
            <Badge
              key={index}
              colorScheme={colorScheme}
              px={3}
              py={1}
              borderRadius="full"
              fontSize="sm"
              fontWeight="medium"
              _hover={{
                transform: 'scale(1.05)',
                boxShadow: 'md'
              }}
              transition="all 0.2s"
            >
              {skill}
            </Badge>
          ))}
        </Flex>
      </Box>
    </MotionBox>
  )
}

const Skills = () => {
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  const programmingLanguages = [
    'Python',
    'JavaScript',
    'C',
    'C++',
    'C#',
    'Java',
    'Embedded C',
    'Verilog',
    'Assembly',
    'MATLAB'
  ]

  const softwareTools = [
    'Git',
    'Visual Studio Code',
    'React',
    'React Native',
    'Next.js',
    'Redux',
    'Unity',
    'Node.js',
    'Express.js',
    'SQL',
    'REST API',
    'Linux',
    'Firebase',
    'RTOS',
    'ROS',
    'Docker'
  ]

  const hardwareSkills = [
    'Oscilloscope',
    'Function Generator',
    'Multimeter',
    'Soldering',
    'Arduino',
    'STM32',
    'ESP32',
    'PIC32',
    'FPGA',
    'Microcontrollers',
    'UART',
    'SPI',
    'I2C',
    'PCB Design',
    'KiCAD'
  ]

  const courses = [
    'Linear Algebra',
    'Data Structures & Algorithms',
    'Signals and Systems',
    'Engineering Electromagnetics',
    'Circuit Analysis I & II',
    'Differential Equations',
    'Multivariable Calculus',
    'Computing Systems',
    'Electronic Materials & Devices',
    'Electromagnetic Field & Waves',
    'Systems and Control',
    'Software Design for Engineers',
    'Machine Learning',
    'Deep Learning',
    'Operating Systems',
    'Computer Networks',
    'New Venture Design',
    'Electronic Circuits',
    'Fundamentals of Blockchain'
  ]

  return (
    <Layout>
      <Container maxW="container.lg">
        <Section delay={0.1}>
          <VStack spacing={4} align="flex-start" mb={8}>
            <Heading
              as="h1"
              size="xl"
              fontWeight="bold"
              color={headingColor}
            >
          Skills & Expertise
        </Heading>
            <Text fontSize="md" color={textColor} maxW="3xl" lineHeight="tall">
              As an engineering student and software developer, I&apos;ve acquired a diverse set of technical skills. 
              Here you&apos;ll find a comprehensive overview of my capabilities, including programming languages, 
              software tools, hardware expertise, and relevant coursework.
        </Text>
          </VStack>
        </Section>

        <Divider borderColor={borderColor} mb={8} />

        <MotionVStack
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          spacing={8}
          align="stretch"
        >
          {/* Programming Languages */}
          <Section delay={0.2}>
            <SkillCategory
              title="Programming Languages"
              skills={programmingLanguages}
              colorScheme="teal"
            />
          </Section>

          {/* Software Tools & Frameworks */}
          <Section delay={0.3}>
            <SkillCategory
              title="Software Tools & Frameworks"
              skills={softwareTools}
              colorScheme="blue"
            />
          </Section>

          {/* Hardware & Electronics */}
          <Section delay={0.4}>
            <SkillCategory
              title="Hardware & Electronics"
              skills={hardwareSkills}
              colorScheme="purple"
            />
          </Section>

          {/* Relevant Courses */}
          <Section delay={0.5}>
            <SkillCategory
              title="Relevant Courses"
              skills={courses}
              colorScheme="orange"
            />
          </Section>
        </MotionVStack>
      </Container>
    </Layout>
  )
}

export default Skills
