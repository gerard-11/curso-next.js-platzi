import styles from './Loader.module.scss';

export const Loader = () => {
    return (
        <div className={styles.LoaderWrapper}>
            <div className={styles.Loader}>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <br/>
                <br/>
                <br/>
                <h2>Cargando......</h2>
            </div>
        </div>
    )
};