import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import Categories from '../components/categories'

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div>
        <Avatar author={author} />
      </div>
      <div>
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <div>
        <div>
          <Avatar author={author} />
        </div>
        <div>
          Posted <Date dateString={date} />
          <Categories categories={categories} />
        </div>
      </div>
    </>
  )
}
