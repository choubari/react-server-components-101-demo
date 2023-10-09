import CommentsList from "@/components/comments";

interface PageProps {
  params: {
    postId: number;
  };
}

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getPost(id: number) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return data;
}

async function getComments(id: number) {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return data;
}

interface PageProps {
  params: {
    postId: number;
  };
}
export default async function Post(props: PageProps) {
  const id = props.params.postId;
  const response = await getPost(id);
  const post = await response.json();
  const res = await getComments(id);
  const comments = await res.json();

  if (Object.keys(post).length === 0) {
    throw new Error("Post does not exist");
  }
  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold">Dynamic Post Page, ID: {id}</h1>

      <div key={post.id} className="rounded shadow-lg m-4 bg-purple-950">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{post.title}</div>
          <p className="text-gray-400 text-base">{post.body}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            Post {post.id}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            User {post.userId}
          </span>
        </div>
      </div>
      <h3 className="font-bold text-xl mb-2">Comments:</h3>

      <CommentsList comments={comments} />
    </div>
  );
}
