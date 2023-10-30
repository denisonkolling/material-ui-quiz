import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import SelectField from '../components/SelectField';

const Setup = () => {

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
