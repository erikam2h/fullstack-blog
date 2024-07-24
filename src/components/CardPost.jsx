export default function CardPost({ post }) {
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={post.cover} alt={post.tltle} />
          {/* {post.cover} */}
        </figure>
        <div className="card-body">
          <h2 className="card-title mb-2">{post.title}</h2>
          <div className="card-actions justify-between">
            <div className="badge badge-secondary">{post.author}</div>
            <h3 className="text-gray-400 font-bold">
              {new Date(post.createdAt).toDateString()}
            </h3>
          </div>

          <p className="truncate text-wrap line-clamp-2">{post.content}</p>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-accent btn-sm">Read more</button>
          </div>
        </div>
      </div>
    </>
  );
}
