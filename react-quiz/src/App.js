import React from 'react';
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';


function App() {
  return (
    <Layout>
      <Quiz />
      {/* <div>
        <h1>Hello</h1>
      </div> */}
    </Layout>
  );
}

export default App;
