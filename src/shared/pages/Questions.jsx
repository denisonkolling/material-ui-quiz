import { Button, Typography } from '@mui/material';
import React from 'react';

const Questions = () => {
	let apiUrl = `/api.php?amount=10`;

	const { response, loading } = useAxios({ url: apiUrl });

	return (
		<Box>
			<Typography variant="h4">Questions 1</Typography>
			<Typography mt={5}>This is the question?</Typography>
			<Box mt={2}>
				<Button variant="contained">Answer 1</Button>
			</Box>
      <Box mt={2}>
				<Button variant="contained">Answer 2</Button>
			</Box>
		</Box>
	);
};

export default Questions;
