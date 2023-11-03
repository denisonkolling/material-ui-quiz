import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleAmountChange, handleScoreChange } from '../redux/actions';

const FinalScore = () => {
	const { score } = useSelector((state) => state);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleBackToStart = () => {
		dispatch(handleScoreChange(0));
		dispatch(handleAmountChange(5));
		navigate('/start');
	};

	return (
		<Box mt={30}>
			<Typography variant="h3" fontWeight="bold" mb={3}>
				Your Final Score {score}
			</Typography>
			<Button onClick={handleBackToStart} variant="outlined">
				Back to start
			</Button>
		</Box>
	);
};

export default FinalScore;
