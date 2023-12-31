import { Button, Typography, Box, CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import useAxios from '../hooks/useAxios';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleScoreChange } from '../redux/actions';
import { decode } from 'html-entities';

const Questions = () => {
	const {
		question_category,
		question_difficulty,
		question_type,
		amount_of_question,
		score,
	} = useSelector((state) => state);
	const dispatch = useDispatch();

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

	const handleClickAnswer = (e) => {
		const question = response.results[questionIndex];
		if (e.target.textContent === question.correct_answer) {
			dispatch(handleScoreChange(score + 1));
		}
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
					? decode(response.results[questionIndex].question)
					: null}
			</Typography>
			{options.map((data, id) => (
				<Box mt={2} key={id}>
					<Button onClick={handleClickAnswer} variant="contained">
						{decode(data)}
					</Button>
				</Box>
			))}
			<Typography mt={2}>Score: {score} / {response.results.length}</Typography>
		</Box>
	);
};

export default Questions;
