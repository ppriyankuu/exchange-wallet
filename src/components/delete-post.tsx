'use client';

import { deletedPost } from '@/app/actions/server-actions';
import React from 'react';
import { useRouter } from 'next/navigation';

const DeletePost = ({ postId }: { postId: string }) => {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={async () => {
          deletedPost(postId);
          router.push('/blogs');
          router.refresh();
        }}
        className="bg-blue-500 rounded-sm px-2 hover:bg-blue-600"
      >
        delete post
      </button>
    </div>
  );
};

export default DeletePost;
