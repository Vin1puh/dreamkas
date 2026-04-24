import style from "./Error.module.scss";

export default function Error() {
    return (
        <div className={style.error}>
            <h1 className={style.e404}>404 Error</h1>
        </div>
    )
}