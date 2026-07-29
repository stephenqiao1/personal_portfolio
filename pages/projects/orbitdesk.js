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

import imgOrbitdesk from '../../public/images/projects/orbitdesk.png'

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
    <Layout title="OrbitDesk">
      <Container maxW="container.lg">
        <Title>
          OrbitDesk — Space Market Intelligence{' '}
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
              src={imgOrbitdesk.src}
              alt="OrbitDesk terminal showing a 3D globe with thousands of tracked orbital objects alongside supplier and launch market panels"
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
                  OrbitDesk is a browser-based space-market intelligence terminal
                  for analysts and business development teams at space companies.
                  It puts three datasets on one console: the live orbital catalog,
                  the commercial supplier landscape, and the launch market — each
                  panel stamped with an epoch timestamp for data freshness and
                  provenance.
                </P>
                <P>
                  The centerpiece is a live orbital view: 16,000+ objects
                  propagated with a custom SGP4/SDP4 implementation running in a
                  Web Worker at roughly 1.3 microseconds per object, streamed to
                  three.js as zero-copy transferable buffers, and rendered in a
                  single GPU draw call at a steady 60 fps.
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
                Architecture
              </Heading>
              <VStack spacing={4} align="stretch">
                <P>
                  OrbitDesk is a TypeScript pnpm monorepo split into a Vite +
                  React 18 web app, a GraphQL gateway, and a shared orbital
                  mechanics domain package.
                </P>
                <UnorderedList spacing={2} color={textColor}>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      apps/web:
                    </Text>{' '}
                    React 18 with TanStack Router, urql, Tailwind CSS, and
                    three.js Points rendering; a Web Worker owns SGP4 propagation
                    so the main thread never does per-frame orbital math.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      apps/gateway:
                    </Text>{' '}
                    GraphQL Yoga server with DataLoader batching, automatic
                    persisted queries, depth limiting, and a disk-based TTL cache
                    (TLEs for 6 hours, launches for 15 minutes).
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      packages/domain:
                    </Text>{' '}
                    Custom SGP4/SDP4 propagator tested against published
                    verification vectors, with its own benchmark suite.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      Data sources:
                    </Text>{' '}
                    CelesTrak GP element sets, the Launch Library 2 API, and a
                    curated YAML supplier dataset, all normalized behind the
                    gateway.
                  </ListItem>
                </UnorderedList>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Performance & Accessibility */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                Performance, Accessibility &amp; Design
              </Heading>
              <UnorderedList spacing={2} color={textColor} fontSize="sm">
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Lighthouse:
                  </Text>{' '}
                  100 accessibility on every route and 96–98 performance on four
                  of five routes; the globe route paints in ~150 ms in
                  real-browser testing.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Keyboard-first:
                  </Text>{' '}
                  Fully keyboard-navigable supplier search (open with{' '}
                  <Text as="span" fontWeight="semibold">
                    /
                  </Text>
                  , navigate with arrow keys), URL-synced filter state, and a
                  reduced-motion snapshot mode.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Cockpit aesthetic:
                  </Text>{' '}
                  A custom design system pairing CRT-phosphor accents with
                  deep-space values, set in B612 — the typeface Airbus designed
                  for cockpit displays — with colorblind-verified color tokens.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Tested:
                  </Text>{' '}
                  Unit tests across the monorepo plus Playwright end-to-end
                  tests, with snapshot fixtures for the gateway.
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
                    Data Visualization / Full-Stack Web
                  </Text>
                </Box>
                <Box>
                  <Meta>Frontend</Meta>
                  <Text mt={2} color={textColor}>
                    React 18, TanStack Router, three.js, Tailwind CSS, urql, Web
                    Workers
                  </Text>
                </Box>
                <Box>
                  <Meta>Backend</Meta>
                  <Text mt={2} color={textColor}>
                    GraphQL Yoga, DataLoader, persisted queries, Vercel
                    serverless
                  </Text>
                </Box>
                <Box>
                  <Meta>Domain</Meta>
                  <Text mt={2} color={textColor}>
                    Custom SGP4/SDP4 orbital propagation in TypeScript
                  </Text>
                </Box>
                <Box>
                  <Meta>Data</Meta>
                  <Text mt={2} color={textColor}>
                    CelesTrak, Launch Library 2, curated supplier dataset
                  </Text>
                </Box>
                <Box gridColumn={[1, 'span 2']}>
                  <Meta>Links</Meta>
                  <HStack mt={2} spacing={4} flexWrap="wrap">
                    <Link
                      href="https://orbitdesk-seven.vercel.app"
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
                      Live Demo
                      <Icon as={ExternalLinkIcon} />
                    </Link>
                    <Link
                      href="https://github.com/stephenqiao1/orbitdesk"
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
