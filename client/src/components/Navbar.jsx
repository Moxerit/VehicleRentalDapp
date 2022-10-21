import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import { useContext } from 'react';
  import { BlockchainContext } from '../context/BlockchainContext';
  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    const { connectWallet, currentAccount } = useContext(BlockchainContext);
  
    return (
      <Box>
        <Flex
          bg='gray.900'
          color='white'
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor='gray.900'
          align={'center'}>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color='white'
              fontWeight={900}
              fontSize={'x-large'}>
              <Link to="/">VehicleChain</Link>
            </Text>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
            onClick={connectWallet}
              display={{ md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'red.600'}
              href={'#'}
              _hover={{
                bg: 'red.500',
              }}>
              {!currentAccount ? "Connect Wallet" : `${currentAccount.slice(0, 5)}...${currentAccount.slice(currentAccount.length - 4)}`}
            </Button>
          </Stack>
        </Flex>
      </Box>
    );
  }
  
  const NAV_ITEMS = [];