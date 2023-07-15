import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbProdoro from '../public/images/projects/prodoro.jpg'
import thumbMagneticCar from '../public/images/projects/elec291_project.jpg'

const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="prodoro" title="Prodoro" thumbnail={thumbProdoro}>
              A fun productivity website with a pomodoro timer, a tasklist, and
              a bunch of unique customizations and games
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="elec291_project"
              title="Magnetic Field Controlled Robot"
              thumbnail={thumbMagneticCar}
            >
              A magnetic field controlled car with a PIC32 Timer Interrupt that
              measures signal pauses from a joystick controller at millisecond
              precision, which then converts to movement instructions
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
