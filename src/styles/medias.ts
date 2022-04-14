import { generateMedia } from 'styled-media-query';

export const defaultMedias = {
  small: '520px',
  medium: '768px',
  large: '992px',
  extraLarge: '1200px',
  huge: '1400px'
};

export default generateMedia(defaultMedias);
