import {
  Container,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  Divider,
  VStack
} from '@chakra-ui/react'
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
import thumbCpen455 from '../public/images/projects/cpen455_project.jpg'
import thumbBlockchainFL from '../public/images/projects/blockchain_fl.jpg'
import thumbLeaseCheck from '../public/images/projects/leasecheck.png'
import thumbSemg from '../public/images/projects/semg_decoder.png'
import thumbMendwave from '../public/images/projects/mendwave.png'
import thumbApogee from '../public/images/projects/apogee.png'
import thumbOrbitdesk from '../public/images/projects/orbitdesk.png'

const Projects = () => {
  const headingColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Layout>
      <Container maxW="container.lg">
        <VStack spacing={8} align="stretch">
          {/* Page Title */}
          <Section delay={0.1}>
            <Heading
              as="h1"
              size="xl"
              fontWeight="bold"
              mb={2}
              color={headingColor}
            >
              Projects
            </Heading>
            <Text fontSize="md" color={textColor}>
              A collection of software and hardware projects I&apos;ve worked on.
            </Text>
          </Section>

          <Divider borderColor={borderColor} />

          {/* Software Projects Section */}
          <Section delay={0.2}>
            <Heading
              as="h2"
              size="lg"
              fontWeight="semibold"
              mb={6}
              color={headingColor}
            >
              Software Projects
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={8}>
              <WorkGridItem
                id="orbitdesk"
                title="OrbitDesk — Space Market Intelligence"
                thumbnail={thumbOrbitdesk}
              >
                A space-market intelligence terminal putting the live orbital
                catalog, the commercial supplier landscape, and the launch market
                on one console — 16,000+ objects propagated with SGP4 in a Web
                Worker and rendered in a single GPU draw call at 60 fps.
              </WorkGridItem>
              <WorkGridItem
                id="apogee"
                title="Apogee — Game Backend Platform"
                thumbnail={thumbApogee}
              >
                A seven-service game backend platform in Go: skill-based matchmaking,
                Kubernetes session allocation, a NATS-to-Parquet telemetry pipeline,
                deterministic replay, live-ops config, and synthetic load generation —
                deployed to k3d with ArgoCD and full observability.
              </WorkGridItem>
              <WorkGridItem
                id="mendwave"
                title="Mendwave — AI Speech Editing"
                thumbnail={thumbMendwave}
              >
                A production AI speech editor: change a word in the transcript and
                only that span is regenerated in the original speaker&apos;s voice,
                machine-verified, and spliced back into an otherwise bit-identical
                master — with no stored voiceprints. Live with paying customers.
              </WorkGridItem>
              <WorkGridItem
                id="snake_game"
                title="Snake Game"
                thumbnail={thumbSnakeGame}
              >
                In this rendition of the classic Snake Game, players guide a snake
                to collect preys scattered across the playing field.
              </WorkGridItem>
              <WorkGridItem
                id="chat_application"
                title="Chat Application"
                thumbnail={thumbChatApplication}
              >
                As a vital component of our CPEN333A course project, we have
                developed a Simple Chat Application.
              </WorkGridItem>
              <WorkGridItem id="prodoro" title="Prodoro" thumbnail={thumbProdoro}>
                A fun productivity website with a pomodoro timer, a tasklist, and
                a bunch of unique customizations and games
              </WorkGridItem>
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
              <WorkGridItem
                id="cpen455_project"
                title="Few-Shot Learning for Spam Detection with LLMs"
                thumbnail={thumbCpen455}
              >
                A machine learning project exploring Bayesian Inverse Classification
                for spam detection using SmolLM2-135M-Instruct. Evaluates Zero-Shot,
                Naive Prompting, and Full Fine-Tuning approaches on the Enron dataset.
              </WorkGridItem>
              <WorkGridItem
                id="blockchain_fl"
                title="Blockchain-Based Federated Learning with Adaptive DP"
                thumbnail={thumbBlockchainFL}
              >
                A federated learning system combining blockchain coordination, IPFS storage,
                and adaptive differential privacy for trustless, privacy-preserving collaborative ML.
              </WorkGridItem>
              <WorkGridItem
                id="leasecheck"
                title="LeaseCheck — Lease Compliance Auditor"
                thumbnail={thumbLeaseCheck}
              >
                An AI-powered auditor that analyzes residential lease PDFs and flags
                clauses violating landlord-tenant law, citing the specific legal rule.
                Uses a RAG pipeline with pgvector retrieval and structured LLM review.
              </WorkGridItem>
              <WorkGridItem
                id="semg_decoder"
                title="sEMG Gesture Decoder"
                thumbnail={thumbSemg}
              >
                A real-time hand gesture classifier that decodes surface EMG signals
                as they stream in, predicting gestures at ~1 ms latency. Built on a
                causal streaming pipeline over the Ninapro DB2 dataset with SVM/CNN models.
              </WorkGridItem>
            </SimpleGrid>
          </Section>

          <Divider borderColor={borderColor} />

          {/* Hardware Projects Section */}
          <Section delay={0.3}>
            <Heading
              as="h2"
              size="lg"
              fontWeight="semibold"
              mb={6}
              color={headingColor}
            >
              Hardware Projects
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={8}>
              <WorkGridItem
                id="elec291_project"
                title="Magnetic Field Controlled Robot"
                thumbnail={thumbMagneticCar}
              >
                A magnetic field controlled car with a PIC32 Timer Interrupt that
                measures signal pauses from a joystick controller at millisecond
                precision, which then converts to movement instructions
              </WorkGridItem>
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
              <WorkGridItem
                id="robotic_wrist"
                title="High-Frequency Shape-Drawing Robotic Wrist"
                thumbnail={thumbRoboticWrist}
              >
                A 2 DOF robotic wrist with laser pointer end effector capable of
                drawing complex shapes at high frequencies. Features PID control,
                sensor integration with FDD, and Bluetooth remote control via ESP32.
              </WorkGridItem>
            </SimpleGrid>
          </Section>
        </VStack>
      </Container>
    </Layout>
  )
}

export default Projects
