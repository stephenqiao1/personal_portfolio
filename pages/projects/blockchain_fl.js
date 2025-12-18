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
    <Layout title="blockchain_fl">
      <Container maxW="container.lg">
        <Title>
          Blockchain-Based Federated Learning with Adaptive Differential Privacy <Badge colorScheme="teal">2025</Badge>
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
                  This project implements a Blockchain-based Federated Learning (BC-FL) system with Adaptive Differential Privacy 
                  that eliminates the need for a trusted central aggregator. The system combines Ethereum smart contracts for 
                  decentralized coordination, IPFS for distributed model storage, and adaptive differential privacy to optimize 
                  the privacy-utility trade-off.
                </P>
                <P>
                  The key innovation is replacing the traditional central FL server with a blockchain-based coordination protocol, 
                  while implementing an adaptive noise mechanism that dynamically adjusts privacy parameters based on training progress, 
                  optimizing both model utility and privacy budget consumption.
                </P>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* System Architecture */}
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
                System Architecture
              </Heading>
              <VStack spacing={4} align="stretch">
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={2}>
                    Three-Layer Architecture
                  </Text>
                  <UnorderedList spacing={2} color={textColor}>
                    <ListItem>
                      <Text fontWeight="medium">Compute Layer (Client-Side):</Text> Local model training with PyTorch, adaptive noise injection using Opacus, gradient clipping and privacy accounting, IPFS upload/download operations
                    </ListItem>
                    <ListItem>
                      <Text fontWeight="medium">Storage Layer (Off-Chain):</Text> IPFS for decentralized model storage, content-addressed storage (CID-based), tamper-proof model versioning
                    </ListItem>
                    <ListItem>
                      <Text fontWeight="medium">Coordination Layer (On-Chain):</Text> FLRegistry.sol smart contract (Ethereum/Ganache), round management and state tracking, privacy budget enforcement, client reputation system
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
                    Privacy Mechanisms
                  </Text>
                  <UnorderedList spacing={1} fontSize="sm" color={textColor}>
                    <ListItem>Centralized DP (CDP)</ListItem>
                    <ListItem>Local DP (LDP)</ListItem>
                    <ListItem>Adaptive DP</ListItem>
                    <ListItem>Adaptive Clipping</ListItem>
                  </UnorderedList>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={2}>
                    Blockchain Features
                  </Text>
                  <UnorderedList spacing={1} fontSize="sm" color={textColor}>
                    <ListItem>Client registration</ListItem>
                    <ListItem>Reputation tracking</ListItem>
                    <ListItem>Privacy budget enforcement</ListItem>
                    <ListItem>IPFS hash verification</ListItem>
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
                    Model Architecture
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    Dataset: CIFAR-10 (32×32 RGB images, 10 classes). Lightweight CNN with 2 convolutional layers, 
                    2 fully connected layers, and GroupNorm for DP compliance.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={1}>
                    Privacy Accounting
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    Custom Rényi Differential Privacy (RDP) accountant that tracks privacy budget across multiple rounds 
                    with varying noise levels, converting RDP to (ε, δ)-DP using optimal alpha selection.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={1}>
                    Adaptive Mechanism
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    Monitors validation loss after each epoch and dynamically adjusts noise multiplier based on loss trend. 
                    Loss improving → reduce noise (spend budget), Loss stagnating → increase noise (conserve budget).
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
                    EECE 571B - Blockchain Foundations
                  </Text>
                </Box>
                <Box>
                  <Meta>Dataset</Meta>
                  <Text mt={2} color={textColor}>
                    CIFAR-10
                  </Text>
                </Box>
                <Box>
                  <Meta>Stack</Meta>
                  <Text mt={2} color={textColor}>
                    Python, PyTorch, Solidity, Ethereum, IPFS, Opacus, Foundry, Ganache
                  </Text>
                </Box>
                <Box>
                  <Meta>Technologies</Meta>
                  <Text mt={2} color={textColor}>
                    Federated Learning, Differential Privacy, Blockchain, Smart Contracts, Distributed Storage
                  </Text>
                </Box>
                <Box gridColumn={[1, 'span 2']}>
                  <Meta>Links</Meta>
                  <HStack mt={2} spacing={4} flexWrap="wrap">
                    <Link
                      href="https://github.com/stephenqiao1/Blockchain-Adaptive-DP-FL"
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
                      href="/docs/EECE_571B_Project_Paper.pdf"
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

          {/* Key Results */}
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
                Key Results
              </Heading>
              <VStack spacing={3} align="stretch">
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={1}>
                    Privacy-Utility Trade-off
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    Adaptive DP achieves better accuracy for similar privacy budgets compared to static approaches.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={1}>
                    Decentralization Cost
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    Local DP (decentralized) has lower utility than Centralized DP but eliminates trust requirements.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={1}>
                    Economic Feasibility
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    Mainnet costs are prohibitive (~$17/round), but Layer 2 solutions reduce costs by 95%.
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

