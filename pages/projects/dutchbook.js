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

import imgDutchbook from '../../public/images/projects/dutchbook.png'

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
    <Layout title="dutchbook">
      <Container maxW="container.lg">
        <Title>
          dutchbook — Prediction Market Coherence Monitor{' '}
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
              src={imgDutchbook.src}
              alt="dutchbook dashboard: live status showing 14,951 markets tracked, 67,617 relation edges and a 17s median violation lifetime, above a breakdown of relation edges by source"
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
                  A prediction market price is a probability, and probabilities
                  have to obey arithmetic. &quot;Bitcoin above $150k&quot;
                  cannot happen without &quot;Bitcoin above $120k&quot; also
                  happening, so the first can never be priced higher than the
                  second. Eight candidates of whom exactly one must win have to
                  sum to a dollar. When prices break rules like these, the
                  contradiction is a fact about the venue that needs no opinion
                  about the world — and a set of bets exists that wins money
                  whatever happens. That set is called a dutch book.
                </P>
                <P>
                  dutchbook extracts 67,617 such relations across 264,128
                  Polymarket markets — 85.4% of the active catalog — checks them
                  continuously against a live order-book feed, and records how
                  long each violation survives. The headline finding is a{' '}
                  <em>median lifetime of 15 seconds</em> across 2,248 closed
                  episodes: half of every logical inconsistency found was gone
                  before you could finish reading about it, which is far too
                  fast to be a person and says the correction is either
                  automated or was never a correction at all.
                </P>
                <P>
                  The more useful half of the project is what it refuses to
                  claim. Only 3.9% of episodes survived being priced against
                  real depth and fees, and the 90 that did trace back to just
                  two relations — both of which turned out to be bugs in this
                  system&apos;s own extractor. The executable-arbitrage count in
                  the report is therefore published as zero.
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
                      Catalog:
                    </Text>{' '}
                    864,077 markets ingested, 14,951 active — 85.4% of the
                    active catalog appears in at least one constraint.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      Constraint graph:
                    </Text>{' '}
                    67,617 relation edges and 24,201 partition groups —
                    threshold ladders 65,249, nested deadlines 2,238,
                    human-reviewed LLM proposals 128, explicit complements 2.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      Lifetime:
                    </Text>{' '}
                    median 15s, p75 27s, p95 5.5m, max 3.6h over 2,248 closed
                    episodes.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      Apparent vs confirmed:
                    </Text>{' '}
                    2,308 episodes, 90 survived live depth and fees — 3.9%. No
                    partition violation was <em>ever</em> executable, because an
                    n-member basket needs n simultaneous fills and pays the
                    spread n times.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      Detection latency:
                    </Text>{' '}
                    median 0.06s — the screen is event-driven off the CLOB
                    WebSocket, not polled; a book update marks only the
                    constraints that market participates in.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      Dashboard:
                    </Text>{' '}
                    6.7s cold, 90&nbsp;ms warm after replacing a TTL cache that
                    was pure overhead with stale-while-revalidate.
                  </ListItem>
                </UnorderedList>
                <P>
                  Every figure in the report is computed from the database at
                  run time by{' '}
                  <Text as="span" fontFamily="mono" fontSize="sm">
                    pnpm report
                  </Text>
                  ; none is written by hand, so a stale number cannot survive a
                  regeneration.
                </P>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* The finding that undercut itself */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                The Analysis That Disproved Its Own Result
              </Heading>
              <VStack spacing={4} align="stretch">
                <P>
                  Median net edge on the confirmed violations was 30.66¢ per
                  share, maximum 59¢. A risk-free thirty cents on a
                  dollar-denominated contract, sitting untouched for sixteen
                  seconds, is not something a venue with real participants
                  leaves lying around — so the report said so before checking,
                  and then checked.
                </P>
                <P>
                  The 90 confirmed episodes were{' '}
                  <strong>2 distinct constraints</strong>, each re-detected 45
                  times as it flickered across the threshold. Both were wrong.
                  &quot;OpenAI does <em>not</em> IPO by 2026&quot; was recorded
                  as entailing &quot;does not IPO by 2027&quot; — true for a
                  positive event, backwards for a negated one. The second didn&apos;t
                  even need the subtlety: a deadline of Dec&nbsp;31 recorded as
                  entailing one of Sept&nbsp;30 is wrong on its face.
                </P>
                <P>
                  This was the second appearance of that class of bug. The first
                  put an inverted direction on 888 markets — the ladder
                  extractor read &quot;hit 35%&quot; as an upward threshold when
                  Polymarket&apos;s own criteria resolve Yes at or{' '}
                  <em>below</em> the value — and produced a $435 &quot;risk-free
                  arbitrage&quot; that paid zero in one of three states. Nothing
                  alerted either time, because nothing was broken: every
                  component downstream did its job flawlessly on a false
                  premise. A reversed entailment is the worst failure mode this
                  system has precisely because it does not fail loudly — it
                  produces a confident, well-formed, fully-priced answer.
                </P>
                <P>
                  That is also why LLM-proposed edges require a recorded human
                  verdict before entering the graph. A missing edge costs an
                  opportunity nobody notices; a reversed one costs money with
                  total confidence.
                </P>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* What it does not claim */}
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
                      The window is hours, not a month:
                    </Text>{' '}
                    4.7 hours across two calendar days. Distributions have
                    n=2,248 behind them and are worth reading; every{' '}
                    <em>rate</em>, weekday effect and intraday pattern is
                    unavailable and is reported as unavailable rather than
                    estimated.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      The size/lifetime hypothesis is unanswerable here:
                    </Text>{' '}
                    Spearman rho is +0.157 — larger contradictions lasted{' '}
                    <em>longer</em>, and the sign holds inside each constraint
                    type, so it is not Simpson&apos;s paradox. But 90.3% of
                    episodes lasted under two 60-second intervals, so for nine
                    in ten the recorded lifetime is the sampling rate rather
                    than the market.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      15 seconds cannot distinguish arbitrage from jitter:
                    </Text>{' '}
                    either automated traders close these gaps faster than a
                    human can act, or independently drifting quotes crossed a
                    threshold and crossed back. The measurement cannot tell
                    those apart, and the report picks neither.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      The fee model has three named weaknesses:
                    </Text>{' '}
                    the taker rate varies 0.04–0.07 by a category no endpoint
                    publishes, so the highest rate is applied to everything —
                    deliberately under-confirming. The cost register is printed
                    from source rather than restated, so an assumption cannot
                    change without the table changing with it.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      Coverage is of markets, not of logic:
                    </Text>{' '}
                    cross-event implications are almost entirely absent, and
                    conditional or compound structure has no representation in
                    the constraint language at all. Every &quot;no
                    violation&quot; means &quot;none among the constraints we
                    know about&quot;.
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
                    Ingest is a reconciliation, not an append:
                  </Text>{' '}
                  each crawl hashes every market and writes one row per changed
                  field to{' '}
                  <Text as="span" fontFamily="mono" fontSize="sm">
                    market_revisions
                  </Text>
                  , with old and new values. Markets that stop appearing are
                  marked{' '}
                  <Text as="span" fontFamily="mono" fontSize="sm">
                    missing_since
                  </Text>{' '}
                  rather than deleted. The payoff is that the change log is
                  evidence — if a resolution rule is silently edited after a
                  market opens, the diff is in the database.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Idempotency is a tested property:
                  </Text>{' '}
                  running the same crawl twice must produce no new rows, no
                  revisions and no moved hashes. The test runs against real
                  Postgres because the properties under test are database
                  properties, and the two runs use different clocks so the one
                  column permitted to differ has genuinely moved. It is the
                  load-bearing test in the repo.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Two stages, because a midpoint is not a price:
                  </Text>{' '}
                  stage 1 screens the whole graph on cached midpoints for
                  nearly nothing; stage 2 fetches live books for the survivors,
                  constructs the correcting basket, walks it level by level and
                  charges fees and slippage. The two disagree 96% of the time
                  and that disagreement is the product — the losers are stored
                  as{' '}
                  <Text as="span" fontFamily="mono" fontSize="sm">
                    apparent
                  </Text>{' '}
                  with the reason.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Trades are priced at the profit-maximising size:
                  </Text>{' '}
                  found by ternary search, since profit is concave in size.
                  Pricing at max executable size was a shipped bug that reported
                  $0.00 on every confirmed trade — break-even by definition —
                  and hid itself by falling below the alert threshold.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    One rate limiter, because the budget is global:
                  </Text>{' '}
                  Polymarket limits per IP, so the bucket,{' '}
                  <Text as="span" fontFamily="mono" fontSize="sm">
                    Retry-After
                  </Text>{' '}
                  parsing and full-jitter backoff live in one module both
                  clients import — guaranteed to agree by being the same code
                  rather than by two copies that agree today.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    It documents where it breaks:
                  </Text>{' '}
                  a load test at 10× the catalog (150,000 markets, 918,000
                  constraints) peaks at 1,124&nbsp;MB against a 512&nbsp;MB
                  machine. It does not get slow, it gets OOM-killed — stage 1
                  materialises the whole graph per run, and the fix is to stream
                  it in batches.
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
                    Market Data Infrastructure / Quantitative Analysis
                  </Text>
                </Box>
                <Box>
                  <Meta>Stack</Meta>
                  <Text mt={2} color={textColor}>
                    TypeScript, Fastify, Postgres via Drizzle, BullMQ on Redis
                  </Text>
                </Box>
                <Box>
                  <Meta>Infra</Meta>
                  <Text mt={2} color={textColor}>
                    Fly.io, Docker Compose, pgvector, testcontainers
                  </Text>
                </Box>
                <Box>
                  <Meta>Data Sources</Meta>
                  <Text mt={2} color={textColor}>
                    Polymarket Gamma REST catalog, CLOB REST order books and
                    WebSocket feed
                  </Text>
                </Box>
                <Box>
                  <Meta>Constraints</Meta>
                  <Text mt={2} color={textColor}>
                    Implication, complement and partition — from threshold
                    ladders, nested deadlines, neg-risk groups and reviewed LLM
                    proposals
                  </Text>
                </Box>
                <Box>
                  <Meta>Tests</Meta>
                  <Text mt={2} color={textColor}>
                    769, with database-backed ones on real Postgres via
                    testcontainers
                  </Text>
                </Box>
                <Box>
                  <Meta>Scale</Meta>
                  <Text mt={2} color={textColor}>
                    864,077 markets, 67,617 relations, 2,308 violation episodes
                  </Text>
                </Box>
                <Box gridColumn={[1, 'span 2']}>
                  <Meta>Links</Meta>
                  <HStack mt={2} spacing={4} flexWrap="wrap">
                    <Link
                      href="https://dutchbook.fly.dev/"
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
                      Live Dashboard
                      <Icon as={ExternalLinkIcon} />
                    </Link>
                    <Link
                      href="https://github.com/stephenqiao1/dutchbook"
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
                      href="https://github.com/stephenqiao1/dutchbook/blob/main/docs/BLOG.md"
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
                      Write-up
                      <Icon as={ExternalLinkIcon} />
                    </Link>
                    <Link
                      href="https://github.com/stephenqiao1/dutchbook/blob/main/docs/REPORT.md"
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
                      Full Report
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
