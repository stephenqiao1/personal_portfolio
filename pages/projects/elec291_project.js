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
    <Layout title="elec291_project">
      <Container>
        <Title>
          Magnetic Field Controlled Robot <Badge>2023</Badge>
        </Title>
        <P>
          - A magnetic field controlled car with a PIC32 Timer Interrupt that measures signal pauses from a joystick controller at millisecond precision, which then converts to movement instructions.
        </P>
        <P>
          - Implemented a following mode in the car, which tracks the transmitter at up to 100cm by detecting the strength of the magnetic field and signal strength difference between the car&apos;s left and right inductors.
        </P>
        <P>
          - Created a &rsquo;Go Home&rsquo; extra feature for the car that allows it to backtrack its movements and return to its starting location
using an algorithm programmed on the PIC32 in Embedded C.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Demo</Meta>
            <video width="320" height="240" controls>
              <source src="/videos/elec291_project2.mp4" type="video/mp4" />
            </video>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Embedded C, STM32 and PIC32 Microcontrollers, Circuit Design</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
  
  export default Project;
  export { getServerSideProps } from '../../components/chakra'