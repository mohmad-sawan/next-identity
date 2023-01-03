import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    // <div className={styles.home}>
    // <h2>Welcome to Gaming Vibes</h2>
    // <div>
    // <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti rem aspernatur odit hic autem neque repellat alias? Debitis veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti rem aspernatur odit hic autem neque repellat alias? Debitis veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti rem aspernatur odit hic autem neque repellat alias? Debitis veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor id.</p>
    // </div>
    // </div>
    <div  className={styles.home} >
      <article className={"card"}>
        <div className="card__content">
          <h3 className="card__title">Title</h3>
          <p className="card__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi officia consequatur illo labore corporis cupiditate possimus nobis, odio consequuntur non.</p>
        </div>
      </article>

      <article className={"card"}>
        <div className="card__content">
          <h3 className="card__title">Title</h3>
          <p className="card__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi officia consequatur illo labore corporis cupiditate possimus nobis, odio consequuntur non.</p>
        </div>
      </article>

      <article className={"card"}>
        <div className="card__content">
          <h3 className="card__title">Title</h3>
          <p className="card__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi officia consequatur illo labore corporis cupiditate possimus nobis, odio consequuntur non.</p>
        </div>
      </article>
    
    </div>
  )
}
