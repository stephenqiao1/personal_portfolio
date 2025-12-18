import {
  Container,
  Badge,
  Box,
  VStack,
  Text,
  Heading,
  Divider,
  useColorModeValue,
  Link,
  SimpleGrid,
  Icon
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
  <Layout title="TSP Sim">
      <Container maxW="container.lg">
      <Title>
          Unity TSP Algorithm Visualizer <Badge colorScheme="teal">2023</Badge>
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
      <P>
        This project is a Unity-based application that visualizes various
        algorithms for solving the Traveling Salesman Problem (TSP). It provides
        a graphical interface to place cities on a 2D grid and then run
        different algorithms to find the shortest path that visits all cities.
      </P>
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
                  <Meta>Stack</Meta>
                  <Text mt={2} color={textColor}>
                    Unity, C#, Shader Programming
                  </Text>
                </Box>
                <Box gridColumn={[1, 'span 2']}>
          <Meta>Algorithm Visualizer</Meta>
                  <Link
                    href="https://github.com/stephenqiao1/tsp_sim"
                    target="_blank"
                    color={linkColor}
                    _hover={{
                      textDecoration: 'underline',
                      transform: 'translateX(4px)'
                    }}
                    transition="all 0.2s"
                    mt={2}
                    display="flex"
                    alignItems="center"
                    gap={2}
                  >
                    <Text>https://github.com/stephenqiao1/tsp_sim</Text>
                    <Icon as={ExternalLinkIcon} />
          </Link>
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
