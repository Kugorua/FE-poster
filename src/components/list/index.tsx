import { ListResponse } from '@/model';
import React from 'react';
import Item from '../item';
import Pagination from '../pagination';

export interface IListProps {
  data:ListResponse<any> | undefined,
  loading: boolean,
  handleChange : (value:number) => void
}

 const List = (props: IListProps) =>  {
  const {data, handleChange, loading} = props

  return (
    <div className='block'>
     <div className='block w-full p-[12px]'>
        <ul className='inline-flex flex-wrap m-[-12px] w-[calc(100%+12px)]'>
          {
            (data?.list || Array.from(Array(10)) ).map((item:any, index:number) => (
            <li className='w-[calc(25%-12px)] m-[12px]' key={index}>
              <Item loading={loading}>
                <div className='min-h-[250px] flex justify-center'>
                  <img className='w-auto h-full object-contain' src={item?.nfts.image_url } alt={item?.nfts.name}/>
                </div>
                <h3 className='text-slate-900 text-center h-[24px] mt-2'>{item?.nfts.name}</h3>
              </Item>
            </li>
            ))
          }
        </ul>
        <Pagination handleChange = {handleChange} totalPage={data?.total_pages as number} />
     </div>
    </div> 
  );
}

export default List