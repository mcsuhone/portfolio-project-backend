const dummy = (blogs) => {
  console.log(blogs)
  return 1
}

const totalLikes = (blogs) => {
  if (blogs.length === 0) {
    return 0
  }
  const likes = blogs.map(blog => blog.likes).reduce((total, likes) => total + likes)
  return likes
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return {
      title: '',
      author: '',
      likes: 0
    }
  }
  const favoriteBlog = blogs.reduce((max, blog) => blog.likes > max.likes ? blog : max)
  return {
    title: favoriteBlog.title,
    author: favoriteBlog.author,
    likes: favoriteBlog.likes
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}