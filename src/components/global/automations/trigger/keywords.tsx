import { Input } from '@/components/ui/input';
import { useKeywords } from '@/hooks/use-automations';
import { useMutationDataState } from '@/hooks/use-mutation-data';
import { useQueryAutomation } from '@/hooks/user-queries';
import { X } from 'lucide-react';
import React from 'react';

type Props = {
  id: string;
};

export const Keywords = ({ id }: Props) => {
  const { onValueChange, keyword, onKeyPress, deleteMutation } =
    useKeywords(id);
  const { latestVariable } = useMutationDataState(['add-keyword']);
  const { data } = useQueryAutomation(id);

  return (
    <div className='bg-background-80 flex flex-col gap-y-3 rounded-xl p-3'>
      <p className='text-text-secondary text-sm'>
        Add words that trigger automations
      </p>
      <div className='flex flex-wrap items-center justify-start gap-2'>
        {data?.data?.keywords &&
          data?.data?.keywords.length > 0 &&
          data?.data?.keywords.map(
            (word) =>
              word.id !== latestVariable.variables.id && (
                <div
                  className='bg-background-90 text-text-secondary flex items-center gap-x-2 rounded-full px-4 py-1 capitalize'
                  key={word.id}
                >
                  <p>{word.word}</p>
                </div>
              )
          )}
        {latestVariable && latestVariable.status === 'pending' && (
          <div className='bg-background-90 text-text-secondary flex items-center gap-x-2 rounded-full px-4 py-1 capitalize'>
            {latestVariable.variables.keyword}
          </div>
        )}
        <Input
          placeholder='Add keyword...'
          style={{
            width: Math.min(Math.max(keyword.length || 10, 2), 50) + 'ch',
          }}
          value={keyword}
          className='border-none bg-transparent p-0 outline-none ring-0'
          onChange={onValueChange}
          onKeyUp={onKeyPress}
        />
      </div>
    </div>
  );
};
export default Keywords;
