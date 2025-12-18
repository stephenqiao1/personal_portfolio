import {
  Container,
  Heading,
  VStack,
  Text,
  Box,
  UnorderedList,
  ListItem,
  useColorModeValue,
  Divider,
  HStack,
  Badge
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
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

const WorkExperience = () => {
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const cardBg = useColorModeValue('white', 'gray.800')
  const badgeColor = useColorModeValue('teal.100', 'teal.900')
  const badgeTextColor = useColorModeValue('teal.800', 'teal.200')

  return (
    <Layout>
      <Container maxW="container.lg">
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          mb={8}
          color={headingColor}
        >
          Work & Education
        </Heading>

        <MotionVStack
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          spacing={8}
          align="stretch"
        >
          {/* Education */}
          <Section delay={0.1}>
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
                <HStack spacing={3} mb={3}>
                  <Badge
                    bg={badgeColor}
                    color={badgeTextColor}
                    px={3}
                    py={1}
                    borderRadius="md"
                    fontSize="xs"
                    fontWeight="semibold"
                  >
                    2021 - 2026
                  </Badge>
                </HStack>
                <Text fontWeight="semibold" fontSize="lg" color={headingColor} mb={1}>
                  The University of British Columbia
                </Text>
                <Text fontSize="sm" color={textColor} mb={1}>
                  Vancouver, BC
                </Text>
                <Text fontSize="sm" color={textColor}>
                  Bachelor of Applied Science in Electrical Engineering
                </Text>
              </Box>
            </MotionBox>
          </Section>

          <Divider borderColor={borderColor} />

          {/* Bosch Experience */}
          <Section delay={0.2}>
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
                <HStack spacing={3} mb={3} flexWrap="wrap">
                  <Badge
                    bg={badgeColor}
                    color={badgeTextColor}
                    px={3}
                    py={1}
                    borderRadius="md"
                    fontSize="xs"
                    fontWeight="semibold"
                  >
                    Sep 2024 - May 2025
                  </Badge>
                </HStack>
                <Text fontWeight="semibold" fontSize="lg" color={headingColor} mb={1}>
                  Bosch GmbH
                </Text>
                <Text fontSize="sm" color={textColor} mb={1}>
                  Reutlingen, Germany
                </Text>
                <Text fontSize="sm" color={textColor} mb={4} fontWeight="medium">
                  Intern in the Development and Production of MEMS Sensors
                </Text>
                <UnorderedList spacing={2} fontSize="sm" color={textColor} pl={4}>
                  <ListItem>
                    Developed and optimized MATLAB and Python scripts to process, preprocess, and analyze data from automotive acceleration
                    MEMS sensors, including cleaning outliers, smoothing data with interpolation, and generating visualizations.
                  </ListItem>
                  <ListItem>
                    Designed and executed comprehensive test cases for PSI5 and SPI communication protocols on automotive acceleration MEMS
                    sensors, ensuring reliable data transmission and compliance with industry standards, resulting in increased reliability.
                  </ListItem>
                  <ListItem>
                    Configured and maintained testing environments for MEMS sensors, including humidity and temperature chambers, to
                    simulate real-world operating conditions.
                  </ListItem>
                  <ListItem>
                    Performed precise laboratory measurements and calibrations on MEMS sensors, identifying and troubleshooting performance
                    issues to guarantee accurate functionality.
                  </ListItem>
                </UnorderedList>
              </Box>
            </MotionBox>
          </Section>

          <Divider borderColor={borderColor} />

          {/* Salyx Medical Experience */}
          <Section delay={0.3}>
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
                <HStack spacing={3} mb={3} flexWrap="wrap">
                  <Badge
                    bg={badgeColor}
                    color={badgeTextColor}
                    px={3}
                    py={1}
                    borderRadius="md"
                    fontSize="xs"
                    fontWeight="semibold"
                  >
                    Jan 2024 - Aug 2024
                  </Badge>
                </HStack>
                <Text fontWeight="semibold" fontSize="lg" color={headingColor} mb={1}>
                  Salyx Medical
                </Text>
                <Text fontSize="sm" color={textColor} mb={4} fontWeight="medium">
                  Electronics Prototype Engineer Intern
                </Text>
                <Box mb={4}>
                  <Text fontWeight="semibold" fontSize="sm" color={headingColor} mb={2}>
                    Company Description:
                  </Text>
                  <Text fontSize="sm" color={textColor} lineHeight="tall">
                    Salyx Medical is a MedTech company that develops innovative
                    medical IoT devices that connect to cloud services and mobile
                    apps. Their ecosystem is a part of a new Smart
                    Patient-Monitoring Solution. The Salyx Medical Device monitors
                    more than five key health vital signals and warns the user of
                    abnormal levels. Unlike other trackers in the industry, the
                    Salyx Tracker requires minimal user intervention and brings the
                    logging functionality of hospital technology right to your home.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" fontSize="sm" color={headingColor} mb={2}>
                    Responsibilities:
                  </Text>
                  <UnorderedList spacing={2} fontSize="sm" color={textColor} pl={4}>
                    <ListItem>
                      Designed and improved 5+ PCB prototypes for chargers, MVPs, and development kits utilizing KiCAD, demonstrating a
                      strong understanding of both analog and digital circuits
                    </ListItem>
                    <ListItem>
                      Engaged in implementation of state-of-the-art bio-sensors, and electronic components, furthering the company&apos;s position at the
                      forefront of MedTech innovation
                    </ListItem>
                    <ListItem>
                      Contributed to the redesign of a medical device MVP, achieving a 20% increase in power efficiency and a 15% improvement in
                      accuracy for PPG and ECG monitoring
                    </ListItem>
                    <ListItem>
                      Component selection, BOM creation, and sourcing of electronic components
                    </ListItem>
                    <ListItem>
                      Soldering, assembling, and installing electronic components using electronic testing equipment such as oscilloscope, signal generator, power supply, multi-meter, etc.
                    </ListItem>
                    <ListItem>
                      Programmed and integrated ESP32 with FreeRTOS for control of PCB functionalities, implemented BLE connections for
                      seamless interfacing with the MVP, and developed Wi-Fi connectivity solutions for mobile device integration
                    </ListItem>
                    <ListItem>
                      Electronic process and research documentation for knowledge transfer
                    </ListItem>
                    <ListItem>
                      Led an entire project to build a testing device simulating the MVP of Salyx Medical, utilizing FreeRTOS, NimBLE, firmware,
                      and embedded programming to create a device capable of connecting to the app via BLE and simulating realistic vitals data.
                    </ListItem>
                    <ListItem>
                      Directed the electrical design of a project for Salyx Medical&apos;s sister company, developing the electrical system by designing PCBs to efficiently charge a lithium battery using solar cells.
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Box>
            </MotionBox>
          </Section>
        </MotionVStack>
      </Container>
    </Layout>
  )
}

export default WorkExperience
