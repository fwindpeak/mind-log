import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Editable, EditableInput,
} from '@chakra-ui/react';
import {delMindlog,addMindlog,listMindlog} from '../../apis/mindlog'


function App() {

    const logList = [
        {
            content:'this is first',
            createdTime:'20201130-1851'
        },
        {
            content:'这是第二篇这是第二篇这是第二篇这是第二篇这是第二篇这是第二篇这是第二篇这是第二篇',
            createdTime:'20201130-1851'
        },
        {
            content:'this is third',
            createdTime:'20201130-1851'
        }
    ]

    const logDivList = logList.map((item)=>{
        <Box>
            <h2>{item.conten}</h2>
            <Text>{item.conten}</Text>
            <Text fontSize="sm" color="gray.500">{item.createdTime}</Text>
        </Box>
    })

  return (
      <Box>
        {logDivList}
      </Box>
   
  );
}

export default App;
