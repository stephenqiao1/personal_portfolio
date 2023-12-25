import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="snake_game">
    <Container>
      <Title>
        CPEN333A Chat Application <Badge>2023</Badge>
      </Title>
      <P>
        This project exemplifies our group&apos;s capability in network programming,
        concurrent processing, and GUI design using Python&apos;s comprehensive
        standard library modules.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Collaborators</Meta>
          <span>Stephen Qiao and Steven Lee</span>
        </ListItem>
        <ListItem>
          <Meta>Github Link</Meta>
          <Link href="https://github.com/stephenqiao1/CPEN333A_project">
            https://github.com/stephenqiao1/CPEN333A_project/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Tkinter, Multithreading, Multiprocessing</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
