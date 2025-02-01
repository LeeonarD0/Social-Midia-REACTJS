import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import  enGB  from 'date-fns/locale/en-GB'

export function Post({ author, publishedAt, content}) {
  const publishedDateFormatted = format(publishedAt, "d LLLL 'at' HH:mm'h'", {
    locale: enGB
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: enGB,
    addSuffix: true
  })
  

  return (
    <article className={styles.post}>
      <header>

        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>

       {content.map((item) => {
        if(item.type === 'paragraph'){
          return (
          <p>{item.content}</p>
        )
        } else if(item.type === 'link'){
          return (
          <p>
            <a href="">{item.content}</a>
          </p>
          )
        }
       })
       }
        
        <p>
          <a href="#">#newProject{' '}</a>
          <a href="#">#portfolio</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave your feedback</strong>

        <textarea 
          placeholder='Leave a comment...'
        />

        <footer>
        <button type='submit'>Comment</button>
        </footer>
      </form>

    <div className={styles.commentList}>
      <Comment/>
      <Comment/>
    </div>
    </article>
  )
}