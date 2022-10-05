import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Day-6</h1>
      <h2>1.What is an event in react?</h2>
      <ul>
        <li>An event is an action that could be triggered as a result of the user action or system generated event.</li>
        <li>For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events.</li>
      </ul>
      <h2>2.What is memory leak and how to overcome?</h2>
      <ul>
        <li>Can't perform a React state update on an unmounted component.</li>
        <li> It reduces the performance of the computer by reducing the amount of available memory.</li>
        <li>To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.	</li>
      </ul>
      <h2>3.Do you prefer function-based or class component and why ?</h2>
      <ul>
        <li>Functional Component. A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).</li>
        <li> A class component requires you to extend from React.</li>
        <li>Component and create a render function which returns a React element.</li>
        <li>There is no render method used in functional components.</li>
      </ul>
      <h2>4.Explain reducer as pure function in redux	</h2>
      <ul>
        <li>In Redux, a reducer is a pure function that takes an action and the previous state of the application and returns the new state.</li>
        <li> The action describes what happened and it is the reducer's job to return the new state based on that action.</li>
      </ul>
      <h2>5.Why do we use redux thunk?</h2>
      <ul>
        <li>Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object.</li>
        <li>That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside 
the function's body once the asynchronous operations have been completed.</li>
      </ul>
      <h2>6.What do you know about NPM?</h2>
      <ul>
        <li>NPM stands for 'Node Package Module'</li>
        <li>npm is the world's largest Software Registry.</li>
        <li>Open-source developers use npm to share software</li>
        <li>npm is free to use</li>
        <li>npm includes a CLI (Command Line Client) that can be used to download and install software:</li>
        <li>npm is installed with Node.js.</li>
        <li>npm can manage dependencies.</li>
      </ul>
    </div>
  );
}

export default App;