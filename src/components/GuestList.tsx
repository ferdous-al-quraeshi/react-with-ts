import React from 'react';
import {IState as IProps} from '../App';

const GuestList: React.FC<IProps> = ({guests}) => {
  const renderList = (): JSX.Element[] => {
      return guests.map(guest => {
        return(
          <li className="List">
            <div className="List-header">
              <img src={guest.proPic} alt="" className="List-img"/>
              <h2>{guest.name}</h2>
            </div>
            <p>{guest.age} years old.</p>
            <p className="List-note">{guest.note}</p>
          </li>
        )
      })

  }

  return(
    <ul>
      {renderList()}
    </ul>
  )
}

export default GuestList;