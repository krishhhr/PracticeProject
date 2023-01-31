import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CenterBanner from './components/CenterBanner';
import Card from './components/Card';
import Tasks from './components/Tasks';
import React, { useState } from 'react';

function App() {

  let name1 = "Krish"
  let name2 = "Ram"
  let name3 = "Sham"
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  // const [counter, setCounter] = useState(0);
  const data = [
    {
      name: "a",
      id: 1
    },
    {
      name: "b",
      id: 2
    },
    {
      name: "c",
      id: 3
    },
    {
      name: "d",
      id: 4
    },
    {
      name: "e",
      id: 5
    },
    {
      name: "f",
      id: 6
    }
  ]
  const handleShow = () => {
    setShow(!show);
  }
  const submitHandler = (e) => {
    e.preventDefault()
    alert(name)
  }
  // const addComponent = () => {
  //   setCounter(counter + 1)
  // }

  return (
    <div>
      <Navbar />
      <CenterBanner />
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {/* <button>Click</button> */}
            {
              data
              // .filter((obj)=>obj.id==data[counter].id)
                .map((obj, key) => {
                  return (
                    <div key={obj.id}>
                      <Card name={obj.name} id={obj.id} />
                    </div>)
                })
            }
          </div>
        </div>
      </div>
      <div>
        <button onClick={handleShow}>Show/Hide</button>
        {show ? <Tasks /> : ""}
      </div>
      {/* {
        data
        .filter((obj)=>obj.id>2)
        .map((obj,key)=>{
          return(
            <div key={obj.id}>
            <h1>{obj.name}</h1>
            <h3>{obj.id}</h3>
          </div>)
        })
      } */}
      <form onSubmit={submitHandler}>
        <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
        <button type='submit'>Submit</button>
      </form>
      <Footer />
    </div>

  );
}

export default App;
