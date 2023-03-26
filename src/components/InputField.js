import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';


function InputFields(props) {
    const [isExpand,setExpand]=useState(false)
    const [note, setNote] = useState({
        title: '',
        content: ''
    })

    function handleChange(e) {
        const { name, value } = e.target
        setNote(preValue => {
            return { ...preValue, [name]: value }
        })
    }

    function handlerClick(e)
    {
        e.preventDefault()
        props.addToDo(note)
        setNote({
            title: '',
            content: ''
        })
    }

    function handlerExpand(e){
        setExpand(true)
    }
    return (
        <div className='create-note'>
            <form>
                <input
                    name='title'
                    placeholder='Title'
                    value={note.title}
                    onChange={handleChange}
                    onClick={handlerExpand}
                />
               {isExpand && <textarea
                    name='content'
                    placeholder='Take a note...'
                    rows={isExpand ? 3:1}
                    value={note.content}
                    onChange={handleChange}
                />}
                <button 
                    onClick={handlerClick}
                ><AddIcon /></button>
            </form>
        </div>
    )

}
export default InputFields;