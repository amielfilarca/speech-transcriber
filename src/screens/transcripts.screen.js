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
    <VStack flex={1} p={5} space={4} bg={'white'}>
      <Heading>Transcripts</Heading>
      {transcripts.length > 0 ? (
        <SwipeListView
          data={transcripts}
          keyExtractor={(item) => item.id}
          stopLeftSwipe={50}
          ItemSeparatorComponent={() => <Divider />}
          rightOpenValue={-160}
          renderItem={({ item }) => (
            <Pressable
              py={4}
              bg={'white'}
              onPress={() =>
                console.log('Pressed ', item.id)
              }
            >
              <HStack space={4} alignItems={'center'}>
                <Text fontSize={'2xs'} color={'gray.500'}>
                  {format(new Date(item.created), 'PPp')}
                </Text>
                <Text
                  flex={1}
                  numberOfLines={1}
                  fontWeight={'bold'}
                >
                  {item.value}
                </Text>
              </HStack>
            </Pressable>
          )}
          renderHiddenItem={({ item }) => (
            <HStack
              px={4}
              h={'full'}
              space={4}
              alignItems={'center'}
              justifyContent={'flex-end'}
            >
              <Button
                _text={{ fontSize: 'xs' }}
                variant={'subtle'}
                colorScheme={'info'}
                onPress={() =>
                  console.log('Edit ', item.id)
                }
              >
                Edit
              </Button>
              <Button
                _text={{ fontSize: 'xs' }}
                variant={'subtle'}
                colorScheme={'danger'}
                onPress={() => deleteTranscript(item.id)}
              >
                Delete
              </Button>
            </HStack>
          )}
        />
      ) : (
        <Center flex={1}>
          <Text color={'gray.500'} fontWeight={'bold'}>
            Empty
          </Text>
        </Center>
      )}
    </VStack>
  )
}

export default Transcripts
