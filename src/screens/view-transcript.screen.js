import BottomSheet, {
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet'
import { format } from 'date-fns'
import {
  Button,
  Center,
  HStack,
  Icon,
  Input,
  Link,
  Spinner,
  Text,
  TextArea,
  VStack,
} from 'native-base'
import React, { useMemo } from 'react'
import { StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const ViewTranscript = ({
  transcript,
  goBack,
  isEdited,
  onEditTitle,
  onEditBody,
  onSave,
  onExport,
  isSaving,
  isTranscriptValidating,
}) => {
  const isLoading = useMemo(
    () => isSaving || isTranscriptValidating,
    [isSaving, isTranscriptValidating]
  )

  const hasSaveButton = useMemo(
    () => !isLoading && isEdited,
    [isLoading, isEdited]
  )

  const sheetRef = React.useRef(null)

  const data = useMemo(
    () => transcript?.history || [],
    [transcript?.history]
  )

  const snapPoints = useMemo(
    () => ['10%', '50%', '90%'],
    []
  )

  return (
    <VStack bg="white" flex={1} p={5} space={4}>
      <HStack justifyContent="space-between">
        <Link onPress={goBack}>
          <HStack alignItems="center" space="1">
            <Icon as={AntDesign} name="left" size="xs" />
            <Text>Transcripts</Text>
          </HStack>
        </Link>
        <HStack space={4}>
          {isLoading && (
            <Button
              isDisabled
              leftIcon={<Spinner />}
              p={0}
              variant="unstyled"
              onPress={onSave}
            >
              Saving
            </Button>
          )}
          {hasSaveButton && (
            <Button
              leftIcon={
                <Icon
                  as={AntDesign}
                  name="save"
                  size="xs"
                />
              }
              p={0}
              variant="unstyled"
              onPress={onSave}
            >
              Save
            </Button>
          )}
          <Button
            leftIcon={
              <Icon
                as={AntDesign}
                name="export"
                size="xs"
              />
            }
            p={0}
            variant="unstyled"
            onPress={onExport}
          >
            Export
          </Button>
        </HStack>
      </HStack>
      <Center>
        <Text
          color="gray.500"
          fontSize="xs"
          lineHeight="xs"
        >
          {transcript?.updatedAt &&
            `${format(
              new Date(transcript?.updatedAt),
              'MMMM d, yyyy'
            )} at ${format(
              new Date(transcript?.updatedAt),
              'p'
            )}`}
        </Text>
      </Center>
      <VStack flex={1}>
        <Input
          defaultValue={transcript?.title}
          fontSize="sm"
          fontWeight="bold"
          placeholder="Title"
          variant="unstyled"
          onChangeText={onEditTitle}
        />
        <TextArea
          defaultValue={transcript?.body}
          flex={1}
          fontSize="sm"
          placeholder="Body"
          variant="unstyled"
          onChangeText={onEditBody}
        />
      </VStack>
      <BottomSheet
        ref={sheetRef}
        index={data.length ? 0 : -1}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
      >
        <BottomSheetScrollView
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
        >
          <Text color="gray.500" fontSize="xs">{`Last ${
            data.length
          } edit${data.length > 1 ? 's' : ''}`}</Text>
          <VStack mt={4} space={4}>
            {data.map(
              ({ title, body, updatedAt }, index) => (
                <VStack
                  key={index}
                  bgColor="gray.100"
                  p={4}
                  rounded="lg"
                >
                  <Center>
                    <Text
                      color="gray.500"
                      fontSize="xs"
                      lineHeight="xs"
                    >
                      {`${format(
                        new Date(updatedAt),
                        'MMMM d, yyyy'
                      )} at ${format(
                        new Date(updatedAt),
                        'p'
                      )}`}
                    </Text>
                  </Center>
                  <Text fontWeight="bold">{title}</Text>
                  <Text>{body}</Text>
                </VStack>
              )
            )}
          </VStack>
        </BottomSheetScrollView>
      </BottomSheet>
    </VStack>
  )
}

const styles = StyleSheet.create({
  bottomSheet: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})

export default ViewTranscript
