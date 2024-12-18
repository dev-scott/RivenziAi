import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import React from 'react';

const Search = () => {
  return (
    <div className='flex flex-1 items-center gap-x-3 overflow-hidden rounded-xl border-[1px] border-primary px-4 py-2'>
      <SearchIcon />
      <Input
        placeholder='Search width ai'
        className='flex-1 border-none border-transparent outline-none focus:outline-none'
      />
    </div>
  );
};

export default Search;
