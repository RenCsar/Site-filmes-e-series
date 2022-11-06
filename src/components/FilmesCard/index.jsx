import styles from './FilmesCard.module.css';

export default function FilmesCard({filme}) {

    return(
        <div className={styles.post}>
            <img 
                className={styles.image} 
                src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} 
                alt="Card Post" 
            />
            <h1 className={styles.title}>{filme.title}</h1>
            
            <button className={styles.buttoncard}>Assistir</button>
        </div>
    )
}