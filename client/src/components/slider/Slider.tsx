import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@mui/material';

import { SETTINGS } from './constants';

interface Props {
  children: React.ReactNode;
}

const Slider: React.FC<Props> = ({ children }) => (
  <Box className="slider-container" p={4}>
    <SlickSlider {...SETTINGS}>{children}</SlickSlider>
  </Box>
);

export default Slider;
