import { useLocation } from 'react-router-dom';
import { capitalize } from '@/helpers/utils';
import { BreadcrumbMapping } from './Breadcrumbs';

export const getSegmentUrl = (segments: string[], index: number) =>
  `/${segments.slice(0, index + 1).join('/')}`;

const useBreadcrumbs = (mapping?: BreadcrumbMapping) => {
  const location = useLocation();
  const segments = location.pathname.split('/').slice(1);

  return segments.map((segment, index) => ({
    label: mapping?.[segment] || capitalize(segment),
    url: getSegmentUrl(segments, index),
    isCurrent: index === segments.length - 1,
  }));
};

export default useBreadcrumbs;
