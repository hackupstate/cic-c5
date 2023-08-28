import { useState, useEffect } from 'react';
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn, SignIn, SignUp, UserButton, useUser, useAuth } from "@clerk/clerk-react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // import Home from "./Home";
import Home from "./Home";
import Page2 from "./Page2";
import ProjectDetails from "./ProjectDetails";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key!')
}
const clerkPublishableKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function ProtectedSignedIn() {
  const { user } = useUser();
  const { getToken } = useAuth();

  const [word, setWord] = useState('');

  useEffect(() => {
    getToken().then(token => {                            // 1) Ask clerk to generate a token
      console.log(token)
      return fetch('http://localhost:8000/secret-word', { // 2) Make a request...
        headers: { 'Authorization': `Bearer ${token}` },  // ... including the token that was just generated!
      }).then(response => {
        if (!response.ok) {                               // 3) Make sure the request was successful, log if not
          console.log(`Error making request to get data: received ${response.statusCode}`);
          return;
        }
        return response.json().then(json => {             // 4) Extract the json data out of the response...
          setWord(json.data);                             // ... and store the string found at key “data” in the response into state 
        });
      });
    });
  }, [getToken]);

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const run = async () => {
      const token = await getToken();
      const response = await fetch('http://localhost:8000/todos', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        console.log(`Error making request to get data: received ${response.statusCode}`);
        return;
      }

      const json = await response.json();
      setTodos(json.results);
    };
    run();
  }, []);

  const [newTodoTextValue, setNewTodoTextValue] = useState('');

  return (
    <div style={{ backgroundColor: 'white' }}>
      <h1 style={{color: 'red'}}>This page is protected!</h1>
      <p>Welcome, {user.firstName}</p>
      <p>Secret word: {word}</p>                         {/* 5) Display the word into the user */}
      <UserButton />

      <ul className="todos">
        {todos.map(todo => (
          <li className="todo" key={todo.id}>
            {todo.id} - {todo.text}
          </li>
        ))}
      </ul>
      <input
        type="text" 
        value={newTodoTextValue}
        onChange={e => setNewTodoTextValue(e.currentTarget.value)}
        placeholder="eg: Clean the kitchen"
      />
      <button onClick={async () => {
        const token = await getToken();
        const response = await fetch('http://localhost:8000/todos', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({ text: newTodoTextValue }),
        });

        if (!response.ok) {
          console.log(`Error making request to create new item: received ${response.statusCode}`);
          return;
        }

        // Refetch the whole list, because the response of the POST is garbage right now :(
        let getresponse = await fetch('http://localhost:8000/todos', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!getresponse.ok) {
          console.log(`Error making request to get data: received ${response.statusCode}`);
          return;
        }

        const json = await getresponse.json();
        setTodos(json.results);
      }}>Create new item</button>
    </div>
  );
}

function Protected() {
  return (
    <div>
      <SignedIn>
        <ProtectedSignedIn />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/projectDetails/:id",
			element: <ProjectDetails />,
		},
		{
			path: "/page2",
			element: <Page2 />,
		},

    // Clerk specific routes
    { path: "/sign-in/*", element: <SignIn routing="path" path="/sign-in" /> },
    { path: "/sign-up/*", element: <SignUp routing="path" path="/sign-up" /> },

    // Protected page - a user must be logged in to view this page
    {
      path: "/protected",
      element: <Protected />,
    },
	]);

	return (
		<ClerkProvider publishableKey={clerkPublishableKey} navigate={(to) => router.navigate(to)}>
		  <div
			  className="App container"
			  // style={{
			  // 	minHeight: "100vh",
			  // 	backgroundImage:
			  // 		'url("https://static.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png")',
			  // }}
		  >
			  <RouterProvider router={router} />
		  </div>
		</ClerkProvider>
	);
}

export default App;
