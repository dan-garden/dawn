import Image from 'next/image'

export default function Avatar({ author }) {
  const name = author
    ? author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name
    : null

  return (
    <div>
      <div>
        <Image
          width={40}
          height={40}
          src={author.avatar.url}
          alt={name}
        />
      </div>
      <div>{name}</div>
    </div>
  )
}
