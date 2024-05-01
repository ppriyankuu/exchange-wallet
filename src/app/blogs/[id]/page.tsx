import Comments from '@/components/comments';
import DeletePost from '@/components/delete-post';
import FormComment from '@/components/form-comments';
import prisma from '@/lib/db';
import { getCurrentUser } from '@/lib/session';
import { FC } from 'react';

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}
const BlogDetailPage: FC<BlogDetailPageProps> = async ({
  params,
}: {
  params: { id: string };
}) => {
  const post = await prisma.post.findFirst({
    where: {
      id: params.id,
    },
    include: {
      author: true,
    },
  });

  const user = await getCurrentUser();

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">{post?.title}</h1>
        {user?.name === post?.author?.name ? (
          <DeletePost postId={post?.id ?? ''} />
        ) : (
          ''
        )}
      </div>
      <p>
        Written by:{' '}
        <span className="rounded-xl px-2 bg-white text-black font-bold">
          {post?.author?.name}
        </span>
      </p>
      <div className="mt-4">{post?.content}</div>

      <Comments postId={params.id} />
      <FormComment postId={params.id} />
    </div>
  );
};

export default BlogDetailPage;
