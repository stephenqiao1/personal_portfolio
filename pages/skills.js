import { Container, Heading, Text, SimpleGrid, Divider, Box, List, ListItem } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Skills = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h2" fontSize={24} mb={4}>
          Skills & Expertise
        </Heading>

        <Text fontSize={14} mb={4}>
          As an engineering student and a software developer, I've acquired a diverse set of technical skills. Here you'll find a comprehensive list of my capabilities, including programming languages I'm proficient in, software tools I've used, and various other areas of expertise I've developed over the course of my academic and professional journey.
        </Text>

        <Divider mb={6} />

        {/* Programming Languages */}
        <Heading as="h3" fontSize={20} mb={2}>
          Programming Languages
        </Heading>
        <Box mb={4}>
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
        <Heading as="h3" fontSize={20} mb={2}>
          Software Tools/Frameworks
        </Heading>
        <Box mb={4}>
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
            {/* Add more as needed */}
          </List>
        </Box>

        {/* Other Skills */}
        <Heading as="h3" fontSize={20} mb={2}>
          Other Skills
        </Heading>
        <Box mb={4}>
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
      </Container>
    </Layout>
  )
}

export default Skills
