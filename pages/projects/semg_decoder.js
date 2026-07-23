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

import imgSemg from '../../public/images/projects/semg_decoder.png'

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
    <Layout title="sEMG Gesture Decoder">
      <Container maxW="container.lg">
        <Title>
          sEMG Gesture Decoder <Badge colorScheme="teal">2025</Badge>
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
              src={imgSemg.src}
              alt="Live causal streaming demo showing filtered EMG channels, predicted gesture, latency, and running accuracy"
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
                  A real-time hand gesture classifier that decodes surface electromyography
                  (sEMG) signals as they arrive, predicting the intended gesture from muscle
                  activity with roughly 1&nbsp;ms of processing latency per window. The system is
                  built around a causal streaming pipeline, so predictions are produced from only
                  the samples seen so far — the constraint that matters for real-world prosthetic
                  and human–computer interface control.
                </P>
                <P>
                  It trains and evaluates on the public Ninapro DB2 dataset, recorded from a
                  12-channel Delsys Trigno sensor array sampled at 2&nbsp;kHz. Models are trained
                  per subject (within-subject / personalized), reflecting how a wearable would be
                  calibrated to an individual user.
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
                    Raw signal to prediction
                  </Text>
                  <UnorderedList spacing={2} color={textColor}>
                    <ListItem>
                      <Text fontWeight="medium">Ingestion:</Text> Loads per-subject Ninapro DB2
                      <Text as="span"> </Text>.mat files and organizes the 12-channel, 2&nbsp;kHz
                      EMG stream with its gesture labels.
                    </ListItem>
                    <ListItem>
                      <Text fontWeight="medium">Filtering:</Text> Applies a causal IIR filter that
                      maintains state across windows (scipy sosfilt / lfilter), deliberately
                      avoiding non-causal offline methods like filtfilt that peek at future samples.
                    </ListItem>
                    <ListItem>
                      <Text fontWeight="medium">Windowing &amp; features:</Text> Segments the stream
                      into overlapping windows (200&nbsp;ms window, 50&nbsp;ms step) and caches the
                      extracted features for fast, repeatable training runs.
                    </ListItem>
                    <ListItem>
                      <Text fontWeight="medium">Classification:</Text> Feeds features to a trained
                      SVM (RBF kernel) to emit a gesture prediction per window, with per-window
                      latency benchmarked against a 50&nbsp;ms real-time budget.
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
                    Real-Time Design
                  </Text>
                  <UnorderedList spacing={1} fontSize="sm" color={textColor}>
                    <ListItem>Causal streaming, no future-sample leakage</ListItem>
                    <ListItem>Stateful filtering across windows</ListItem>
                    <ListItem>~1 ms/window, well under a 50 ms budget</ListItem>
                    <ListItem>Per-window latency benchmarking</ListItem>
                  </UnorderedList>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={2}>
                    Engineering
                  </Text>
                  <UnorderedList spacing={1} fontSize="sm" color={textColor}>
                    <ListItem>Pure-function core, separate from I/O scripts</ListItem>
                    <ListItem>Cached windows/features for fast reruns</ListItem>
                    <ListItem>pytest coverage on signal processing</ListItem>
                    <ListItem>Live visualization of stream + predictions</ListItem>
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
                    Dataset
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    Ninapro DB2 — surface EMG from a 12-channel Delsys Trigno array at 2&nbsp;kHz,
                    covering a broad set of hand and wrist gestures. The dataset is not
                    redistributed; the per-subject .mat files are downloaded independently.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={1}>
                    Causal vs. Offline Filtering
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    A central design point is the distinction between non-causal offline processing
                    (filtfilt, which uses future samples for zero-phase filtering) and causal
                    streaming (sosfilt + lfilter with maintained state). Only the causal path is
                    valid for live control, and the pipeline is built to honor that constraint.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={1}>
                    Model
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    Within-subject SVM with an RBF kernel serves as the demonstrated classifier,
                    alongside classical and CNN baselines, trained on cached window features.
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
                    Signal Processing / Machine Learning
                  </Text>
                </Box>
                <Box>
                  <Meta>Domain</Meta>
                  <Text mt={2} color={textColor}>
                    Real-Time Biosignal Decoding
                  </Text>
                </Box>
                <Box>
                  <Meta>Stack</Meta>
                  <Text mt={2} color={textColor}>
                    Python, NumPy, SciPy, scikit-learn, pytest
                  </Text>
                </Box>
                <Box>
                  <Meta>Technologies</Meta>
                  <Text mt={2} color={textColor}>
                    Surface EMG, Causal Streaming, Digital Filtering, SVM / CNN Classification
                  </Text>
                </Box>
                <Box gridColumn={[1, 'span 2']}>
                  <Meta>Links</Meta>
                  <HStack mt={2} spacing={4} flexWrap="wrap">
                    <Link
                      href="https://github.com/stephenqiao1/semg-gesture-decoder"
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
                Results
              </Heading>
              <VStack spacing={3} align="stretch">
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={1}>
                    Latency
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    Per-window processing runs at roughly 1&nbsp;ms, comfortably inside the
                    50&nbsp;ms real-time budget, leaving ample headroom for live gesture control.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={1}>
                    Live Demo
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    A recorded demo streams filtered EMG channels while overlaying the predicted
                    gesture, the true label, the current processing latency, and a running accuracy
                    counter — validating the causal pipeline end to end on a personalized subject
                    model.
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
