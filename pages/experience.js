import {
  Container,
  Heading,
  VStack,
  Text,
  Box,
  UnorderedList,
  ListItem
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'

const WorkExperience = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} my={4}>
          Work Experience
        </Heading>

        <VStack spacing={6} align="stretch">
          <Section>
            <Heading as="h4" fontSize={16}>
              Electronics Prototype Engineer Intern
            </Heading>
            <Text fontWeight="bold">Salyx Medical</Text>
            <Text fontSize="sm" color="gray.500">
              January 2024 - Present
            </Text>
            <Box mt={2}>
              <Text fontWeight="semibold">Company Description:</Text>
              <Text>
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
            <Box mt={2}>
              <Text fontWeight="semibold">Responsibilities:</Text>
              <UnorderedList>
                <ListItem>PCB prototype design in various materials using KiCAD</ListItem>
                <ListItem>Electronic design according to FCC guidelines</ListItem>
                <ListItem>Electronic analog filtering to increase signal-to-noise ratio</ListItem>
                <ListItem>Component selection, BOM creation, and sourcing of electronic components</ListItem>
                <ListItem>Soldering, assembling, and installing electronic components using electronic testing equipment such as oscilloscope, signal generator, power supply, multi-meter, etc.</ListItem>
                <ListItem>Assures electronic prototype quality by designing testing methods</ListItem>
                <ListItem>Electronic process and research documentation for knowledge transfer</ListItem>
                <ListItem>3DCAD and 3D printing usage to support enclosure design around PCB</ListItem>
                <ListItem>Preparation for PCB mass production and manufacturing</ListItem>
                <ListItem>Research and development of state-of-the-art bio-sensors and electronic components</ListItem>
                {/* Add more list items as needed */}
              </UnorderedList>
            </Box>
          </Section>

          <Section>
            <Heading as="h4" fontSize={16}>
              Previous Job Title
            </Heading>
            <Text fontWeight="bold">Previous Company Name</Text>
            <Text fontSize="sm" color="gray.500">
              Start Date - End Date
            </Text>
            <Box mt={2}>
              <Text fontWeight="semibold">
                Overview of [Previous Company Name]:
              </Text>
              <Text>
                Brief description of the previous company, its sector, and its
                core offerings.
              </Text>
            </Box>
            <Box mt={2}>
              <Text fontWeight="semibold">Responsibilities:</Text>
              <UnorderedList>
                <ListItem>First key task or responsibility</ListItem>
                <ListItem>Second key task or responsibility</ListItem>
                {/* Add more list items as needed */}
              </UnorderedList>
            </Box>
          </Section>

          {/* Repeat the Section block for other job experiences */}
        </VStack>
      </Container>
    </Layout>
  )
}

export default WorkExperience
