import style from './style.module.css'

import { Letter } from '../Letter'

export type LetterUsedProps = {
    value: string,
    correct: boolean
}

type Props ={
    data: LetterUsedProps[];
}

export function LettersUsed(){
    return(
        <div className={style.lettersUsed}>
            <h5>Letras Utilizadas</h5>

            <div>
                <Letter value='X' size='small' color='correct'/>
                <Letter value='A' size='small' color='wrong'/>
                <Letter value='Q' size='small' color='wrong'/>
                <Letter value='C' size='small' color='wrong'/>
            </div>
        </div>
    )
}