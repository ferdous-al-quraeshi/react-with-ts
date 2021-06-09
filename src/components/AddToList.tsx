import React, {useState} from 'react';
import {IState as Props} from '../App';

interface IProps {
  guests: Props["guests"]
  setGuests: React.Dispatch<React.SetStateAction<Props["guests"]>>
}

const AddToList: React.FC<IProps> = ({guests, setGuests}) => {

  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    proPic: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (): void => {
    if(
      !input.name ||
      !input.age ||
      !input.proPic
    ) {
      return
    }

    setGuests([
      ...guests,
      {
        name: input.name,
        age: parseInt(input.age),
        proPic: input.proPic,
        note: input.note
      }
    ]);

    setInput({
      name: "",
      age: "",
      note: "",
      proPic: ""
    })
  }

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={(handleChange)}
        name="name"
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.proPic}
        onChange={handleChange}
        name="proPic"
      />
      <textarea
        placeholder="Notes"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
        name="note"
      />
      <button 
        className="AddToList-btn"
        onClick={handleClick}
      >
        Add to List
      </button>
    </div>
  )
}

export default AddToList;