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

import imgPapertrail from '../../public/images/projects/papertrail.png'

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
    <Layout title="Paper Trail">
      <Container maxW="container.lg">
        <Title>
          Paper Trail — Adversarial Evals for Document AI{' '}
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
              src={imgPapertrail.src}
              alt="Paper Trail round-by-round results: recall, precision and false-alarm rate over rounds beside a recall-by-error-type heatmap"
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
                  Static evals of document AI measure a fixed test set, so they
                  only report how a model does on the errors someone already
                  thought to write down. Paper Trail runs a deterministic
                  simulated economy instead — contracts, invoices and bank
                  statements with errors injected from a tagged taxonomy — and
                  puts an adaptive adversary in the loop that reweights
                  injections toward whatever the auditor misses, then lets an LLM
                  propose entirely new error types.
                </P>
                <P>
                  Each round the simulator generates honest economic activity,
                  the adversary picks which errors to inject and at what
                  difficulty, and an agentic LLM auditor investigates the
                  rendered documents through four read-only tools before emitting
                  structured findings. A scorer matches findings against a
                  canonical ground-truth event log; the adversary updates a
                  Thompson-sampling posterior over 24 arms, rewarded when the
                  auditor misses.
                </P>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* The negative result */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                The Headline Is Negative — And That&apos;s the Point
              </Heading>
              <VStack spacing={4} align="stretch">
                <P>
                  Across 25 audited rounds the adversary never found a recall
                  blind spot. The adaptive arm scored 0.959 mean recall against
                  0.960 for the static control on an identical seed — no
                  measurable effect, and no error type collapsed.
                </P>
                <UnorderedList spacing={2} color={textColor}>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      No reward signal:
                    </Text>{' '}
                    the auditor missed 4 of 94 scored injections. Thompson
                    sampling over 24 arms cannot concentrate on a ~4% base rate —
                    final posterior means span 0.12–0.29, so sampling stays
                    effectively uniform.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      The exploration floor eats the budget:
                    </Text>{' '}
                    24 arms forced once every 5 rounds is 4.8 mandatory slots out
                    of 10 per round — ~48% of every plan is exploration by
                    construction.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      Wrong axis:
                    </Text>{' '}
                    reward is 1 iff the auditor <em>missed</em>. Recall is
                    saturated at ~0.96 while precision is the real weakness —
                    0.658 mean, 1–10 false alarms per round. A miss-based
                    objective is structurally blind to it.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      LLM-proposed errors didn&apos;t help:
                    </Text>{' '}
                    two novel templates passed the schema and both were caught
                    every time they were injected — neither beat any hand-built
                    type.
                  </ListItem>
                </UnorderedList>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Two results that were not results */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                Two Results That Were Not Results
              </Heading>
              <VStack spacing={4} align="stretch">
                <P>
                  Rounds 10 and 13 recorded recall 0.00 with zero findings —
                  exactly the headline this project was built to find, and false.
                  The tell was that both rounds also missed error types the
                  auditor catches reliably. Re-running round 10 against its saved
                  documents returned 24 findings where the original returned 0.
                </P>
                <P>
                  Root cause: the final answer must carry every finding in one
                  JSON object and{' '}
                  <Text as="span" fontFamily="mono" fontSize="sm">
                    max_tokens_per_turn
                  </Text>{' '}
                  was 4096. A round with many findings truncated the JSON
                  mid-object, the retry truncated identically, salvage returned an
                  empty list, and the scorer faithfully recorded recall 0.00 —
                  which the adversary then learned from. Uncorrected, the data
                  claimed an LLM-invented error type defeated the entire
                  hand-built taxonomy (recall 0.55, lowest of any type); excluding
                  the two broken rounds it is 1.00.
                </P>
                <P>
                  Fixed by retrying the final answer with a 16k ceiling on{' '}
                  <Text as="span" fontFamily="mono" fontSize="sm">
                    stop_reason == &quot;max_tokens&quot;
                  </Text>
                  , persisting raw text whenever a report parses empty, and three
                  regression tests. An earlier bug of the same shape: ground truth
                  tags transaction ids, but transactions have no rendered document
                  — so every payment-side error was unmatchable regardless of
                  auditor performance.
                </P>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* What it implies */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                What This Implies for Reconciliation Systems
              </Heading>
              <UnorderedList spacing={2} color={textColor} fontSize="sm">
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    The difficulty axis is inverted:
                  </Text>{' '}
                  pooled recall was 0.89 on <em>blatant</em> errors and 1.00 on
                  subtle ones. Subtle errors contradict a specific other document,
                  so checking them is a well-defined cross-reference; blatant ones
                  are large deviations that still look like business variance.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Confidence is not a triage signal:
                  </Text>{' '}
                  mean confidence ran 0.89–0.97 on true positives and 0.75–0.88 on
                  false positives — overlapping enough that no threshold usefully
                  partitions them.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Precision is the exploitable surface:
                  </Text>{' '}
                  recall sits at ~0.96 while precision ranges 0.47–1.00, with 1–10
                  false alarms per round against ~110 clean documents. Alarm
                  fatigue needs its own metric.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    A constrained DSL beats generated code:
                  </Text>{' '}
                  both accepted proposals scaled a line-item price <em>and</em>{' '}
                  the invoice total; the interpreter recomputes totals, so the
                  operations compounded and produced the most obvious tell in the
                  corpus. The model reasoned about operations individually but not
                  about how they compose — and the effect stayed bounded,
                  inspectable and recorded, which generated code would not have
                  been.
                </ListItem>
              </UnorderedList>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Engineering */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                Engineering &amp; Rigor
              </Heading>
              <UnorderedList spacing={2} color={textColor} fontSize="sm">
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Deterministic by construction:
                  </Text>{' '}
                  every random choice flows from one seeded{' '}
                  <Text as="span" fontFamily="mono" fontSize="sm">
                    numpy
                  </Text>{' '}
                  Generator passed explicitly — no global state, fixed iteration
                  order. Identical config and seed produce byte-identical round
                  logs, asserted by test. That is what makes a negative result
                  trustworthy, and what makes resume-after-failure sound; both
                  experiments were interrupted and resumed mid-run.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Ground truth is sacred:
                  </Text>{' '}
                  injectors mutate a deep copy and never the original, every
                  change is tagged with type, difficulty, parameters and affected
                  documents, and an operation that would produce no observable
                  change raises rather than tagging a guaranteed false miss.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Mutation DSL instead of LLM-generated code:
                  </Text>{' '}
                  proposals are validated against a closed pydantic schema — five
                  whitelisted operations, enumerated fields, range-bounded
                  parameters — and interpreted with no{' '}
                  <Text as="span" fontFamily="mono" fontSize="sm">
                    eval
                  </Text>
                  , no dynamic import, so unknown operations are unrepresentable
                  rather than merely rejected.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Tested:
                  </Text>{' '}
                  250 tests with no network, including 39 guardrail rejection
                  fixtures covering fabricated ops carrying shell commands, field
                  names reaching for{' '}
                  <Text as="span" fontFamily="mono" fontSize="sm">
                    __class__
                  </Text>{' '}
                  and path traversal, and injection-flavoured memo payloads.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Everything traces to an artifact:
                  </Text>{' '}
                  every number above resolves to a committed file under{' '}
                  <Text as="span" fontFamily="mono" fontSize="sm">
                    runs/
                  </Text>
                  , browsable through a static Next.js dashboard that puts each
                  finding beside the documents it cites.
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
                    AI Evaluation / Research Engineering
                  </Text>
                </Box>
                <Box>
                  <Meta>Stack</Meta>
                  <Text mt={2} color={textColor}>
                    Python, numpy, pydantic, Claude API, pytest
                  </Text>
                </Box>
                <Box>
                  <Meta>Dashboard</Meta>
                  <Text mt={2} color={textColor}>
                    Static Next.js viewer over committed run artifacts
                  </Text>
                </Box>
                <Box>
                  <Meta>Methods</Meta>
                  <Text mt={2} color={textColor}>
                    Thompson sampling over 24 arms, agentic tool-loop auditor,
                    schema-validated mutation DSL
                  </Text>
                </Box>
                <Box>
                  <Meta>Scale</Meta>
                  <Text mt={2} color={textColor}>
                    25 audited rounds across two experiments, 250 tests
                  </Text>
                </Box>
                <Box gridColumn={[1, 'span 2']}>
                  <Meta>Links</Meta>
                  <HStack mt={2} spacing={4} flexWrap="wrap">
                    <Link
                      href="https://github.com/stephenqiao1/paper-trail"
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
