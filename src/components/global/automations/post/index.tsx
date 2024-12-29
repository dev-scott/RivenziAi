import { useAutomationPosts } from '@/hooks/use-automations';
import { useQueryAutomationPosts } from '@/hooks/user-queries';
import React from 'react';
import TriggerButton from '../trigger-button';
import { InstagramPostProps } from '@/types/posts.type';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Loader from '../../loader';

type Props = {
  id: string;
};

const PostButton = ({ id }: Props) => {
  const { data } = useQueryAutomationPosts();
  const { posts, onSelectPost, mutate, isPending } = useAutomationPosts(id);

  return (
    <TriggerButton label='Attach a post'>
      {data?.status === 200 ? (
        <div className='flex w-full flex-col gap-y-3'>
          <div className='flex w-full flex-wrap gap-3'>
            {data.data.data.map((post: InstagramPostProps) => (
              <div
                className='relative aspect-square w-4/12 cursor-pointer overflow-hidden rounded-lg'
                key={post.id}
                onClick={() =>
                  onSelectPost({
                    postid: post.id,
                    media: post.media_url,
                    mediaType: post.media_type,
                    caption: post.caption,
                  })
                }
              >
                {posts.find((p) => p.postid === post.id) && (
                  <CheckCircle
                    fill='white'
                    stroke='black'
                    className='absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform'
                  />
                )}
                <Image
                  fill
                  sizes='100vw'
                  src={post.media_url}
                  alt='post image'
                  className={cn(
                    'transition duration-100 hover:opacity-75',
                    posts.find((p) => p.postid === post.id) && 'opacity-75'
                  )}
                />
              </div>
            ))}
          </div>
          <Button
            onClick={mutate}
            disabled={posts.length === 0}
            className='w-full bg-gradient-to-br from-[#3352CC] to-[#1C2D70] font-medium text-white'
          >
            <Loader state={isPending}>Attach Post</Loader>
          </Button>
        </div>
      ) : (
        <p className='text-text-secondary text-center'>No posts found!</p>
      )}
    </TriggerButton>
  );
};

export default PostButton;
