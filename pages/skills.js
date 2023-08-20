import { Container, Heading, Text, Divider, Box, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Skills = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h2" fontSize={24} mb={4}>
          Skills & Expertise
        </Heading>

        <Text fontSize={14} mb={4}>
          As an engineering student and a software developer, I&apos;ve acquired a diverse set of technical skills. Here you&apos;ll find a comprehensive list of my capabilities, including programming languages I&apos;m proficient in, software tools I&apos;ve used, and various other areas of expertise I&apos;ve developed over the course of my academic and professional journey.
        </Text>

        <Divider mb={6} />

        <SimpleGrid columns={2} spacing={10}>
          {/* Programming Languages */}
          <Box>
            <Heading as="h3" fontSize={20} mb={2}>
              Programming Languages
            </Heading>
            <List spacing={1}>
              <ListItem>Python</ListItem>
              <ListItem>Javascript</ListItem>
              <ListItem>C</ListItem>
              <ListItem>C#</ListItem>
              <ListItem>Verilog</ListItem>
              <ListItem>Assembly</ListItem>
              {/* Add more as needed */}
            </List>
          </Box>

          {/* Software Tools */}
          <Box>
            <Heading as="h3" fontSize={20} mb={2}>
              Software Tools/Frameworks
            </Heading>
            <List spacing={1}>
              <ListItem>Git</ListItem>
              <ListItem>Visual Studio Code</ListItem>
              <ListItem>ReactJS</ListItem>
              <ListItem>ReactNative</ListItem>
              <ListItem>Redux</ListItem>
              <ListItem>Unity</ListItem>
              <ListItem>NodeJS</ListItem>
              <ListItem>SQL</ListItem>
              <ListItem>REST API</ListItem>
              <ListItem>Linux</ListItem>
              <ListItem>ExpressJS</ListItem>
              <ListItem>Firebase</ListItem>
              <ListItem>NextJS</ListItem>
              <ListItem>Computer Vision</ListItem>
              <ListItem>Machine Learning</ListItem>
              {/* Add more as needed */}
            </List>
          </Box>

          {/* Other Skills */}
          <Box>
            <Heading as="h3" fontSize={20} mb={2}>
              Other Skills
            </Heading>
            <List spacing={1}>
              <ListItem>Oscilloscope</ListItem>
              <ListItem>Function Generator</ListItem>
              <ListItem>Multimeter</ListItem>
              <ListItem>Solder</ListItem>
              <ListItem>Arduino</ListItem>
              <ListItem>FPGA</ListItem>
              <ListItem>Microcontrollers</ListItem>
              <ListItem>Protocols(UART, SPI)</ListItem>
              {/* Add more as needed */}
            </List>
          </Box>

          {/* Courses */}
          <Box>
            <Heading as="h3" fontSize={20} mb={2}>
              Courses
            </Heading>
            <List spacing={1}>
              <ListItem>Linear Algebra</ListItem>
              <ListItem>Data Structures and Algorithms</ListItem>
              <ListItem>Signals and Systems</ListItem>
              <ListItem>Engineering Electromagnetics</ListItem>
              <ListItem>Circuit Analysis I</ListItem>
              <ListItem>Circuit Analysis II</ListItem>
              <ListItem>Differential Equations</ListItem>
              <ListItem>Multivariable Calculus</ListItem>
              <ListItem>Computing Systems I</ListItem>
              <ListItem>Electronic Materials and Devices</ListItem>
              <ListItem>Electromagnetic Field and Waves</ListItem>
            </List>
          </Box>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Skills
