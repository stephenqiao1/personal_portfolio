import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Text,
  Divider,
  Badge,
  VStack,
  HStack,
  Image,
  useColorModeValue,
  Flex,
  Icon
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { motion } from 'framer-motion'
import Section from '../components/section'

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

const BookCard = ({ book }) => {
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  
  // Generate a filename-safe version of the book title for the image path
  const imagePath = `/images/books/${book.title.toLowerCase().replace(/[^a-z0-9]+/g, '_')}.jpg`
  
  return (
    <MotionBox variants={itemVariants}>
      <Box
        bg={cardBg}
        borderRadius="xl"
        p={4}
        borderWidth="1px"
        borderColor={borderColor}
        boxShadow="md"
        height="100%"
        _hover={{
          boxShadow: 'xl',
          transform: 'translateY(-4px)',
          borderColor: useColorModeValue('teal.300', 'teal.600')
        }}
        transition="all 0.3s"
        overflow="hidden"
      >
        <Flex direction={{ base: 'column', md: 'row' }} gap={4}>
          {/* Book Cover */}
          <Box
            flexShrink={0}
            width={{ base: '100%', md: '120px' }}
            height={{ base: '180px', md: '180px' }}
            borderRadius="lg"
            overflow="hidden"
            bg={useColorModeValue('gray.100', 'gray.700')}
            position="relative"
          >
            <Image
              src={imagePath}
              alt={`${book.title} cover`}
              width="100%"
              height="100%"
              objectFit="cover"
              fallback={
                <Box
                  width="100%"
                  height="100%"
                  bg={useColorModeValue('gray.200', 'gray.600')}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text fontSize="xs" color={textColor} textAlign="center" px={2}>
                    {book.title}
                  </Text>
                </Box>
              }
            />
          </Box>

          {/* Book Info */}
          <VStack align="flex-start" spacing={2} flex={1}>
            <Heading
              as="h3"
              size="md"
              fontWeight="semibold"
              color={headingColor}
              lineHeight="short"
            >
              {book.title}
            </Heading>
            <Text fontSize="sm" color={textColor} fontWeight="medium">
              by {book.author}
            </Text>
            {book.rating && (
              <HStack spacing={1}>
                <Icon as={StarIcon} color="yellow.400" boxSize={4} />
                <Text fontSize="sm" fontWeight="semibold" color={textColor}>
                  {book.rating}
                </Text>
                <Text fontSize="xs" color={textColor}>
                  / 5
                </Text>
                <Badge
                  colorScheme={book.rating >= 4 ? 'green' : book.rating >= 3 ? 'yellow' : 'orange'}
                  ml={2}
                  fontSize="xs"
                >
                  {book.rating >= 4 ? 'Excellent' : book.rating >= 3 ? 'Good' : 'Fair'}
                </Badge>
              </HStack>
            )}
          </VStack>
        </Flex>
      </Box>
    </MotionBox>
  )
}

const Books = () => {
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  const finishedBooks = [
    { title: 'A Little Life', author: 'Hanya Yanagihara', rating: 4.5 },
    { title: 'The Midnight Library', author: 'Matt Haig', rating: 4 },
    { title: 'If Cats Disappeared from the World', author: 'Genki Kawamura', rating: 4 },
    { title: 'The Secret History', author: 'Donna Tartt', rating: 4 },
    { title: 'Normal People', author: 'Salley Rooney', rating: 3 },
    { title: 'Outliers', author: 'Malcolm Gladwell', rating: 4 },
    { title: 'Stolen Focus', author: 'Johann Hari', rating: 4 },
    { title: 'Flowers for Algernon', author: 'Daniel Keyes', rating: 4.5 },
    { title: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future', author: 'Ashlee Vance', rating: 3.7 },
    { title: 'If We Were Villians', author: 'M.L. Rio', rating: 3.75 },
    { title: 'No Longer Human', author: 'Osamu Dazai', rating: 4.0 }
  ]

  const readingBooks = [
    // { title: 'Physics of The Future', author: 'Michio Kaku'}
  ]

  return (
    <Layout>
      <Container maxW="container.lg">
        <Section delay={0.1}>
          <VStack spacing={4} align="flex-start" mb={8}>
            <Heading
              as="h1"
              size="xl"
              fontWeight="bold"
              color={headingColor}
            >
              Reading List
        </Heading>
            <Text fontSize="md" color={textColor} maxW="3xl" lineHeight="tall">
              I enjoy reading as a way to learn and relax. Here&apos;s a collection of books I&apos;ve read, 
              complete with ratings and reviews. Each book has been carefully selected and reflects my 
              interests in technology, psychology, literature, and personal development.
        </Text>
          </VStack>
        </Section>

        <Divider borderColor={borderColor} mb={8} />

        {/* Currently Reading */}
        {readingBooks.length > 0 && (
          <>
            <Section delay={0.2}>
              <Heading
                as="h2"
                size="lg"
                fontWeight="semibold"
                color={headingColor}
                mb={6}
              >
          Currently Reading
        </Heading>
              <MotionVStack
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                spacing={4}
                align="stretch"
              >
                <SimpleGrid columns={[1, 1, 2]} spacing={6}>
          {readingBooks.map((book, index) => (
                    <BookCard key={index} book={book} index={index} />
          ))}
        </SimpleGrid>
              </MotionVStack>
            </Section>
            <Divider borderColor={borderColor} my={8} />
          </>
        )}

        {/* Finished Reading */}
        <Section delay={0.3}>
          <Heading
            as="h2"
            size="lg"
            fontWeight="semibold"
            color={headingColor}
            mb={6}
          >
          Finished Reading
        </Heading>
          <MotionVStack
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            spacing={4}
            align="stretch"
          >
            <SimpleGrid columns={[1, 1, 2]} spacing={6}>
          {finishedBooks.map((book, index) => (
                <BookCard key={index} book={book} index={index} />
          ))}
        </SimpleGrid>
          </MotionVStack>
        </Section>
      </Container>
    </Layout>
  )
}

export default Books
