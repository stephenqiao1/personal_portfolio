import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.600', 'gray.400')
  const activeColor = useColorModeValue('gray.900', 'whiteAlpha.900')
  const borderActiveColor = useColorModeValue('teal.500', 'teal.300')

  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      color={active ? activeColor : inactiveColor}
      fontWeight={active ? 'semibold' : 'normal'}
      borderBottom={active ? '2px solid' : '2px solid transparent'}
      borderColor={active ? borderActiveColor : 'transparent'}
      _hover={{
        color: activeColor,
        textDecoration: 'none'
      }}
    >
      {children}
    </Link>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff', '#1a1a1a')}
      borderBottom="1px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
          spacing={6}
        >
          <LinkItem href="/" path={path}>
            About me
          </LinkItem>
          <LinkItem href="/experience" path={path}>
            Work & Education
          </LinkItem>
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="/skills" path={path}>
            Skills
          </LinkItem>
          <LinkItem href="/books" path={path}>
            Reading List
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={NextLink} href="/">
                  About me
                </MenuItem>
                <MenuItem as={NextLink} href="/experience">
                  Work & Education
                </MenuItem>
                <MenuItem as={NextLink} href="/projects">
                  Projects
                </MenuItem>
                <MenuItem as={NextLink} href="/skills">
                  Skills
                </MenuItem>
                <MenuItem as={NextLink} href="/books">
                  Reading List
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
