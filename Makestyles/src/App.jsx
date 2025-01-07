import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Define the styles outside the component
const useStyles = makeStyles({
  button: {
    backgroundColor: 'yellow !important',
    color: 'black !important',
    '&:hover': {
      backgroundColor: 'gold !important',
    },
  },
});

const App = () => {
  const classes = useStyles(); // Use the styles hook
  //here useStyles is the function itself that needs to be invoked and it is not an object that can be accessed like useStyles.button we have to access it as useStyles().button
  return (
    <div className="App">
      <Button variant="contained" className={useStyles().button}>
        Click Me
      </Button>
    </div>
  );
};

export default App;
