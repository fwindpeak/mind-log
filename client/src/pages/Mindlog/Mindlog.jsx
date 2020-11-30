import React from 'react';
import {
  Box,
  Button,
  Text, Textarea
} from '@chakra-ui/react';
import {delMindlog,addMindlog,listMindlog} from '../../apis/mindlog'
import LogList from './LogList'


function handleInputChange (e){
    console.log('handleInputChange',e)
}


function App() {
    let value = 'hello'
  return (
      <Box textAlign="center" fontSize="xl">
           <Text mb="8px">Value: {value}</Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Here is a sample placeholder"
        size="sm"
      />
        <Button  colorScheme="teal">发送</Button>

        <LogList></LogList>

      </Box>
  );
}

export default App;
