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
    <Layout title="gesture_cv">
      <Container>
        <Title>
          Gesture-Controlled Light System w/ Computer Vision<Badge>2023</Badge>
        </Title>
        <P>
          - Real-Time Gesture Recognition: Implemented using Python and the MediaPipe library, the system can accurately recognize a variety of hand gestures in real-time.
        </P>
        <P>
          - IoT Light Control: Integrated a relay module with a Raspberry Pi 4 to control a USB-powered lamp based on the recognized gestures.
        </P>
        <P>
          - Safety and Efficiency: Designed with safety in mind, the system uses a relay module to isolate the Raspberry Pi from the high voltage, ensuring safe operation.
        </P>
        <List ml={4} my={4}>
          <ListItem>
          <Meta>Computer Vision</Meta>
          <Link href="https://github.com/stephenqiao1/gesture_controlled_light">
          https://github.com/stephenqiao1/gesture_controlled_light{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Hardware: Raspberry Pi 4, USB Camera, Relay Module, USB-powered Lamp</span>
          <span>Software: Python, OpenCV, MediaPipe</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
  
  export default Project;
  export { getServerSideProps } from '../../components/chakra'