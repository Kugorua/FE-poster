import Import from '@/api/importAPI';
import List from '@/components/list';
import { logout } from '@/utilities';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface IImportNftProps {
}

export default function ImportNft (props: IImportNftProps) {
  const [page, setPage] = useState(1)
  const Navigate = useNavigate()

  const {data, isFetching, isPreviousData, isLoading} = Import.get({page})
  const handleLogut = () => {
    logout(Navigate)
  }

  const getDataFromID = (value: number) => {
    setPage(value)
  }

  return (
    <div>
      <List 
        data = {data}
        loading = {(isFetching && isPreviousData) || isLoading}
        handleChange = {getDataFromID}
      />
    </div>

  );
}
