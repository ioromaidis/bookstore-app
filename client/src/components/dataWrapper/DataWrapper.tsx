import React from 'react';
import Spinner from '../spinner';
import EmptyResults from '../emptyResults';

interface Props {
  isLoading: boolean;
  dataCheck: boolean;
  children: React.ReactNode;
}

const DataWrapper: React.FC<Props> = ({ isLoading, dataCheck, children }) => (
  <>
    {isLoading && <Spinner />}
    {!isLoading && dataCheck && children}
    {!isLoading && !dataCheck && <EmptyResults />}
  </>
);

export default DataWrapper;
