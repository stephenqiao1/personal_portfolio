import { Container, Heading, SimpleGrid, Box, Text, Divider, Badge } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Books = () => {
  const finishedBooks = [
    { title: 'The Midnight Library', author: 'Matt Haig', rating: 4 },
    { title: 'If Cats Disappeared from the World', author: 'Genki Kawamura', rating: 4 },
    { title: 'The Secret History', author: 'Donna Tartt', rating: 4 },
    { title: 'Normal People', author: 'Salley Rooney', rating: 3},
    { title: 'Outliers', author: 'Malcolm Gladwell', rating: 4},
    { title: 'Stolen Focus', author: 'Johann Hari', rating: 4},
    { title: 'Flowers for Algernon', author: 'Daniel Keyes', rating: 4.5},
    { title: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future', author: 'Ashlee Vance', rating: 3.7},
    { title: 'If We Were Villians', author: 'M.L. Rio', rating: 3.75}

    // Add more finished books here
  ]

  const readingBooks = [
    { title: 'Physics of The Future', author: 'Michio Kaku'}
  ]

  return (
    <Layout>
      <Container>
        <Heading as="h2" fontSize={24} mb={4}>
          Books
        </Heading>

        <Text fontSize={18} mb={4}>
          I enjoy reading as a way to learn and relax. Here&apos;s a list of books I&apos;ve read, as well as those I&apos;m currently reading.
        </Text>

        <Divider mb={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Currently Reading
        </Heading>

        <SimpleGrid columns={1} spacing={2}>
          {readingBooks.map((book, index) => (
            <Box key={index} p={2} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">{book.title}</Heading>
              <Text>Author: {book.author}</Text>
            </Box>
          ))}
        </SimpleGrid>

        <Heading as="h3" fontSize={20} mb={4} mt={8}>
          Finished Reading
        </Heading>

        <SimpleGrid columns={1} spacing={2}>
          {finishedBooks.map((book, index) => (
            <Box key={index} p={2} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">{book.title}</Heading>
              <Text>Author: {book.author}</Text>
              <Badge colorScheme={book.rating > 3 ? "green" : "orange"}>{book.rating}/5</Badge>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Books
