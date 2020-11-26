import React from 'react';

function App() {
  return (
    <React.Fragment>
    <label htmlFor="bar">bar</label>
    <input type="text" onClick={ () => {console.log('click')} }/>
    <Cat />
    <Cat />
    <Cat />
    <Cat />
    </React.Fragment>
    
  );
}

function Cat() {
  return <div>cat</div>;
}

export default App;
