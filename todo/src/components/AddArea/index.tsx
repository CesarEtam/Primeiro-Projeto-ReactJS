import { useState, KeyboardEvent } from 'react'
import { toast } from 'react-toastify'
import * as C from './styles'

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState('')

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
            if (inputText !== '') {
                onEnter(inputText)
                setInputText('')
            } else {
                toast("Digite uma tarefa!")
            }
        }
    }

    return (
        <C.Container>
            <div className='image'>➕</div>
            <input
                type="text"
                placeholder='Adicione uma tarefa'
                value={inputText}
                onChange={e =>setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    )
}