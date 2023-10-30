import { Box, Container } from '@mui/material';
import RoutesApp from './routes';

function App() {
	return (
		<>
			<Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
				<RoutesApp />
        </Box>
			</Container>
		</>
	);
}

export default App;
