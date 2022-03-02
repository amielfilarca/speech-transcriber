import {
  Button,
  HStack,
  Icon,
  Input,
  Link,
  Text,
  TextArea,
  VStack,
} from 'native-base'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const ViewTranscript = ({
  transcript,
  goBack,
  isEdited,
  onEditTitle,
  onEditBody,
  onSave,
}) => {
  return (
    <VStack flex={1} bg="white" p={5} space={4}>
      <HStack justifyContent="space-between">
        <Link onPress={goBack}>
          <HStack alignItems="center" space="1">
            <Icon as={AntDesign} name="left" size="xs" />
            <Text>Transcripts</Text>
          </HStack>
        </Link>
        {isEdited && (
          <Button variant="unstyled" p={0} onPress={onSave}>
            Save
          </Button>
        )}
      </HStack>
      <VStack flex={1}>
        <Input
          fontWeight="bold"
          fontSize="sm"
          variant="unstyled"
          defaultValue={transcript.title}
          placeholder="Title"
          onChangeText={onEditTitle}
        />
        <TextArea
          flex={1}
          fontSize="sm"
          variant="unstyled"
          placeholder="Body"
          defaultValue={transcript.body}
          onChangeText={onEditBody}
        />
      </VStack>
    </VStack>
  )
}

export default ViewTranscript
