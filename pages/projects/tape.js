import {
  Container,
  Badge,
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Divider,
  useColorModeValue,
  Link,
  SimpleGrid,
  Icon,
  UnorderedList,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { motion } from 'framer-motion'

import imgTape from '../../public/images/projects/tape.png'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

const Project = () => {
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const cardBg = useColorModeValue('white', 'gray.800')
  const linkColor = useColorModeValue('teal.600', 'teal.300')

  const cardProps = {
    bg: cardBg,
    borderRadius: 'xl',
    p: 6,
    borderWidth: '1px',
    borderColor: borderColor,
    boxShadow: 'md',
    _hover: {
      boxShadow: 'xl',
      transform: 'translateY(-2px)'
    },
    transition: 'all 0.3s'
  }

  return (
    <Layout title="tape">
      <Container maxW="container.lg">
        <Title>
          tape — Order Book Replay &amp; Market Surveillance{' '}
          <Badge colorScheme="teal">2026</Badge>
        </Title>

        <MotionVStack
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          spacing={8}
          align="stretch"
        >
          {/* Hero */}
          <MotionBox variants={itemVariants}>
            <WorkImage
              src={imgTape.src}
              alt="tape viewer: the AAPL order book ladder replaying at 1x beside time & sales, with a layering alert selected in the alerts queue"
            />
          </MotionBox>

          {/* Project Overview */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                Project Overview
              </Heading>
              <VStack spacing={4} align="stretch">
                <P>
                  Market abuse is not visible in a trade print. Layering,
                  spoofing and quote stuffing are patterns in the order book
                  over time — orders placed to be seen and cancelled before they
                  ever trade. By the time an event reaches a trade feed the
                  evidence has already been deleted, so a surveillance system
                  has to reconstruct the book from the raw message stream and
                  put a human back at any microsecond of the day to look at it.
                </P>
                <P>
                  tape replays a full trading day of NASDAQ order flow message
                  by message — 400,391 AAPL messages — reconstructs the limit
                  order book, runs five market-abuse detectors over it, and
                  streams the result to a browser viewer with a price ladder,
                  a trade tape, and an alert queue. Clicking an alert seeks to
                  500&nbsp;ms <em>before</em> the pattern and pauses, because at
                  any speed above 1x it would be over before it could be
                  watched.
                </P>
                <P>
                  The whole repository is built around one rule: same input
                  bytes, same output book, on any machine, at any time. That is
                  why the book core is pure — no clock, no randomness, no I/O —
                  and why a finding is still defensible months after it fired.
                </P>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* The numbers */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                The Numbers
              </Heading>
              <VStack spacing={4} align="stretch">
                <UnorderedList spacing={2} color={textColor} fontSize="sm">
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      Binary ITCH 5.0 parsing:
                    </Text>{' '}
                    100,280,207 msg/sec at{' '}
                    <Text as="span" fontFamily="mono" fontSize="sm">
                      0
                    </Text>{' '}
                    bytes allocated per message — measured with HotSpot&apos;s
                    thread allocation counter and JMH{' '}
                    <Text as="span" fontFamily="mono" fontSize="sm">
                      -prof gc
                    </Text>{' '}
                    over the real 821&nbsp;MB file, not asserted in a comment.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      Book reconstruction:
                    </Text>{' '}
                    4,221,119 msg/sec — a full trading day in ~95&nbsp;ms.
                    Ingest to TimescaleDB runs 358,908 rows/sec.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      Seek to any timestamp:
                    </Text>{' '}
                    p50 9.78&nbsp;ms, p99 17.29&nbsp;ms — snapshot-anchored, so
                    it never replays the day to get somewhere.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      Viewer at 1000x:
                    </Text>{' '}
                    119.1 / 119.9 / 120.2 fps min/p50/max against 12,800–17,600
                    msg/sec, zero frames dropped.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      Accuracy:
                    </Text>{' '}
                    400,391 comparisons against the vendor&apos;s own
                    reconstruction, 0 divergences.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      Alerts, full day:
                    </Text>{' '}
                    80 — layering 9, spoofing 26, quote-stuffing 13,
                    momentum-ignition 32, marking-the-close 0.
                  </ListItem>
                </UnorderedList>
                <P>
                  Every figure is reproducible from the repository, on your own
                  hardware, with a documented command — and each one names its
                  method and machine.
                </P>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* What the tests prove */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                What the Tests Actually Prove
              </Heading>
              <VStack spacing={4} align="stretch">
                <P>
                  The claim is reproduction, so the tests are built to be able
                  to <em>fail</em>. A fixture generated from this engine&apos;s
                  own output would pass however wrong the engine was — so none
                  of them are.
                </P>
                <UnorderedList spacing={2} color={textColor} fontSize="sm">
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      Checked against the vendor, not itself:
                    </Text>{' '}
                    the golden test replays all 400,391 messages and compares
                    the top 9 levels against LOBSTER&apos;s own orderbook file
                    after every single one. The browser suite asserts against a
                    fixture derived from that same vendor file by script.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      It proves exactly nine levels, and says so:
                    </Text>{' '}
                    a level-10 extract is a windowed view, so the 10th level is
                    not reconstructible by anyone from this feed. Measured:
                    189,448 transitions fully explained by their message,
                    210,942 changing only the deepest visible level, and 0
                    unexplained changes inside the window.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      The ITCH parser is checked against an independent decoder:
                    </Text>{' '}
                    every field of the first 100 messages of all nine handled
                    types asserted against a Python decoder written from the
                    same specification and sharing no code — then a whole
                    symbol&apos;s day replayed into both books, all 203 price
                    levels matching on both sides.
                  </ListItem>
                </UnorderedList>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* The AI layer */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                The AI Layer Explains; It Never Decides
              </Heading>
              <VStack spacing={4} align="stretch">
                <P>
                  Detection is arithmetic over the message stream and the
                  reconstructed book — no model, no clock, no randomness. An
                  alert is an accusation, and the thing that decides whose order
                  flow gets looked at should be a rule a person wrote, can read,
                  and can be argued out of. &quot;The model flagged it&quot; is
                  not a reason; a threshold with a documented false-positive
                  section is.
                </P>
                <P>
                  So the model gets the job rules are bad at: turning a{' '}
                  <Text as="span" fontFamily="mono" fontSize="sm">
                    jsonb
                  </Text>{' '}
                  payload of order ids and half-ticks into a sentence a reviewer
                  can read at 4pm on a Friday. Narratives are cached,
                  cost-tracked, and never gate an alert — the evidence is
                  complete whether or not a narrative was ever generated.
                </P>
                <P>
                  A complexity router sends routine alerts to Claude Haiku 4.5
                  and the hard ones to Claude Opus 5: 65 simple and 15 complex
                  narratives came to $0.126 for the day against $0.363 all-
                  frontier — 65.2% saved, at $0.00158 per alert. The router
                  emits a complexity class rather than a model name, so the
                  routing decision stays auditable independently of which model
                  is wired to it, and cache savings are reported separately so
                  routing is never credited with money it did not save.
                </P>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Limitations */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                What It Does Not Claim
              </Heading>
              <VStack spacing={4} align="stretch">
                <UnorderedList spacing={2} color={textColor} fontSize="sm">
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      The detectors do not identify manipulation:
                    </Text>{' '}
                    they identify shapes manipulation tends to leave, and every
                    one has a legitimate twin. A market maker repricing a ladder{' '}
                    <em>is</em> the shape of layering; cancel-and-replace{' '}
                    <em>is</em> the shape of spoofing — a replacement test cut
                    that from 138 alerts to 26 without eliminating it.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      The thresholds are not calibrated to any regulatory
                      standard:
                    </Text>{' '}
                    they were fitted to one criterion — a reviewable queue on
                    one day of one symbol, about twelve alerts an hour. Every
                    sweep and what it cost is documented.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      There is no participant identifier:
                    </Text>{' '}
                    LOBSTER carries none, so a &quot;stack&quot; of four orders
                    may be four unrelated traders. Real surveillance runs on
                    account-attributed data; this runs on anonymous flow, which
                    caps what any alert can claim.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      Single symbol, single day, single venue:
                    </Text>{' '}
                    AAPL, 2012-06-21, NASDAQ. No cross-venue view and no NBBO
                    context — an order that looks like a spoof here may be one
                    leg of a legitimate strategy somewhere this system cannot
                    see.
                  </ListItem>
                </UnorderedList>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Architecture */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                Architecture &amp; Engineering
              </Heading>
              <UnorderedList spacing={2} color={textColor} fontSize="sm">
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Dependencies point inward only:
                  </Text>{' '}
                  <Text as="span" fontFamily="mono" fontSize="sm">
                    api → adapter → port → model → book
                  </Text>
                  . The pure core compiles if Spring is deleted from the build;
                  the clock is a port, so replay speed is a parameter rather
                  than a wall-clock dependency.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Zero-copy ingest:
                  </Text>{' '}
                  the ITCH reader is a memory-mapped cursor rather than an
                  iterator, which is what makes the per-message allocation
                  count zero — and it refuses a file over the 2&nbsp;GB{' '}
                  <Text as="span" fontFamily="mono" fontSize="sm">
                    FileChannel.map
                  </Text>{' '}
                  cap rather than silently reading a prefix.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Streaming path:
                  </Text>{' '}
                  TimescaleDB holds messages, snapshots and alerts; a replay
                  engine serves SNAPSHOT / DELTA / TRADES over a WebSocket with
                  a REST control plane for play, pause, seek and speed.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    One command to a running stack:
                  </Text>{' '}
                  <Text as="span" fontFamily="mono" fontSize="sm">
                    ./scripts/stack.sh up
                  </Text>{' '}
                  builds the jar and bundle, starts four containers, ingests
                  400,391 messages, runs the detector pass and waits until the
                  session is queryable. Market data is never redistributed —
                  the fetch script pulls from the vendor with SHA-256
                  verification before anything is written.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    CI in under ten minutes:
                  </Text>{' '}
                  six independent jobs in parallel, including the full compose
                  stack with the browser and load suites.
                </ListItem>
              </UnorderedList>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Project Information */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={6}
              >
                Project Information
              </Heading>
              <SimpleGrid columns={[1, 2]} spacing={6}>
                <Box>
                  <Meta>Role</Meta>
                  <Text mt={2} color={textColor}>
                    Solo Developer
                  </Text>
                </Box>
                <Box>
                  <Meta>Type</Meta>
                  <Text mt={2} color={textColor}>
                    Market Data Infrastructure / Surveillance
                  </Text>
                </Box>
                <Box>
                  <Meta>Engine</Meta>
                  <Text mt={2} color={textColor}>
                    Java 21, Spring Boot, JMH, Testcontainers
                  </Text>
                </Box>
                <Box>
                  <Meta>Viewer</Meta>
                  <Text mt={2} color={textColor}>
                    React, TypeScript, Vite, Zustand, AG Grid
                  </Text>
                </Box>
                <Box>
                  <Meta>Data &amp; Infra</Meta>
                  <Text mt={2} color={textColor}>
                    TimescaleDB, Docker Compose, LOBSTER CSV and NASDAQ
                    TotalView-ITCH 5.0
                  </Text>
                </Box>
                <Box>
                  <Meta>Detectors</Meta>
                  <Text mt={2} color={textColor}>
                    Layering, spoofing, quote-stuffing, momentum-ignition,
                    marking-the-close
                  </Text>
                </Box>
                <Box>
                  <Meta>AI</Meta>
                  <Text mt={2} color={textColor}>
                    Claude Haiku 4.5 / Opus 5 narrative router, cached and
                    cost-tracked
                  </Text>
                </Box>
                <Box>
                  <Meta>Scale</Meta>
                  <Text mt={2} color={textColor}>
                    400,391 messages replayed, 0 book divergences, 80 alerts
                  </Text>
                </Box>
                <Box gridColumn={[1, 'span 2']}>
                  <Meta>Links</Meta>
                  <HStack mt={2} spacing={4} flexWrap="wrap">
                    <Link
                      href="https://github.com/stephenqiao1/tape"
                      target="_blank"
                      color={linkColor}
                      _hover={{
                        textDecoration: 'underline',
                        transform: 'translateX(4px)'
                      }}
                      transition="all 0.2s"
                      display="flex"
                      alignItems="center"
                      gap={1}
                    >
                      GitHub Repository
                      <Icon as={ExternalLinkIcon} />
                    </Link>
                  </HStack>
                </Box>
              </SimpleGrid>
            </Box>
          </MotionBox>
        </MotionVStack>
      </Container>
    </Layout>
  )
}

export default Project
export { getServerSideProps } from '../../components/chakra'
