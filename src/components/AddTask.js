import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text,setText] = useState('')
    const [date,setDate] = useState('')
    const [important,setimportant] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Primeiro adiciona uma tarefa!')
            return
        }

        onAdd({ text, date, important})
        setText('')
        setDate('')
        setimportant(false)
    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Tarefa</label>  
            <input type="text" placeholder="tarefa aqui!" value={text} onChange={(e) => setText(e.target.value)}/> 
        </div>
        <div className="form-control">
            <label>Data</label>  
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
        </div>

        <input type="hidden" value={important} onChange={(e) => setimportant(e.target.value)}/>
        <input type="submit" value="Guardar Tarefa" className="btn btn-block"/>
    </form>
  )
}

export default AddTask