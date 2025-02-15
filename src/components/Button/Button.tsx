/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './Button.module.scss'

export const Button = ({ text, children }: any) => {
    return (
        <button className={styles.btn}>{text ?? children}</button>
    )
}
