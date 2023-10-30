import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import SelectField from '../components/SelectField';
import TextFieldComp from '../components/TextFieldComp';
import useAxios from '../hooks/useAxios';

const Setup = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php"})
  console.log(response)
  const handleSubmit = (e) => {
    e.preventDefault();
  }

	return (
		<>
			<Typography variant="h2" fontWeight='bold'>
				QuizApp
			</Typography>
      <form onSubmit={handleSubmit}>
        <SelectField label="Category"/>
        <SelectField label="Difficulty"/>
        <SelectField label="Type"/>
        <TextFieldComp />
        <Box mt={3} width='100%'>
          <Button fullWidth variant='contained' type='submit'>
            Get Started
          </Button>
        </Box>
      </form>
		</>
	);
};

export default Setup;
