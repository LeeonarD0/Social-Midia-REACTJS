import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/LeeonarD0.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>leonardo</strong>
              <time title="29th March 09:34am" dateTime="2025-01-29 09:34:12">About an hour ago.</time>
            </div>

            <button title='delete comment'>
              <Trash size={24}/>
            </button>
          </header>
          
        
        <p>vERYY GOOODSA JUGNDFS OOGSA ODFMASDOF</p>
        </div>

        <footer>
          <button>
            <ThumbsUp/>
            Applaud him <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}