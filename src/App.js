import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';



const people=[
  {
      firstName :"Jane",
      lastName: "Doe",
      age: "45",
      hairColor: 'Black'
  },
  {
      firstName :"John",
      lastName: "Smith",
      age: "88",
      hairColor: 'Brown'
  },
  {
      firstName :"Millard",
      lastName: "Fillmore",
      age: "50",
      hairColor: 'Brown'
  },
  {
      firstName :"Maria",
      lastName: "Smith",
      age: "62",
      hairColor: 'Brown'
  },
]

function App() {
  return (
    <div className="App">
     {
       people.map((p,idx) =>{

        return (
          <PersonCard person={p} key={idx} />
        )



       })
     }


    </div>
  );
}

export default App;
