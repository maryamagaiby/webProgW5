import Post from './Post'

function Feed() {
  return (
    <section id="feed">
        <h1>Feed</h1>
        {/* hardcoded example post, will be replaced with posts.map() when useState is added */}
        <Post 
            title="The winter is coming"
            caption="Still some grass to eat."
            imageUrl="cat1.jpg"
            imageAlt="Cat wearing a harness outdoors on grass and snow"
            likes={5}
        />
    </section>
  )
}

export default Feed