import React from "react";
import Card from "./Card";
import contacts from "../contacts";
/*
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>   //tedious way
      <Card 
      name = {contacts[0].name}
      imgURL = {contacts[0].imgURL}
      phone = {contacts[0].phone}
      email = {contacts[0].email}
      />

    <Card 
    name = {contacts[1].name}
    imgURL = {contacts[1].imgURL} // imgURL turi buti toks pat, kaip ir Card.jsx uzvadinai
    phone = {contacts[1].phone}
    email = {contacts[1].email}
    />

    <Card 
      name = {contacts[2].name}
      imgURL = {contacts[2].imgURL}
      phone = {contacts[2].phone}
      email = {contacts[2].email}  //apacioje yra, jeigu nori naudoti for cikla
      />
  
  </div>
  );
}
*/
function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}

      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;

/*
import React from "react";   // būdas su for ciklu 
import Card from "./Card";
import contacts from "../contacts";

function App() {
  const cardComponents = [];

  for (let i = 0; i < contacts.length; i++) {
    cardComponents.push(
      <Card
        key={i} // Add a unique key prop for each Card component
        name={contacts[i].name}
        imgURL={contacts[i].imgURL}
        phone={contacts[i].phone}
        email={contacts[i].email}
      />
    );
  }

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {cardComponents}
    </div>
  );
}

export default App;
*/
