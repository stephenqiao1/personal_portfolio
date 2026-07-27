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

import imgApogee from '../../public/images/projects/apogee.png'

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
    <Layout title="Apogee">
      <Container maxW="container.lg">
        <Title>
          Apogee — Game Backend Platform <Badge colorScheme="teal">2026</Badge>
        </Title>

        <MotionVStack
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          spacing={8}
          align="stretch"
        >
          {/* Diagram */}
          <MotionBox variants={itemVariants}>
            <WorkImage
              src={imgApogee.src}
              alt="Apogee architecture: players flow through matchmaker and allocator to gameserver pods, whose events stream through NATS JetStream and the ingest service into Parquet on S3 and Postgres rollups, feeding deterministic replay"
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
                  Apogee is a game backend platform built in Go. The game itself — a
                  headless, deterministic, tick-based arena — is deliberately trivial;
                  the real work is everything around it: skill-based matchmaking,
                  session allocation on Kubernetes, a streaming telemetry pipeline,
                  live-ops configuration, deterministic replay, and synthetic load
                  generation.
                </P>
                <P>
                  All seven services are implemented and deploy to a local k3d cluster
                  with a single <Text as="span" fontWeight="semibold">make k3d-up</Text>,
                  where a smoke target drives the full path end to end: enqueue →
                  match → allocate → play → telemetry. Every significant technical
                  decision is recorded as an Architecture Decision Record.
                </P>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* The Services */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                The Seven Services
              </Heading>
              <VStack spacing={4} align="stretch">
                <P>
                  Each service is a thin <Text as="span" fontWeight="medium">cmd/&lt;name&gt;</Text>{' '}
                  binary that embeds a shared observability runtime and delegates its
                  real work to a domain package under <Text as="span" fontWeight="medium">internal/</Text>.
                </P>
                <UnorderedList spacing={2} color={textColor}>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      gameserver:
                    </Text>{' '}
                    Runs the deterministic tick-based arena simulation for a match —
                    same inputs, same seed, same outcome, every time.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      matchmaker:
                    </Text>{' '}
                    Skill-based, region-aware queueing and match formation.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      allocator:
                    </Text>{' '}
                    Schedules game server pods onto Kubernetes to meet demand.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      ingest:
                    </Text>{' '}
                    Telemetry pipeline consuming NATS JetStream into Parquet files on
                    S3 plus rollup tables in Postgres.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      configsvc:
                    </Text>{' '}
                    Remote config and feature flags with player segmentation for
                    live-ops.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      replay:
                    </Text>{' '}
                    Re-runs recorded inputs deterministically, with
                    snapshot-accelerated seeking for the scrubber UI.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="medium" as="span">
                      loadgen:
                    </Text>{' '}
                    Simulates tens of thousands of synthetic concurrent players to
                    exercise the whole platform.
                  </ListItem>
                </UnorderedList>
                <P>
                  Cross-cutting concerns live in a shared{' '}
                  <Text as="span" fontWeight="medium">internal/obs</Text> runtime: structured
                  slog logging, a private Prometheus registry, OpenTelemetry tracing
                  exported to Jaeger, and an admin HTTP server with liveness,
                  readiness, and metrics endpoints. Persistence is a shared layer on
                  pgx + sqlc + goose with Redis, configured 12-factor style via
                  environment variables.
                </P>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Deployment */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                Deployment — Two Environments, Deliberately Different
              </Heading>
              <VStack spacing={4} align="stretch">
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={2}>
                    Local (k3d) — fast imperative inner loop
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    ArgoCD manages the Helm dependencies (Postgres, Redis, NATS,
                    MinIO, Jaeger, a trimmed kube-prometheus-stack), while the Apogee
                    services are applied imperatively from kustomize overlays with
                    locally built images imported into the cluster. This is
                    deliberately not GitOps for the services — local GitOps would
                    fight the build → import → restart inner loop, and the trade-off
                    is documented in an ADR.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={2}>
                    Cloud — full app-of-apps GitOps
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    A single ArgoCD root application reconciles everything from git:
                    dependencies, the observability stack, ArgoCD itself, and the
                    services from images pushed to GHCR by CI. The cloud overlay
                    renders 53 resources and diffs cleanly; Terraform modules for the
                    cloud infrastructure are written and version-controlled.
                  </Text>
                </Box>
                <Text fontSize="sm" color={textColor}>
                  The README is explicit about what is proven versus not — working
                  platform at laptop scale, GitOps plumbing verified by rendering and
                  diffing rather than claimed — a deliberate practice of not
                  over-claiming in a demo.
                </Text>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Engineering Practices */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                Engineering Practices
              </Heading>
              <UnorderedList spacing={2} color={textColor} fontSize="sm">
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Architecture Decision Records:
                  </Text>{' '}
                  Eleven MADR-format ADRs covering deterministic simulation, the
                  rating system, live-ops config, session allocation, replay storage,
                  load generation, pprof exposure, deploy strategy, and load-test
                  measurement validity.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Determinism as a foundation:
                  </Text>{' '}
                  The simulation is tick-based and fully deterministic, which is what
                  makes replay a storage problem (record inputs, not video) and makes
                  load-test results reproducible.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Observability by default:
                  </Text>{' '}
                  Every service ships Prometheus metrics, OpenTelemetry traces, and
                  health/readiness probes from day one via the shared runtime, with
                  Grafana dashboards provisioned locally.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Type-safe persistence:
                  </Text>{' '}
                  sqlc-generated queries over pgx with goose migrations, so SQL is
                  checked at generation time rather than discovered broken at runtime.
                </ListItem>
                <ListItem>
                  <Text fontWeight="medium" as="span">
                    Verified end to end:
                  </Text>{' '}
                  A smoke target drives the full enqueue → match → allocate → play →
                  telemetry path against the running cluster; the Go test suite runs
                  with the race detector.
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
                    Distributed Systems / Platform Engineering
                  </Text>
                </Box>
                <Box>
                  <Meta>Backend</Meta>
                  <Text mt={2} color={textColor}>
                    Go 1.26, PostgreSQL 16 (pgx + sqlc + goose), Redis 7, NATS
                    JetStream, MinIO/S3 + Parquet
                  </Text>
                </Box>
                <Box>
                  <Meta>Infrastructure</Meta>
                  <Text mt={2} color={textColor}>
                    Kubernetes (k3d), kustomize, ArgoCD, Terraform, Docker, GitHub
                    Actions
                  </Text>
                </Box>
                <Box>
                  <Meta>Observability</Meta>
                  <Text mt={2} color={textColor}>
                    Prometheus, Grafana, OpenTelemetry, Jaeger
                  </Text>
                </Box>
                <Box>
                  <Meta>Frontend</Meta>
                  <Text mt={2} color={textColor}>
                    Vite + React + TypeScript replay scrubber
                  </Text>
                </Box>
                <Box gridColumn={[1, 'span 2']}>
                  <Meta>Links</Meta>
                  <HStack mt={2} spacing={4} flexWrap="wrap">
                    <Link
                      href="https://github.com/stephenqiao1/apogee"
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
