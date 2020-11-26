import React from 'react';
import propTypes from 'prop-types';

function App() {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {name: "Daijiro", age: 0}
  ]
  return (
    <div>
      {
         profiles.map( (profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  );
}

function User(props) {
return <div>I am {props.name} and {props.age}</div>;
}

User.propTypes = {
  name: propTypes.string,
  age: propTypes.number.isRequired
}

export default App;
