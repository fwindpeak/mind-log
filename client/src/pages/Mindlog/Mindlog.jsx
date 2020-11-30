import React, { useState } from 'react';
import { Box, Button, Text, Textarea, useToast } from '@chakra-ui/react';
import { addMindlog } from '../../apis/mindlog';
import LogList from './LogList';

function App() {
  let [value, setValue] = useState('');
  const toast = useToast();

  function handleInputChange(e) {
    let inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleSend() {
    addMindlog(value).then(res => {
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    });
  }

  return (
    <Box textAlign="center" fontSize="xl">
      <Text mb="8px">Value: {value}</Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="输入一些临时想法"
        size="sm"
      />
      <Button colorScheme="teal" onClick={handleSend}>
        发送
      </Button>

      <LogList></LogList>
    </Box>
  );
}

export default App;
