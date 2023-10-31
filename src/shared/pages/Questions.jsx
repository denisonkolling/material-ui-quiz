import { Button, Typography, Box, CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import useAxios from '../hooks/useAxios';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Questions = () => {
	const {
		question_category,
		question_difficulty,
		question_type,
		amount_of_question,
		score,
	} = useSelector((state) => state);

	let apiUrl = `/api.php?amount=${amount_of_question}`;
	if (question_category) {
		apiUrl = apiUrl.concat(`&category=${question_category}`);
	}
	if (question_difficulty) {
		apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
	}
	if (question_type) {
		apiUrl = apiUrl.concat(`&type=${question_type}`);
	}

	const { response, loading } = useAxios({ url: apiUrl });
	const [questionIndex, setQuestionIndex] = useState(0);
	const [options, setOptions] = useState([]);
	const navigate = useNavigate();

	const shuffle = (array) => {
		return array.sort(() => Math.random() - 0.5);
	};

	useEffect(() => {
		if (response?.results.length) {
			const question = response.results[questionIndex];
			let answers = [...question.incorrect_answers, question.correct_answer];
			const shuffleAnswers = shuffle(answers);
			setOptions(shuffleAnswers);
		}
	}, [response, questionIndex]);

	if (loading) {
		return (
			<Box mt={20}>
				<CircularProgress />
			</Box>
		);
	}

	const handleClickAnswer = () => {
		if (questionIndex + 1 < response.results.length) {
			setQuestionIndex(questionIndex + 1);
		} else {
			navigate('/score');
		}
	};

	return (
		<Box>
			<Typography variant="h4">Question {questionIndex + 1}</Typography>
			<Typography mt={5}>
				{response && response.results && response.results.length > 0
					? response.results[0].question
					: null}
			</Typography>
			{options.map((data, id) => (
				<Box mt={2} key={id}>
					<Button onClick={handleClickAnswer} variant="contained">
						{data}
					</Button>
				</Box>
			))}
		</Box>
	);
};

export default Questions;
