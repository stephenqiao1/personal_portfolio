import { Container, Badge, List, ListItem, Link} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="snake_game">
    <Container>
      <Title>
        CPEN333A Snake Game <Badge>2023</Badge>
      </Title>
      <P>
        The game employs Python&apos;s multithreading capabilities, ensuring a smooth
        and responsive gameplay experience. The use of Tkinter provides an
        engaging graphical user interface, making the game more interactive and
        visually appealing.
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
          <span>Python, Tkinter, Multithreading</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
