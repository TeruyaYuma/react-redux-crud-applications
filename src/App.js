import React from 'react';

function App() {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {age: 0}
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

User.defaultProps = {
  name: "unknown"
}

export default App;
