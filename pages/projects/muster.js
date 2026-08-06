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

import imgMuster from '../../public/images/projects/muster.png'

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

  const mono = { as: 'span', fontFamily: 'mono', fontSize: 'sm' }

  return (
    <Layout title="Muster">
      <Container maxW="container.lg">
        <Title>
          Muster — Security Dispatch Agent <Badge colorScheme="teal">2026</Badge>
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
              src={imgMuster.src}
              alt="Muster running: the ops console on the left showing resolved incidents and a decision log with the agent's rationale for each dispatch, and a guard's phone on the right showing two assignments through dispatched, acknowledged and on-scene"
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
                  Muster watches a secured site and decides who should respond
                  when something happens. Sensors report activity — door
                  contacts, motion zones, camera detections — and an agent
                  judges whether it matters, picks the right responder, sends
                  them, and confirms they took the job. A perimeter breach fires
                  on the ops console; seconds later the nearest guard&apos;s
                  phone is ringing with the assignment and the reasoning behind
                  it is in the decision log.
                </P>
                <P>
                  The interesting problem is not detection, it is{' '}
                  <em>choosing</em>. A patrol robot is fast and can observe with
                  thermal and night vision but cannot intervene or open a door.
                  A guard is slower, can act, and may be off-shift or already
                  assigned. Some events want the robot sent ahead as a scout to
                  resolve ambiguity before a person is committed. That judgment
                  is what the system exists to make, and to make legible.
                </P>
                <P>
                  So the design principle is a split: hard constraints in SQL,
                  soft judgment in the model. Capability and availability are
                  filtered deterministically in the query, where the model
                  cannot argue with them — an LLM must never be able to conclude
                  that a robot can unlock a door. Claude then ranks the
                  shortlist on distance, severity, position staleness and what
                  else is open.
                </P>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Constraint layer */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                Making the Wrong Answer Unrepresentable
              </Heading>
              <VStack spacing={4} align="stretch">
                <P>
                  Telling a model not to pick an ineligible responder is a
                  request. The eligible responder ids are instead compiled into
                  the tool schema as an{' '}
                  <Text {...mono}>enum</Text> on each call, alongside a{' '}
                  <Text {...mono}>strict</Text> schema, so an ineligible pick is
                  not a rejected output — it is an unrepresentable one. The
                  action list is built the same way: {'"'}dispatch_guard{'"'} is
                  only offered when a guard actually passed the filter.
                </P>
                <P>
                  Two layers sit behind that for what a schema cannot express.
                  Cross-field rules — a scout-only robot named as primary, an{' '}
                  <Text {...mono}>ignore</Text> that names a responder — get one
                  correction round fed back as an error tool result. Then a
                  normalisation pass demotes a scout-only robot to{' '}
                  <Text {...mono}>scout</Text> regardless of what the model
                  said. The constraint layer has the last word, not the first.
                </P>
                <P>
                  Failure resolves to <Text {...mono}>escalate</Text>, never to
                  silence: an unreachable API, a refusal, or two invalid
                  attempts all produce an escalation with the reason written
                  into the rationale. A broken agent should surface as
                  &quot;needs a human&quot;. Running without an API key does the
                  same thing — the pipeline still runs end to end, only the
                  judgment layer is absent.
                </P>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Decision as the product */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                The Decision Is the Product
              </Heading>
              <VStack spacing={4} align="stretch">
                <P>
                  An agent whose reasoning cannot be inspected is an
                  if-statement with extra latency. Every decision is stored with
                  its rationale and a{' '}
                  <Text {...mono}>state_snapshot</Text> of exactly what the
                  agent saw — the event, the sensor, every responder with
                  distance and position age, the eligibility sets, and the open
                  incidents. The agent reads that state back out of the database
                  rather than receiving it from the request handler, which is
                  what makes the snapshot an honest record rather than a
                  plausible reconstruction.
                </P>
                <P>
                  <Text fontWeight="medium" as="span">
                    Deciding to ignore is still a decision
                  </Text>{' '}
                  and gets a row, with{' '}
                  <Text {...mono}>incident_id</Text> nullable on purpose.
                  Logging only dispatches would make false negatives
                  unmeasurable, and in security the missed event is the
                  expensive failure. That also makes the eval harness cheap to
                  build later: replaying a stored snapshot through a changed
                  prompt is a pure function.
                </P>
                <P>
                  Decision, incident and assignment are written in one
                  transaction, with{' '}
                  <Text {...mono}>pg_notify</Text> issued inside it — delivered
                  on commit, so a listener can never see a notification for a
                  row that rolled back.
                </P>
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
                    Fan-out via Postgres LISTEN/NOTIFY:
                  </Text>{' '}
                  an SSE connection is a live socket held in memory, and a
                  database row cannot reach it on its own. In-process pub/sub
                  would work until a second instance exists behind a load
                  balancer;{' '}
                  <Text {...mono}>LISTEN</Text>/<Text {...mono}>NOTIFY</Text>{' '}
                  survives that and adds no infrastructure. The payload is an id
                  rather than the row — 8000-byte cap, and the listener should
                  refetch anyway so no client acts on a stale snapshot.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    SSE over WebSocket, with the gap named:
                  </Text>{' '}
                  the traffic is one-way and{' '}
                  <Text {...mono}>EventSource</Text> handles reconnection, so
                  bidirectional lifecycle management bought nothing — guard acks
                  and check-ins are fine as plain POSTs. Web Push is the correct
                  production answer because it is the only one that reaches a
                  locked phone, and it is recorded as a real gap rather than a
                  design choice.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Notifications are not durable, and that is survivable:
                  </Text>{' '}
                  if nothing is listening when one fires, it is gone. Postgres
                  is the source of truth, so on reconnect the client refetches
                  its open assignments. That is what happens when a guard loses
                  signal in a stairwell.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    The simulator is a separate service, not a module:
                  </Text>{' '}
                  it posts events over HTTP exactly as real hardware would, so
                  the backend has no idea its input is fake. The cost is a
                  process to run; the payoff is that swapping in real sensors is
                  configuration rather than a refactor.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Immutable facts never join out to mutable state:
                  </Text>{' '}
                  <Text {...mono}>EVENT</Text> carries its own position instead
                  of reading it from the sensor, so repositioning a sensor later
                  cannot silently relocate every historical event. Events carry
                  two clocks —{' '}
                  <Text {...mono}>occurred_at</Text> in simulator time,{' '}
                  <Text {...mono}>recorded_at</Text> in wall clock — because the
                  simulator runs faster than real time and one column would be
                  ambiguous.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Assignments are their own table because of the scout
                    pattern:
                  </Text>{' '}
                  the robot goes first to resolve ambiguity and a guard follows
                  based on what it finds. That is one incident with two
                  assignments and a{' '}
                  <Text {...mono}>role</Text> column, which a direct
                  event-to-responder link cannot express.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    The deployment target is a constraint, not a default:
                  </Text>{' '}
                  open SSE connections and a dedicated{' '}
                  <Text {...mono}>LISTEN</Text> connection rule out a serverless
                  runtime and scale-to-zero, so Fly.io pins{' '}
                  <Text {...mono}>min_machines_running = 1</Text>. A
                  transaction-mode PgBouncer in front of this would silently
                  stop delivery — documented rather than discovered.
                </ListItem>
              </UnorderedList>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Scope */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                What Was Cut, and Why
              </Heading>
              <VStack spacing={4} align="stretch">
                <P>
                  The spec is written as much around what is out of scope as in
                  it, and each exclusion carries the condition that would bring
                  it back.
                </P>
                <UnorderedList spacing={2} color={textColor} fontSize="sm">
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      Voice reports and incident write-ups:
                    </Text>{' '}
                    the highest-value next feature, deliberately deferred. The
                    dispatch decision is the hard part; report capture is a
                    known pattern.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      Map view:
                    </Text>{' '}
                    a list conveys the same decision data. A map is presentation
                    cost with no new engineering.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      Replay and eval harness:
                    </Text>{' '}
                    designed for but not built — the snapshot that makes it
                    possible is already recorded on every decision.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      PostGIS:
                    </Text>{' '}
                    rejected for plain x/y floats and Euclidean distance. The
                    site is a coordinate plane, not a place; real geodesy adds a
                    dependency without changing an answer.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      Auth, multi-tenancy, native mobile:
                    </Text>{' '}
                    one hardcoded site, and a PWA. The real losses are push and
                    background location, noted as a tradeoff rather than an
                    oversight.
                  </ListItem>
                </UnorderedList>
                <P>
                  The spec also ends with the four questions a client would have
                  to answer — chief among them the relative cost of a false
                  dispatch versus a missed real event, which sets the
                  agent&apos;s entire decision threshold and is currently a
                  guess.
                </P>
              </VStack>
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
                    Agentic Dispatch System / Real-Time Operations Tooling
                  </Text>
                </Box>
                <Box>
                  <Meta>Stack</Meta>
                  <Text mt={2} color={textColor}>
                    Next.js App Router, TypeScript (strict), Postgres via
                    Drizzle ORM
                  </Text>
                </Box>
                <Box>
                  <Meta>Agent</Meta>
                  <Text mt={2} color={textColor}>
                    Claude Opus 5 via the Anthropic SDK, strict tool schema with
                    eligibility baked into the enums
                  </Text>
                </Box>
                <Box>
                  <Meta>Real-Time</Meta>
                  <Text mt={2} color={textColor}>
                    Server-Sent Events fanned out from a dedicated Postgres
                    LISTEN/NOTIFY connection
                  </Text>
                </Box>
                <Box>
                  <Meta>Infra</Meta>
                  <Text mt={2} color={textColor}>
                    Fly.io as a long-running Node process, Docker Compose,
                    pnpm
                  </Text>
                </Box>
                <Box>
                  <Meta>Surfaces</Meta>
                  <Text mt={2} color={textColor}>
                    Ops console, guard PWA, and an out-of-process site simulator
                    posting events like real hardware
                  </Text>
                </Box>
                <Box>
                  <Meta>Data Model</Meta>
                  <Text mt={2} color={textColor}>
                    Six tables across three tiers — configuration, immutable
                    facts, live state
                  </Text>
                </Box>
                <Box gridColumn={[1, 'span 2']}>
                  <Meta>Links</Meta>
                  <HStack mt={2} spacing={4} flexWrap="wrap">
                    <Link
                      href="https://github.com/stephenqiao1/muster"
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
                    <Link
                      href="https://github.com/stephenqiao1/muster/blob/main/SPEC.md"
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
                      Spec
                      <Icon as={ExternalLinkIcon} />
                    </Link>
                    <Link
                      href="https://github.com/stephenqiao1/muster/blob/main/ARCHITECTURE.md"
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
                      Architecture
                      <Icon as={ExternalLinkIcon} />
                    </Link>
                    <Link
                      href="https://github.com/stephenqiao1/muster/blob/main/DATA_MODEL.md"
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
                      Data Model
                      <Icon as={ExternalLinkIcon} />
                    </Link>
                    <Link
                      href="https://github.com/stephenqiao1/muster/blob/main/docs/demo.mp4"
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
                      Demo Video
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
