import { useState, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { Link as LinkRoute } from 'react-router-dom';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Icon,
    Input,
    Link,
    Switch,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import BgSignUp from "../assets/img/BgSignUp.png";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { login } = useContext(AuthContext);
    const titleColor = useColorModeValue("teal.300", "teal.200");
    const textColor = useColorModeValue("gray.700", "white");
    const bgColor = useColorModeValue("white", "gray.700");
    const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");

    const handleLogin = async () => {
        try {
            const userData = { email, password };
            const response = await login(userData);
            console.log('Login successful');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <Flex
            direction="column"
            alignSelf="center"
            justifySelf="center"
            overflow="hidden"
        >
            <Box
                position="absolute"
                minH={{ base: "70vh", md: "50vh" }}
                w={{ md: "calc(100vw - 50px)" }}
                borderRadius={{ md: "15px" }}
                left="0"
                right="0"
                bgRepeat="no-repeat"
                overflow="hidden"
                zIndex="0"
                top="0"
                bgImage={BgSignUp}
                bgSize="cover"
                mx={{ md: "auto" }}
                mt={{ md: "14px" }}
            ></Box>
            <Flex
                direction='column'
                zIndex="1"
                textAlign='center'
                justifyContent='center'
                align='center'
                mt='6.5rem'
                mb='30px'>
                <Text fontSize='4xl' color='white' fontWeight='bold'>
                  Welcome!
                </Text>
                <Text
                    fontSize='md'
                    color='white'
                    fontWeight='normal'
                    mt='10px'
                    mb='26px'
                    w={{ base: "90%", sm: "60%", lg: "40%", xl: "30%" }}
                >
                    Use these awesome forms to login or create new account in your project
                    for free.
                </Text>
            </Flex>
            <Flex zIndex="1" alignItems="center" justifyContent="center" mb="60px" mt="20px">
                <Flex
                    direction="column"
                    w="445px"
                    background="transparent"
                    borderRadius="15px"
                    p="40px"
                    mx={{ base: "100px" }}
                    bg={bgColor}
                    boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
                >
                    <FormControl>
                        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                            Email
                        </FormLabel>
                        <Input
                            fontSize="sm"
                            ms="4px"
                            borderRadius="15px"
                            type="email"
                            placeholder="Your email address"
                            mb="24px"
                            size="lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                            Password
                        </FormLabel>
                        <Input
                            fontSize="sm"
                            ms="4px"
                            borderRadius="15px"
                            type="password"
                            placeholder="Your password"
                            mb="24px"
                            size="lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Text
                            color="red"
                            fontSize="sm"
                        >
                            {error}
                        </Text>
                        <Button
                            onClick={handleLogin}
                            bg="teal.300"
                            fontSize="sm"
                            color="white"
                            fontWeight="bold"
                            w="100%"
                            h="45"
                            mb="24px"
                            _hover={{
                                bg: "teal.200",
                            }}
                            _active={{
                                bg: "teal.400",
                            }}
                        >
                            SIGN IN
                        </Button>
                    </FormControl>
                    <Flex
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        maxW="100%"
                        mt="0px"
                    >
                        <Text color={textColor} fontWeight="medium">
                            Need an account?
                            <Link
                                color={titleColor}
                                as={LinkRoute}
                                ms="5px"
                                fontWeight="bold"
                                _hover={{
                                    color: "teal.200"
                                }}
                                to="/register"
                            >
                                Sign Up
                            </Link>
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Login;

