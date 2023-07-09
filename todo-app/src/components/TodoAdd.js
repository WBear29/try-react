import { Textarea, Button } from '@chakra-ui/react';

export const TodoAdd = ({
  placeholder,
  buttonText,
  inputEl,
  handleAddTodoListItem
}) => {
  return (
    <>
      <Textarea
        placeholder={placeholder}
        bgColor="white"
        mt="8"
        borderColor="gray.400"
        ref={inputEl} />
      <Button
        onClick={handleAddTodoListItem}
        colorScheme="blue"
        mt="8"
      >
        {buttonText}
      </Button>
    </>
  );
};