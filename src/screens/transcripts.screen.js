import { format } from 'date-fns'
import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Pressable,
  Text,
  VStack,
} from 'native-base'
import React from 'react'
import { SwipeListView } from 'react-native-swipe-list-view'

const Transcripts = ({
  transcripts,
  deleteTranscript,
  handleViewTranscript,
  handleEditTranscript,
}) => {
  return (
    <VStack bg="white" flex={1} space={4}>
      <Heading p={5} pb={0}>
        Transcripts
      </Heading>
      {transcripts.length > 0 ? (
        <SwipeListView
          ItemSeparatorComponent={() => (
            <Box px={5}>
              <Divider />
            </Box>
          )}
          data={transcripts}
          keyExtractor={(transcript) => transcript.id}
          renderHiddenItem={({ item: transcript }) => (
            <HStack
              alignItems="center"
              justifyContent="flex-end"
              h="full"
              px={5}
              py={2}
              space={4}
            >
              <Button
                _text={{ fontSize: 'xs' }}
                colorScheme="info"
                variant="subtle"
                onPress={() =>
                  handleEditTranscript(transcript.id)
                }
              >
                Edit
              </Button>
              <Button
                _text={{ fontSize: 'xs' }}
                colorScheme="danger"
                variant="subtle"
                onPress={() =>
                  deleteTranscript(transcript.id)
                }
              >
                Delete
              </Button>
            </HStack>
          )}
          renderItem={({ item: transcript }) => (
            <Pressable
              bg="white"
              px={5}
              py={2}
              onPress={() =>
                handleViewTranscript(transcript.id)
              }
            >
              <HStack alignItems="center" space={4}>
                <Text color="gray.500" fontSize="2xs">
                  {format(
                    new Date(transcript.updatedAt),
                    'PPp'
                  )}
                </Text>
                <VStack flex={1}>
                  <Text numberOfLines={1} fontWeight="bold">
                    {transcript.title}
                  </Text>
                  <Text numberOfLines={1}>
                    {transcript.body}
                  </Text>
                </VStack>
              </HStack>
            </Pressable>
          )}
          rightOpenValue={-160}
          stopLeftSwipe={50}
        />
      ) : (
        <Center flex={1}>
          <Text color="gray.500" fontWeight="bold">
            Empty
          </Text>
        </Center>
      )}
    </VStack>
  )
}

export default Transcripts
