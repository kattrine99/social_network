import { ClassAttributes, InputHTMLAttributes } from 'react'
import { JSX } from 'react/jsx-runtime'
import styles from './Input.module.scss'

export const Input = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>) => {

    return(
        <input
        className={styles.input} {...props}
    />
    )    
}
