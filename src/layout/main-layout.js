import { Box } from '@mui/material';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return (
    <Box className='flex flex-col flex-auto w-full'>
      {children}
    </Box>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
