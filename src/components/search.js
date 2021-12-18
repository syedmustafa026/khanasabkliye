import React from 'react';
import {
    VStack,
    Input,
    Icon,
    Center,
    NativeBaseProvider,
} from 'native-base';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
const SearchBar = ()=> {
    return (
        <VStack width="100%" space={5} alignItems="center">
            <Input
                placeholder={" Search"}
                bg="#fff"
                width="100%"
                borderRadius="9"
                py="3"
                px="1"
                mt="2"
                fontSize="14"
                _web={{
                    _focus: { borderColor: '#2A2AC0', style: { boxShadow: 'grey' } },
                }}
                InputRightElement={

                    <Icon
                        m="2"
                        mr="3"
                        size="6"
                        color="gray.400"
                        as={<MaterialIcons name="search" />}
                    />
                }
            />
        </VStack>
    );
}

export default function Searchbarz() {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="2">
        <SearchBar/>
      </Center>
    </NativeBaseProvider>
  );
}
