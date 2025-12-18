import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Text,
  VStack,
  HStack,
  Flex,
  Divider
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Page = () => {
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Layout>
      <Container maxW="container.lg">
        {/* Hero Section */}
        <Section delay={0.1}>
          <VStack spacing={2} align="flex-start" mb={12} mt={8}>
            <Heading
              as="h1"
              size="2xl"
              fontWeight="bold"
              color={headingColor}
              mb={2}
            >
              Stephen Qiao
            </Heading>
            <Text fontSize="lg" color={textColor}>
              UBC Student | Aspiring Engineer & Developer
            </Text>
          </VStack>
        </Section>

        {/* About Me Section */}
        <Section delay={0.2}>
          <Heading
            as="h2"
            size="lg"
            fontWeight="semibold"
            mb={4}
            color={headingColor}
          >
            About Me
          </Heading>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            gap={6}
            mb={8}
            align={{ base: 'center', md: 'flex-start' }}
          >
            <Box flexShrink={0}>
              <Image
                borderWidth={2}
                borderStyle="solid"
                borderColor={borderColor}
                width="200px"
                height="200px"
                borderRadius="lg"
                src="/images/contents/stephen.jpg"
                alt="Stephen Qiao"
                style={{ objectFit: 'cover' }}
              />
            </Box>
            <Box flex={1}>
              <Paragraph>
                Stephen Qiao is an undergraduate student at UBC (University of
                British Columbia), studying electrical engineering. He has a passion
                for Space, AI, Robotics, and anything related to innovative technology.
                When he is getting bored with work, he likes to spend time on his
                hobbies: reading, snowboarding, and playing the guitar.
              </Paragraph>
              <Box mt={4}>
                <Text fontWeight="semibold" mb={2} color={headingColor}>
                  Some of the tools and technologies I like to work with include:
                </Text>
                <Text color={textColor}>
                  Languages: JavaScript, Python, C/C++, Embedded C, MATLAB
                  <br />
                  Frameworks & Tools: React, Next.js, Node.js, Express, Flask
                  <br />
                  Hardware: STM32, ESP32, PIC32, Circuit Design, KiCAD
                  <br />
                  Other: AWS, MongoDB, PostgreSQL, Git, Docker
                </Text>
              </Box>
              <Box mt={6}>
                <HStack spacing={4}>
                  <Link
                    href="https://github.com/stephenqiao1"
                    target="_blank"
                    color={useColorModeValue('teal.600', 'teal.300')}
                    _hover={{ textDecoration: 'underline' }}
                  >
                    <HStack>
                      <IoLogoGithub />
                      <Text>GitHub</Text>
                    </HStack>
                  </Link>
                  <Link
                    href="https://linkedin.com/in/stephen-qiao"
                    target="_blank"
                    color={useColorModeValue('teal.600', 'teal.300')}
                    _hover={{ textDecoration: 'underline' }}
                  >
                    <HStack>
                      <IoLogoLinkedin />
                      <Text>LinkedIn</Text>
                    </HStack>
                  </Link>
                  <Link
                    href="mailto:stephenqiao123@gmail.com"
                    color={useColorModeValue('teal.600', 'teal.300')}
                    _hover={{ textDecoration: 'underline' }}
                  >
                    <Text>Email</Text>
                  </Link>
                </HStack>
              </Box>
            </Box>
          </Flex>
        </Section>

        <Divider my={8} borderColor={borderColor} />

        {/* Work & Education Timeline */}
        <Section delay={0.3}>
          <Heading
            as="h2"
            size="lg"
            fontWeight="semibold"
            mb={6}
            color={headingColor}
          >
            Work & Education Timeline
          </Heading>
          <VStack align="stretch" spacing={6}>
            <BioSection>
              <BioYear>2021 - 2026</BioYear>
              <Box>
                <Text fontWeight="semibold" color={headingColor}>
                  The University of British Columbia
                </Text>
                <Text fontSize="sm" color={textColor} mb={1}>
                  Vancouver, BC
                </Text>
                <Text fontSize="sm" color={textColor}>
                  Bachelor of Applied Science in Electrical Engineering
                </Text>
              </Box>
            </BioSection>

            <BioSection>
              <BioYear>2024 - 2025</BioYear>
              <Box>
                <Text fontWeight="semibold" color={headingColor}>
                  Bosch
                </Text>
                <Text fontSize="sm" color={textColor} mb={1}>
                  Intern
                </Text>
                <Text fontSize="sm" color={textColor}>
                  {/* Add description if needed */}
                </Text>
              </Box>
            </BioSection>

            <BioSection>
              <BioYear>2024</BioYear>
              <Box>
                <Text fontWeight="semibold" color={headingColor}>
                  Salyx Medical
                </Text>
                <Text fontSize="sm" color={textColor} mb={1}>
                  Electronics Prototype Engineer Intern
                </Text>
                <Text fontSize="sm" color={textColor}>
                  Worked on PCB design, embedded systems development, and medical device prototyping.
                </Text>
              </Box>
            </BioSection>

            <BioSection>
              <BioYear>2015</BioYear>
              <Text fontSize="sm" color={textColor}>
                Moved back to Toronto, Canada for high school
              </Text>
            </BioSection>

            <BioSection>
              <BioYear>2012</BioYear>
              <Text fontSize="sm" color={textColor}>
                Moved to Shanghai, China for middle school
              </Text>
            </BioSection>

            <BioSection>
              <BioYear>2001</BioYear>
              <Text fontSize="sm" color={textColor}>
                Born in Toronto, Canada
              </Text>
            </BioSection>
          </VStack>
        </Section>

        <Divider my={8} borderColor={borderColor} />

        {/* Quick Links */}
        <Section delay={0.4}>
          <Box textAlign="center" py={4}>
            <NextLink href="/projects" passHref>
              <Link
                fontSize="lg"
                color={useColorModeValue('teal.600', 'teal.300')}
                _hover={{ textDecoration: 'underline' }}
                fontWeight="medium"
              >
                View My Projects →
              </Link>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
