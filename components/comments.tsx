import Counter from "./counter";

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export default async function CommentsList({
  comments,
}: {
  comments: Comment[];
}) {
  console.log("this console log should be on the server!!!!");
  return (
    <div>
      {comments.map((comment: Comment) => (
        <div key={comment.id} className="rounded shadow-lg m-4 bg-gray-800">
          <div className="px-6 py-4">
            <div className="mb-2 flex items-baseline justify-between">
              <p className="font-bold text-xl">{comment.name}</p>
              <Counter />
            </div>
            <p className="text-gray-200 text-base">{comment.body}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              id: {comment.id}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              by: {comment.email}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
