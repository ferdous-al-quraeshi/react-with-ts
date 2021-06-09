import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import GuestList from './components/GuestList';
import AddToList from './components/AddToList';

export interface IState {
  guests: {
    name: string,
    proPic: string,
    age: number,
    note?: string
  }[]
}

function App() {

  const [guests, setGuests] = useState<IState["guests"]>([
    {
      name: "Muhammad",
      proPic: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU1MDcyMjQ1MjYz/mohammed-or-mahomet-9411003-1-402.jpg",
      age: 63,
      note: "Chief Guest"
    },
    {
      name: "'Isaa",
      proPic: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/8761b210929985.560edf671f173.jpg",
      age: 33,
      note: "Special Guest"
    },
  ]);

  // Added "localStorage" for caching data with "useEffect"

  React.useEffect(() => {
    const data = localStorage.getItem("guests");
    if(data) {
      setGuests(JSON.parse(data));
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem("guests", JSON.stringify(guests))
  })

  

  return (
    <div className="App">
      <h1>Guests Invited to my Party</h1>
      <GuestList guests={guests}/>
      <AddToList guests={guests} setGuests={setGuests} />
    </div>
  );
}

export default App;
