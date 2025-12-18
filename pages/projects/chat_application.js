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
    <Layout title="chat_application">
      <Container maxW="container.lg">
      <Title>
          CPEN333A Chat Application <Badge colorScheme="teal">2023</Badge>
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
        This project exemplifies our group&apos;s capability in network programming,
        concurrent processing, and GUI design using Python&apos;s comprehensive
        standard library modules.
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
          <Meta>Collaborators</Meta>
                  <Text mt={2} color={textColor}>
                    Stephen Qiao and Steven Lee
                  </Text>
                </Box>
                <Box>
                  <Meta>Stack</Meta>
                  <Text mt={2} color={textColor}>
                    Python, Tkinter, Multithreading, Multiprocessing
                  </Text>
                </Box>
                <Box gridColumn={[1, 'span 2']}>
          <Meta>Github Link</Meta>
                  <Link
                    href="https://github.com/stephenqiao1/CPEN333A_project"
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
                    <Text>https://github.com/stephenqiao1/CPEN333A_project</Text>
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
