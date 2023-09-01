import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="TSP Sim">
    <Container>
      <Title>
        Unity TSP Algorithm Visualizer <Badge>2023</Badge>
      </Title>
      <P>
        This project is a Unity-based application that visualizes various
        algorithms for solving the Traveling Salesman Problem (TSP). It provides
        a graphical interface to place cities on a 2D grid and then run
        different algorithms to find the shortest path that visits all cities.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Algorithm Visualizer</Meta>
          <Link href="https://github.com/stephenqiao1/tsp_sim">
            https://github.com/stephenqiao1/tsp_sim{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Unity, C#, Shader Programming</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
