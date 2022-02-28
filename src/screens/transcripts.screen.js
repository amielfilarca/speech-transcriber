import { format } from 'date-fns'
import {
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

const Transcripts = ({ transcripts, deleteTranscript }) => {
  return (
    <VStack bg="white" flex={1} p={5} space={4}>
      <Heading>Transcripts</Heading>
      {transcripts.length > 0 ? (
        <SwipeListView
          ItemSeparatorComponent={() => <Divider />}
          data={transcripts}
          keyExtractor={(item) => item.id}
          renderHiddenItem={({ item }) => (
            <HStack
              alignItems="center"
              h="full"
              justifyContent="flex-end"
              px={4}
              space={4}
            >
              <Button
                _text={{ fontSize: 'xs' }}
                colorScheme="info"
                variant="subtle"
                onPress={() =>
                  console.log('Edit ', item.id)
                }
              >
                Edit
              </Button>
              <Button
                _text={{ fontSize: 'xs' }}
                colorScheme="danger"
                variant="subtle"
                onPress={() => deleteTranscript(item.id)}
              >
                Delete
              </Button>
            </HStack>
          )}
          renderItem={({ item }) => (
            <Pressable
              bg="white"
              py={4}
              onPress={() =>
                console.log('Pressed ', item.id)
              }
            >
              <HStack alignItems="center" space={4}>
                <Text color="gray.500" fontSize="2xs">
                  {format(new Date(item.created), 'PPp')}
                </Text>
                <Text
                  flex={1}
                  fontWeight="bold"
                  numberOfLines={1}
                >
                  {item.value}
                </Text>
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
