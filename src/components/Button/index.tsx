import style from './style.module.css'

type Props = React.ComponentProps<'button'>


export function Button({title, ...rest}: Props){
    return(
        <button type="button" className={style.button} {...rest}>{title}</button>
    )
}