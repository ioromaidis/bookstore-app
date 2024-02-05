import { useLocation, useParams } from 'react-router-dom';
import { capitalize, unslugify } from '@/helpers/utils.ts';

export const getSegmentUrl = (segments: string[], index: number) =>
  `/${segments.slice(0, index + 1).join('/')}`;

const useBreadcrumbs = () => {
  const location = useLocation();
  const { bookId } = useParams();
  const segments = location.pathname.split('/').filter((segment) => !!segment);
  const lastIndex = segments.length - 1;

  if (bookId) {
    segments.pop();
  }

  return segments.map((segment, index) => ({
    label: capitalize(unslugify(segment)),
    url: getSegmentUrl(segments, index),
    isCurrent: index === lastIndex,
  }));
};

export default useBreadcrumbs;
