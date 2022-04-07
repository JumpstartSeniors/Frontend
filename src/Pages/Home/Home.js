import { ChakraProvider, useColorMode, Button } from '@chakra-ui/react'
import Hero from '../../Components/Hero/Hero';
import Stats from '../../Components/Stats/Stats';
function Home() {
    return (
        <ChakraProvider >
            <Hero />
            <Stats  />
        </ChakraProvider>
    );
}

export default Home;
