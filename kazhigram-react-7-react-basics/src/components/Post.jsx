function Post({ title, caption, imageUrl, imageAlt, likes }) {
  return (
    <article className="card mb-3">
      <img
        className="card-img-top"
        src={`/images/${imageUrl}`}
        alt={imageAlt}
      />
      <div className="card-body">
        <h2 className="card-title h5">{title}</h2>
        <p className="card-text">{caption}</p>
        <div className="d-flex gap-2">
          <button type="button" className="btn btn-primary like-btn">
            ♡ {likes} Likes
          </button>
          <button type="button" className="btn btn-outline-danger delete-btn">
            Delete
          </button>
        </div>
      </div>
    </article>
  )
}

export default Post