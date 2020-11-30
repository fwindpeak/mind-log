import React, { useState, useEffect } from 'react';
import { Container, Box, Text } from '@chakra-ui/react';
import { delMindlog, addMindlog, listMindlog } from '../../apis/mindlog';

function App(props) {
  const [logList, setLogList] = useState([]);

  useEffect(() => {
    listMindlog().then(res => {
      setLogList(res.data);
    });
  }, []);

  const logDivList = logList.map(item => {
    return (
      <Container key={item.content} maxW="xl" centerContent={false}>
        <Box
          padding="4"
          bg="gray.100"
          maxW="3xl"
          marginTop="2"
          borderRadius="md"
        >
          <Text>{item.content}</Text>
          <Text fontSize="sm" color="gray.500">
            {item.createdTime}
          </Text>
        </Box>
      </Container>
    );
  });

  return <Box>{logDivList}</Box>;
}

export default App;
