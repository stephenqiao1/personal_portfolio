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
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { motion } from 'framer-motion'

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
    <Layout title="cpen455_project">
      <Container maxW="container.lg">
        <Title>
          Few-Shot Learning for Spam Detection with Large Language Models <Badge colorScheme="teal">2025</Badge>
        </Title>

        <MotionVStack
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          spacing={8}
          align="stretch"
        >
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
                  This project investigates the adaptation of Large Language Models (LLMs) for binary spam detection, 
                  utilizing the SmolLM2-135M-Instruct model within a Bayesian Inverse Classification framework. 
                  Unlike discriminative approaches, this method leverages the generative capabilities of LLMs to model 
                  the likelihood of email content given a label.
                </P>
                <P>
                  We evaluate this approach through three progressive stages: Zero-Shot Learning (baseline evaluation), 
                  Naive Prompting (inference with rich context), and Full Fine-Tuning (optimizing parameters for the 
                  Enron dataset). Additionally, we analyze the implementation and mechanics of Key-Value (KV) caching 
                  in decoder-only transformers.
                </P>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Technical Approach */}
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
                Technical Approach
              </Heading>
              <VStack spacing={4} align="stretch">
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={2}>
                    Bayesian Inverse Classification Framework
                  </Text>
                  <P>
                    We treat classification as a generative task where the model evaluates the likelihood of the input 
                    text conditioned on a candidate label. This approach mitigates bias often seen in direct discriminative 
                    predictions by leveraging the model&apos;s pre-trained generative priors.
                  </P>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={2}>
                    Key-Value (KV) Cache Analysis
                  </Text>
                  <P>
                    We analyze the implementation, efficiency, and memory trade-offs of KV caching during autoregressive 
                    generation. The cache stores Key and Value vectors of processed tokens, reducing computational complexity 
                    from O(t²) to O(t) per step, though it creates a memory bottleneck for long sequences.
                  </P>
                </Box>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Experimental Results */}
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
                Experimental Results
              </Heading>
              <VStack spacing={3} align="stretch">
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={2}>
                    Zero-Shot Baseline
                  </Text>
                  <Text color={textColor}>
                    Achieved 52.25% accuracy, only marginally better than random chance for binary classification.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={2}>
                    Naive Prompting
                  </Text>
                  <Text color={textColor}>
                    Attempts to improve performance via naive prompting showed limited effectiveness.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={2}>
                    Full Fine-Tuning
                  </Text>
                  <Text color={textColor}>
                    Fine-tuning the model on the Enron Spam dataset demonstrated improved performance, 
                    validating the effectiveness of the Bayesian Inverse Classification approach.
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
                  <Meta>Course</Meta>
                  <Text mt={2} color={textColor}>
                    CPEN 455 - Deep Learning
                  </Text>
                </Box>
                <Box>
                  <Meta>Dataset</Meta>
                  <Text mt={2} color={textColor}>
                    Enron Spam Dataset (80% train, 20% validation)
                  </Text>
                </Box>
                <Box>
                  <Meta>Model</Meta>
                  <Text mt={2} color={textColor}>
                    SmolLM2-135M-Instruct
                  </Text>
                </Box>
                <Box>
                  <Meta>Stack</Meta>
                  <Text mt={2} color={textColor}>
                    Python, PyTorch, Transformers, Hugging Face, Bayesian Methods
                  </Text>
                </Box>
                <Box gridColumn={[1, 'span 2']}>
                  <Meta>Key Techniques</Meta>
                  <UnorderedList mt={2} spacing={1} color={textColor}>
                    <ListItem>Bayesian Inverse Classification</ListItem>
                    <ListItem>Zero-Shot Learning</ListItem>
                    <ListItem>Few-Shot Learning</ListItem>
                    <ListItem>Full Fine-Tuning</ListItem>
                    <ListItem>KV Cache Optimization</ListItem>
                    <ListItem>Decoder-Only Transformer Architecture</ListItem>
                  </UnorderedList>
                </Box>
                <Box gridColumn={[1, 'span 2']}>
                  <Meta>Links</Meta>
                  <HStack mt={2} spacing={4} flexWrap="wrap">
                    <Link
                      href="https://github.com/stephenqiao1/CPEN455-Project-2025W1"
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
                    <Text color={textColor}>•</Text>
                    <Link
                      href="/docs/CPEN_455.pdf"
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
                      Research Paper
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

