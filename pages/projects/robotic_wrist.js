import {
  Container,
  Badge,
  List,
  ListItem,
} from '@chakra-ui/react'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="robotic_wrist">
    <Container>
      <Title>
        High-Frequency Shape-Drawing Robotic Wrist <Badge>2024</Badge>
      </Title>
      <P>
        Developed a 2 Degree-of-Freedom (DOF) robotic wrist equipped with a laser pointer as the end effector, capable of drawing complex shapes at high frequencies.
      </P>
      <P>
        Engineered a sophisticated control system to govern the movement of the robotic wrist. Incorporated PID logic for real-time adjustments, enhancing the accuracy of shape drawing.
      </P>
      <P>
        Integrated various sensors to detect and respond to environmental changes. Implemented Fault Detection and Diagnostics (FDD) with Weighted Sum Filters for enhanced sensor data accuracy and reliability.
      </P>
      <P>
        Wrote and optimized Interrupt Service Routine (ISR) code for STM microcontrollers in C, achieving efficient handling of high-frequency tasks and sensor inputs.
      </P>
      <P>
        Successfully integrated mechanical and electronic components, demonstrating a fully functional prototype. Conducted rigorous testing to validate the design, control logic, and overall system performance.
      </P>
      <P>
        Integrated Bluetooth via ESP32 for remote control and implemented an ultrasonic sensor to detect wall distances, enabling precise manual and automatic adjustments of the shape&apos;s proportion.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Demo</Meta>
          <video width="320" height="240" controls>
            <source src="/videos/robotic_wrist_demo.mov" type="video/quicktime" />
          </video>
        </ListItem>
        <ListItem>
          <Meta>Location</Meta>
          <span>Vancouver, Canada</span>
        </ListItem>
        <ListItem>
          <Meta>Duration</Meta>
          <span>Feb 2024 – April 2024</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Embedded C, STM32 Microcontrollers, ESP32, PID Control, Bluetooth, Ultrasonic Sensors, Circuit Design</span>
        </ListItem>
        <ListItem>
          <Meta>Documentation</Meta>
          <span>
            <a href="/docs/robotic_wrist_slideshow.pdf" target="_blank" style={{color: '#319795', textDecoration: 'underline'}}>Slideshow</a> • 
            <a href="/docs/robotic_wrist_report.pdf" target="_blank" style={{color: '#319795', textDecoration: 'underline'}}>Systems Report</a>
          </span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Project;
export { getServerSideProps } from '../../components/chakra'
