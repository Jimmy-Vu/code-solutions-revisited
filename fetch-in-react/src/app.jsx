import React, { useEffect, useState } from 'react';
import UserList from './user-list';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [],
//       isLoading: true
//     };
//   }

//   componentDidMount() {
//     /* your code here */
//   }

//   render() {
//     return this.state.isLoading
//       ? <p>Loading...</p>
//       : <UserList users={this.state.users} />;
//   }
// }

function App(props) {
  const [state, setState] = useState({
    users: [],
    isLoading: true
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setState(
        prev => ({ ...prev, users: data, isLoading: false })
      ));
  }, []);


  return (
    state.isLoading
      ? <p>Loading...</p>
      : <UserList users={state.users} />
  );
}

export default App;
