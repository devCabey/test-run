import React, { useRef } from 'react';
import { FiSearch } from 'react-icons/fi';

const Search = ({ sx }) => {
  const inputRef = useRef();
  return (
    <div
      className={`flex items-center justify-between bg-gray-100 ${sx} text-sm text-gray-700 border gap-2 px-2 `}
      onClick={() => inputRef.current.focus()}>
      <FiSearch className='text-gray-500' />
      <input
        type='text'
        placeholder='Search'
        className='bg-transparent flex-1 h-full outline-none'
        ref={inputRef}
      />
    </div>
  );
};

export default Search;
