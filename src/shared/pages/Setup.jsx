import { Box, Button, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import SelectField from '../components/SelectField';
import TextFieldComp from '../components/TextFieldComp';
import useAxios from '../hooks/useAxios';

const Setup = () => {
	const { response, error, loading } = useAxios({ url: '/api_category.php' });

	if (loading) {
		return (
			<Box mt={20}>
				<CircularProgress />
			</Box>
		);
	}

	if (error) {
		return <Typography>Some went wrong!</Typography>;
	}

	const difficultyOptions = [
		{ id: 'easy', name: 'Easy' },
		{ id: 'medium', name: 'Mediu' },
		{ id: 'hard', name: 'Hard' },
	];

	const typeOptions = [
		{ id: 'multiple', name: 'Multiple Choise' },
		{ id: 'boolean', name: 'True/False' },
	];

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<Typography variant="h2" fontWeight="bold">
				QuizApp
			</Typography>
			<form onSubmit={handleSubmit}>
				<SelectField options={response.trivia_categories} label="Category" />
				<SelectField options={difficultyOptions} label="Difficulty" />
				<SelectField options={typeOptions} label="Type" />
				<TextFieldComp />
				<Box mt={3} width="100%">
					<Button fullWidth variant="contained" type="submit">
						Get Started
					</Button>
				</Box>
			</form>
		</>
	);
};

export default Setup;
