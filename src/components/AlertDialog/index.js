import {
  AlertDialog as NbAlertDialog,
  Button,
} from 'native-base'
import React from 'react'

const AlertDialog = ({
  header,
  body,
  status,
  confirm,
  leastDestructiveRef,
  isOpen,
  onCancel,
  onConfirm,
}) => {
  return (
    <NbAlertDialog
      leastDestructiveRef={leastDestructiveRef}
      isOpen={isOpen}
      onClose={onCancel}
    >
      <NbAlertDialog.Content>
        <NbAlertDialog.CloseButton />
        <NbAlertDialog.Header>
          {header}
        </NbAlertDialog.Header>
        <NbAlertDialog.Body>{body}</NbAlertDialog.Body>
        <NbAlertDialog.Footer>
          <Button.Group space={2}>
            <Button
              ref={leastDestructiveRef}
              variant="unstyled"
              colorScheme="coolGray"
              onPress={onCancel}
            >
              Cancel
            </Button>
            <Button
              colorScheme={status}
              onPress={onConfirm}
            >
              {confirm}
            </Button>
          </Button.Group>
        </NbAlertDialog.Footer>
      </NbAlertDialog.Content>
    </NbAlertDialog>
  )
}

export default AlertDialog
