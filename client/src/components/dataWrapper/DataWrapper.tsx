import React from 'react';
import Spinner from '../spinner';
import EmptyResults from '../emptyResults';

interface Props {
  isLoading: boolean;
  dataCheck: boolean;
  noResultsText?: string;
  children: React.ReactNode;
}

const DataWrapper: React.FC<Props> = ({
  isLoading,
  dataCheck,
  noResultsText,
  children,
}) => (
  <>
    {isLoading && <Spinner />}
    {!isLoading && dataCheck && children}
    {!isLoading && !dataCheck && <EmptyResults noResultsText={noResultsText} />}
  </>
);

export default DataWrapper;
