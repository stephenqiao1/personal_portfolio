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

import imgLeaseCheck from '../../public/images/projects/leasecheck.png'

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

  return (
    <Layout title="leasecheck">
      <Container maxW="container.lg">
        <Title>
          LeaseCheck — Lease Compliance Auditor <Badge colorScheme="teal">2025</Badge>
        </Title>

        <MotionVStack
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          spacing={8}
          align="stretch"
        >
          {/* Demo Image */}
          <MotionBox variants={itemVariants}>
            <WorkImage
              src={imgLeaseCheck.src}
              alt="LeaseCheck reviewer UI showing an annotated lease with flagged violations"
            />
          </MotionBox>

          {/* Project Overview */}
          <MotionBox variants={itemVariants}>
            <Box
              bg={cardBg}
              borderRadius="xl"
              p={6}
              borderWidth="1px"
              borderColor={borderColor}
              boxShadow="md"
              _hover={{
                boxShadow: 'xl',
                transform: 'translateY(-2px)'
              }}
              transition="all 0.3s"
            >
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
                  LeaseCheck is a compliance auditor that analyzes residential lease PDFs to
                  identify clauses that potentially violate landlord-tenant law. Users upload a
                  lease and receive flagged violations, each with a specific legal rule citation
                  and a plain-language explanation of why the clause is problematic.
                </P>
                <P>
                  It addresses a real gap: standard-form leases often contain unenforceable or
                  illegal provisions — non-refundable deposits, blanket pet or guest bans, illegal
                  entry terms — that tenants and housing workers cannot reasonably identify without
                  legal expertise. The current scope is Ontario, Canada, evaluating clauses against
                  provisions of the Residential Tenancies Act.
                </P>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Pipeline / Architecture */}
          <MotionBox variants={itemVariants}>
            <Box
              bg={cardBg}
              borderRadius="xl"
              p={6}
              borderWidth="1px"
              borderColor={borderColor}
              boxShadow="md"
              _hover={{
                boxShadow: 'xl',
                transform: 'translateY(-2px)'
              }}
              transition="all 0.3s"
            >
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                Processing Pipeline
              </Heading>
              <VStack spacing={4} align="stretch">
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={2}>
                    Four-Stage Architecture
                  </Text>
                  <UnorderedList spacing={2} color={textColor}>
                    <ListItem>
                      <Text fontWeight="medium">Ingestion:</Text> Extracts text from PDFs with
                      pypdf and segments it into clauses using numbered markers or paragraph
                      splitting, preserving character offsets and ordinals.
                    </ListItem>
                    <ListItem>
                      <Text fontWeight="medium">Retrieval:</Text> Embeds each clause and performs
                      vector similarity search against a rules corpus using pgvector, retrieving
                      the k nearest legal rules by cosine distance.
                    </ListItem>
                    <ListItem>
                      <Text fontWeight="medium">LLM Review:</Text> Evaluates each clause against its
                      candidate rules with Pydantic-constrained outputs, returning a structured
                      verdict — ok, violation, or unclear — with a rule citation and rationale.
                    </ListItem>
                    <ListItem>
                      <Text fontWeight="medium">Reviewer UI:</Text> A Next.js app that renders the
                      marked-up lease with margin annotations, colored verdict rails, and a triage
                      workflow for accepting or dismissing findings.
                    </ListItem>
                  </UnorderedList>
                </Box>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Key Features */}
          <MotionBox variants={itemVariants}>
            <Box
              bg={cardBg}
              borderRadius="xl"
              p={6}
              borderWidth="1px"
              borderColor={borderColor}
              boxShadow="md"
              _hover={{
                boxShadow: 'xl',
                transform: 'translateY(-2px)'
              }}
              transition="all 0.3s"
            >
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                Key Features
              </Heading>
              <SimpleGrid columns={[1, 2]} spacing={4}>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={2}>
                    Analysis
                  </Text>
                  <UnorderedList spacing={1} fontSize="sm" color={textColor}>
                    <ListItem>Jurisdiction-specific rules (Ontario RTA)</ListItem>
                    <ListItem>Semantic clause-to-rule matching</ListItem>
                    <ListItem>Structured, constrained LLM verdicts</ListItem>
                    <ListItem>Hallucination guards on rule citations</ListItem>
                  </UnorderedList>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={2}>
                    Reviewer Experience
                  </Text>
                  <UnorderedList spacing={1} fontSize="sm" color={textColor}>
                    <ListItem>Annotated lease with margin notes</ListItem>
                    <ListItem>Colored verdict rails</ListItem>
                    <ListItem>Interactive accept / dismiss triage</ListItem>
                    <ListItem>Live violation counters</ListItem>
                  </UnorderedList>
                </Box>
              </SimpleGrid>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Technical Details */}
          <MotionBox variants={itemVariants}>
            <Box
              bg={cardBg}
              borderRadius="xl"
              p={6}
              borderWidth="1px"
              borderColor={borderColor}
              boxShadow="md"
              _hover={{
                boxShadow: 'xl',
                transform: 'translateY(-2px)'
              }}
              transition="all 0.3s"
            >
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                Technical Details
              </Heading>
              <VStack spacing={3} align="stretch">
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={1}>
                    Rules Corpus
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    12 Ontario RTA provisions covering violations such as non-refundable deposits,
                    blanket pet or guest bans, illegal entry terms, and NSF fees exceeding statutory
                    caps. Each rule stores a code, title, plain-language description, and a
                    1536-dimensional embedding from text-embedding-3-small.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={1}>
                    Retrieval &amp; Review
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    Clause embeddings are matched to candidate rules via pgvector cosine search
                    (default k = 4). The LLM may only cite rule codes that appear in the retrieved
                    candidate set, preventing fabricated citations.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={1}>
                    Evaluation Harness
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    A synthetic, hand-labeled Ontario lease fixture (24 clauses — 12 violations,
                    12 compliant) is run through the real ingestion and review pipelines. Metrics
                    include precision, recall, F1, and attribution accuracy, with a k-value ablation
                    over retrieval depths of 2, 4, and 8.
                  </Text>
                </Box>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Project Information */}
          <MotionBox variants={itemVariants}>
            <Box
              bg={cardBg}
              borderRadius="xl"
              p={6}
              borderWidth="1px"
              borderColor={borderColor}
              boxShadow="md"
              _hover={{
                boxShadow: 'xl',
                transform: 'translateY(-2px)'
              }}
              transition="all 0.3s"
            >
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
                  <Meta>Type</Meta>
                  <Text mt={2} color={textColor}>
                    AI / RAG Web Application
                  </Text>
                </Box>
                <Box>
                  <Meta>Scope</Meta>
                  <Text mt={2} color={textColor}>
                    Ontario Residential Tenancies Act
                  </Text>
                </Box>
                <Box>
                  <Meta>Stack</Meta>
                  <Text mt={2} color={textColor}>
                    Python, FastAPI, SQLAlchemy, Alembic, PostgreSQL, pgvector, OpenAI API,
                    Next.js, TypeScript, Docker Compose
                  </Text>
                </Box>
                <Box>
                  <Meta>Technologies</Meta>
                  <Text mt={2} color={textColor}>
                    Retrieval-Augmented Generation, Vector Search, Structured LLM Outputs,
                    Document Parsing
                  </Text>
                </Box>
                <Box gridColumn={[1, 'span 2']}>
                  <Meta>Links</Meta>
                  <HStack mt={2} spacing={4} flexWrap="wrap">
                    <Link
                      href="https://github.com/stephenqiao1/leasecheck"
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

          {/* Results */}
          <MotionBox variants={itemVariants}>
            <Box
              bg={cardBg}
              borderRadius="xl"
              p={6}
              borderWidth="1px"
              borderColor={borderColor}
              boxShadow="md"
              _hover={{
                boxShadow: 'xl',
                transform: 'translateY(-2px)'
              }}
              transition="all 0.3s"
            >
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                Results &amp; Limitations
              </Heading>
              <VStack spacing={3} align="stretch">
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={1}>
                    Fixture Performance
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    On the labeled fixture, the pipeline reached precision, recall, F1, and
                    attribution accuracy of 1.000 ± 0.000 across all three retrieval depths, with
                    zero unstable clauses.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={1}>
                    Honest Framing
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    The perfect scores reflect the in-distribution nature of a single synthetic
                    fixture and a small retrieval corpus, not validated real-world performance.
                    Meaningful evaluation would require expanded rules, multiple authentic leases,
                    and genuinely ambiguous cases.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={1}>
                    A Triage Tool, Not Legal Advice
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    Output is meant to help a reviewer surface likely issues quickly; findings still
                    require verification against primary legal sources.
                  </Text>
                </Box>
              </VStack>
            </Box>
          </MotionBox>
        </MotionVStack>
      </Container>
    </Layout>
  )
}

export default Project
export { getServerSideProps } from '../../components/chakra'
