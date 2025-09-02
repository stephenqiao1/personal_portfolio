import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbProdoro from '../public/images/projects/prodoro.jpg'
import thumbMagneticCar from '../public/images/projects/elec291_project.jpg'
import thumbTsp from '../public/images/projects/tsp_sim.jpg'
import thumbGesture from '../public/images/projects/gesture.jpg'
import thumbSnakeGame from '../public/images/projects/snake_game.png'
import thumbChatApplication from '../public/images/projects/chat_application.png'
import thumbRoboticWrist from '../public/images/projects/robotic_wrist.jpg'

const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} my={4}>
          Projects
        </Heading>

        {/* Software Projects Section */}
        <Heading as="h4" fontSize={18} mb={4}>
          Software Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="snake_game"
              title="Snake Game"
              thumbnail={thumbSnakeGame}
            >
              In this rendition of the classic Snake Game, players guide a snake
              to collect preys scattered across the playing field.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="chat_application"
              title="Chat Application"
              thumbnail={thumbChatApplication}
            >
              As a vital component of our CPEN333A course project, we have
              developed a Simple Chat Application.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="prodoro" title="Prodoro" thumbnail={thumbProdoro}>
              A fun productivity website with a pomodoro timer, a tasklist, and
              a bunch of unique customizations and games
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="tsp_sim"
              title="Unity TSP Algorithm Visualizer"
              thumbnail={thumbTsp}
            >
              This project is a Unity-based application that visualizes various
              algorithms for solving the Traveling Salesman Problem (TSP). It
              provides a graphical interface to place cities on a 2D grid and
              then run different algorithms to find the shortest path that
              visits all cities.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        {/* Hardware Projects Section */}
        <Heading as="h4" fontSize={18} mt={10} mb={4}>
          Hardware Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="elec291_project"
              title="Magnetic Field Controlled Robot"
              thumbnail={thumbMagneticCar}
            >
              A magnetic field controlled car with a PIC32 Timer Interrupt that
              measures signal pauses from a joystick controller at millisecond
              precision, which then converts to movement instructions
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="gesture_cv"
              title="Gesture-Controlled Light w/ Computer Vision"
              thumbnail={thumbGesture}
            >
              This project showcases the integration of computer vision and IoT
              to create a gesture-controlled lighting system. Utilizing a
              Raspberry Pi 4 and a USB camera, the system captures real-time
              video to recognize specific hand gestures, which then triggers a
              relay module to control a light source.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="robotic_wrist"
              title="High-Frequency Shape-Drawing Robotic Wrist"
              thumbnail={thumbRoboticWrist}
            >
              A 2 DOF robotic wrist with laser pointer end effector capable of
              drawing complex shapes at high frequencies. Features PID control,
              sensor integration with FDD, and Bluetooth remote control via ESP32.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
