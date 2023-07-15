import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, Meta } from '../../components/project'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Project = () => (
    <Layout title="Prodoro">
      <Container>
        <Title>
          Prodoro <Badge>2022-</Badge>
        </Title>
        <P>
          A productivity website that focuses on the pomodoro technique. 
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.prodoro.io/">
              https://www.prodoro.io/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, ReactJS, SQL, TailwindCSS</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
  
  export default Project;
  export { getServerSideProps } from '../../components/chakra'