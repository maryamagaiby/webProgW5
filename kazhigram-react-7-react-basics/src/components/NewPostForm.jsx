function NewPostForm() {
    return (    

          <section id="new">
            <h2 className="mb-3">Share your cat moment</h2>
            <form action="#" method="post">

              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" id="title" name="title" className="form-control" required />
              </div>

              <div className="mb-3">
                <label htmlFor="caption" className="form-label">Caption</label>
                <textarea id="caption" name="caption" className="form-control" rows="3" required></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="photo" className="form-label text-muted">Choose photo</label>
                <input disabled type="file" id="photo" name="photo" className="form-control" accept="image/*" />
                <div className="form-text">
                  Post use default image, file upload not supported.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="alt" className="form-label">Image description</label>
                <input disabled type="text" id="alt" name="alt" className="form-control" placeholder="Two cats lying on a rug partially on top of each other" />
              </div>

              <button type="submit" className="btn btn-primary">Post</button>
            </form>
          </section>

    )
}

export default NewPostForm