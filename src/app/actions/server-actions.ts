import axios from 'axios';

export const deletedPost = async (postId: string) => {
  const response = await axios.delete('/api/posts', {
    data: {
      id: postId,
    },
  });

  if (response.status == 200) {
    return response.data;
  }
};
