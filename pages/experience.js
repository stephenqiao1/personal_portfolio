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
              January 2024 - August 2024
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
                <ListItem>Designed and improved 5+ PCB prototypes for chargers, MVPs, and development kits utilizing KiCAD, demonstrating a
                strong understanding of both analog and digital circuits</ListItem>
                <ListItem>Engaged in implementation of state-of-the-art bio-sensors, and electronic components, furthering the company&apos;s position at the
                forefront of MedTech innovation</ListItem>
                <ListItem>Contributed to the redesign of a medical device MVP, achieving a 20% increase in power efficiency and a 15% improvement in
                accuracy for PPG and ECG monitoring</ListItem>
                <ListItem>Component selection, BOM creation, and sourcing of electronic components</ListItem>
                <ListItem>Soldering, assembling, and installing electronic components using electronic testing equipment such as oscilloscope, signal generator, power supply, multi-meter, etc.</ListItem>
                <ListItem>Programmed and integrated ESP32 with FreeRTOS for control of PCB functionalities, implemented BLE connections for
                seamless interfacing with the MVP, and developed Wi-Fi connectivity solutions for mobile device integration</ListItem>
                <ListItem>Electronic process and research documentation for knowledge transfer</ListItem>
                <ListItem>Led an entire project to build a testing device simulating the MVP of Salyx Medical, utilizing FreeRTOS, NimBLE, firmware,
                and embedded programming to create a device capable of connecting to the app via BLE and simulating realistic vitals data.</ListItem>
                <ListItem>Directed the electrical design of a project for Salyx Medical&apos;s sister company, developing the electrical system by designing PCBs to efficiently charge a lithium battery using solar cells. </ListItem>
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
