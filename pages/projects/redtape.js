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

import imgRedtape from '../../public/images/projects/redtape.png'

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
    <Layout title="Red Tape">
      <Container maxW="container.lg">
        <Title>
          Red Tape — Municipal Permitting, Mapped{' '}
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
              src={imgRedtape.src}
              alt="Red Tape showing a food truck permitting process for Portland as a phased dependency graph with live fee and duration totals"
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
                  A food truck in Portland is 8 steps, $1,745, and 5 weeks. In
                  Houston it&apos;s 6 steps, $1,601, and same day. Red Tape maps
                  municipal permitting processes — every step, fee, form, and
                  waiting period for getting a project approved in a city, with
                  a citation to the official document behind every number.
                </P>
                <P>
                  Pick a project, answer a short form, and get the whole process
                  as a dependency graph with live running totals — then put two
                  cities side by side and watch the difference write its own
                  headline. Styled like a government form that developed a sense
                  of humor.
                </P>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Rules are data */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                Rules Are Data, Never Code
              </Heading>
              <VStack spacing={4} align="stretch">
                <P>
                  The core invariant: there is no{' '}
                  <Text as="span" fontFamily="mono" fontSize="sm">
                    if (city === &apos;portland&apos;)
                  </Text>{' '}
                  anywhere in the codebase. Jurisdictions own versioned process
                  templates per project type, and everything downstream is
                  generated from that data.
                </P>
                <UnorderedList spacing={2} color={textColor}>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      Schema:
                    </Text>{' '}
                    Steps form a dependency DAG, fees are typed rules (flat,
                    per-unit, percent-of-valuation, tiered) in integer cents,
                    and conditionals are a small JSON expression language over
                    the project&apos;s parameters. Every step and fee carries a
                    source-URL citation as a column, not a comment.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      Rule engine:
                    </Text>{' '}
                    Pure functions with no database or GraphQL imports — it
                    evaluates conditions strictly, splices removed steps out of
                    the DAG, computes fees in integer cents, and reports
                    durations as the critical path through the graph, so
                    parallel steps don&apos;t sum.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      The proof:
                    </Text>{' '}
                    Cities #2 and #3 (Houston and Denver — including
                    Denver&apos;s three-agency flow and Houston&apos;s mid-2026
                    switch to statewide licensing) shipped as pure seed data
                    with zero changes to application code.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      Data freshness:
                    </Text>{' '}
                    A weekly job re-fetches every cited URL, fingerprints the
                    content, and flags affected processes for human review — it
                    never edits data itself.
                  </ListItem>
                </UnorderedList>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Features & rigor */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                Features &amp; Rigor
              </Heading>
              <UnorderedList spacing={2} color={textColor} fontSize="sm">
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Generated UI:
                  </Text>{' '}
                  The intake form is generated from each project type&apos;s
                  parameter schema, the stepper renders whatever DAG the engine
                  returns, and the two-city comparison headline is arithmetic
                  over the totals.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Contribution flow:
                  </Text>{' '}
                  Adding a city is writing a seed file from official documents —
                  the seed types make invalid data unrepresentable, and a
                  contributor UI with admin approval runs the same server-side
                  validator.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Honest limitations:
                  </Text>{' '}
                  Every process page says &quot;not legal advice&quot; and means
                  it; data carries an as-of date, and known gaps (unpublished
                  fees and processing times) are documented in open-questions
                  files instead of papered over.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Tested:
                  </Text>{' '}
                  109 API tests, with the rule engine covered by table-driven
                  JSON fixtures that double as documentation of the expression
                  language, plus a seed validator checking DAGs, conditions,
                  cents, and citations.
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
                    Civic Tech / Full-Stack Web
                  </Text>
                </Box>
                <Box>
                  <Meta>Stack</Meta>
                  <Text mt={2} color={textColor}>
                    RedwoodJS, TypeScript, React, GraphQL, Prisma
                  </Text>
                </Box>
                <Box>
                  <Meta>Infrastructure</Meta>
                  <Text mt={2} color={textColor}>
                    Postgres, Render, background jobs for source freshness
                  </Text>
                </Box>
                <Box>
                  <Meta>Data</Meta>
                  <Text mt={2} color={textColor}>
                    Official municipal documents for Portland, Houston, and
                    Denver — primary sources only, cited per fact
                  </Text>
                </Box>
                <Box>
                  <Meta>Coverage</Meta>
                  <Text mt={2} color={textColor}>
                    Three cities, extensible to any jurisdiction via seed data
                  </Text>
                </Box>
                <Box gridColumn={[1, 'span 2']}>
                  <Meta>Links</Meta>
                  <HStack mt={2} spacing={4} flexWrap="wrap">
                    <Link
                      href="https://github.com/stephenqiao1/red-tape"
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
