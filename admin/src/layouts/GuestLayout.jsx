// chakra imports
import { Box, ChakraProvider, Portal } from '@chakra-ui/react';
import Footer from '../components/Footer/';
//
// core components
import React from 'react';
import { Outlet } from 'react-router-dom';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from '../theme/theme.js';

const GuestLayout = () => {
	// ref for the wrapper div
	const wrapper = React.createRef();
	React.useEffect(() => {
		document.body.style.overflow = 'unset';
		// Specify how to clean up after this effect:
		return function cleanup() {};
	});

	const navRef = React.useRef();
	document.documentElement.dir = 'ltr';
	return (
		<ChakraProvider theme={theme} resetCss={false} w='100%'>
			<Box ref={navRef} w='100%' minH='100vh'>
				<Box w='100%'>
					<Box ref={wrapper} w='100%'>
                        <Outlet />
					</Box>
				</Box>
			</Box>
		</ChakraProvider>
	);
}

export default GuestLayout;
