import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const CreateBookButton = () => {
  return (
    <Box position="fixed" bottom={20} right={20} zIndex={200}>
      <Button
        href="/books/create"
        color="secondary"
        variant="contained"
        size="large"
        startIcon={<AddIcon />}
      >
        Add New
      </Button>
    </Box>
  );
};

export default CreateBookButton;
