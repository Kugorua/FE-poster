import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
export interface IPaginationProps {
  totalPage: number,
  handleChange:(value:number)=>void
}

export default function Pagination ({totalPage, handleChange}: IPaginationProps) {
  const [page, setPage] = useState<number>(0)
  const handlePageClick = (event: any) => {
    setPage(event.selected);
    handleChange(event.selected + 1)
  }
  return (
    <div className='flex justify-center mt-4'>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={totalPage}
        previousLabel="<"
        activeClassName = 'bg-slate-700 text-white'
        className = "flex"
        pageLinkClassName = 'w-[25px] h-[25px] flex justify-center items-center'
        previousLinkClassName = 'w-[25px] h-[25px] flex justify-center items-center'
        nextLinkClassName = 'w-[25px] h-[25px] flex justify-center items-center'
        forcePage = {page}
      />
    </div>
  )
}
