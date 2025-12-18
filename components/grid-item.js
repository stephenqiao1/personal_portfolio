import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, useColorModeValue } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, title, thumbnail }) => {
  return (
    <Box w="100%" align="center">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <Text mt={2} fontWeight="semibold">{title}</Text>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}

export const WorkGridItem = ({ children, id, title, thumbnail }) => {
  const headingColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box
      w="100%"
      textAlign="center"
      borderRadius="lg"
      overflow="hidden"
      borderWidth="1px"
      borderColor={borderColor}
      transition="all 0.2s"
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'lg',
        borderColor: useColorModeValue('teal.300', 'teal.600')
      }}
    >
      <LinkBox
        as={NextLink}
        href={`/projects/${id}`}
        scroll={false}
        cursor="pointer"
        display="block"
      >
        <Box
          position="relative"
          width="100%"
          height="200px"
          overflow="hidden"
          bg={useColorModeValue('gray.100', 'gray.700')}
        >
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%'
            }}
          />
        </Box>
        <Box p={4}>
          <Text
            mt={0}
            mb={2}
            fontSize="lg"
            fontWeight="semibold"
            color={headingColor}
          >
            {title}
          </Text>
          <Text fontSize="sm" color={textColor} lineHeight="tall">
            {children}
          </Text>
        </Box>
      </LinkBox>
    </Box>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
        .grid-item-thumbnail {
          border-radius: 0;
        }
      `}
  />
)
