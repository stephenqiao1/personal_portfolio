import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  List,
  ListItem
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack developer based in Canada!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Stephen Qiao
            </Heading>
            <p>Student Engineer ( Developer / Engineer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/contents/stephen.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Stephen Qiao is an undergraduate student at UBC (University of
            British Columbia), studying electrical engineering. He has a passion
            for Space, AI, Robotics, and anything related to innovative technology. When
            he is getting bored with work, he likes to spend time on his
            hobbies: reading, snowboarding, and playing the guitar.
            Currently, he is working on a big project that he hopes many will
            love called{' '}
            <Link
              as={NextLink}
              href="/projects/prodoro"
              passHref
              scroll={false}
            >
              Prodoro
            </Link>
            . He also spends some of his time contributing to UBC Rover as Software-Science Integration Lead.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects" passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Projects
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2001</BioYear>
            Born in Toronto, Canada.
          </BioSection>
          <BioSection>
          <BioYear>2012</BioYear>
            Moved to Shanghai, China for middle school
          </BioSection>
          <BioSection>
          <BioYear>2015</BioYear>
            Moved back to Toronto, Canada for high school
          </BioSection>
          <BioSection>
          <BioYear>2019</BioYear>
            Attended undergraduate at The University of British Columbia
          </BioSection>
          <BioSection>
          <BioYear>2024</BioYear>
            Interned at Salyx Medical
          </BioSection>
          <BioSection>
            <BioYear>2024 - 2025</BioYear>
            Interned at Bosch
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/stephenqiao1" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @stephenqiao1
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://linkedin.com/in/stephen-qiao" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @stephen-qiao
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:stephenqiao123@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<EmailIcon />}
                >
                  stephenqiao123@gmail.com
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Resume
          </Heading>
          <Link href="/docs/resume.pdf" isExternal>
            <Button variant="ghost" colorScheme="teal">
              Download My Resume
            </Button>
          </Link>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
