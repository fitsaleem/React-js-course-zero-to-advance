# useReducer hook 
***the useReducer hook is similar to the  useState hook***

***it is use when you find yourself keeping track of multiple pirces of state that rely on complex logic so at that time you use useReducer hook it will reduce you complex and also code.***

# syntax:

***the useReduce hook accept two arguments***

```const [state,dispatch]=useReducer(reducer,initialState)```

***the "reducer" is function which contain your custome logic generally will contain object***

***the "reducer" is function contain two arguments (state,action)***

***and in dispatch we call "action" and the action contain =(type,payload)***



# Context API AND useContext hook

***What is Context API?***

The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.Context is also touted as an easier, lighter approach to state management using Redux.

Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.

***React context API: How it works?***

React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.

***How to use Context API?***

You might think to yourself: "Well, I'm convinced. How do I implement Context API in my app?" First, make sure you need it. Sometimes people use shared state across nested components instead of just passing it as props. And if you do need it you should follow these very few steps:

1 Create a folder under your app root named contexts (not required. just a convention)

2 Create a file named <your context name>Context.js, e.g. userContext.js

3 import and create a context like so:

```import React, { createContext } from "react";
   const UserContext = createContext();
   ```
   
4 Create a component that will wrap the provider named Provider e.g. UserProvider
Example using React Hooks:

```const UserProvider = ({ children }) => {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(1);
  const happyBirthday = () => setAge(age + 1);
  return (
    <UserContext.Provider value={{ name, age, happyBirthday }}>
      {children}
    </UserContext.Provider>
  );
};
```

5 Create a higher order component to consume the context named: with e.g. withUser
Example using React Hooks:


```const withUser = (Child) => (props) => (
  <UserContext.Consumer>
    {(context) => <Child {...props} {...context} />}
    {/* Another option is:  {context => <Child {...props} context={context}/>}*/}
  </UserContext.Consumer>
);
```

The difference between the two options above is if you want the context to be a single nested property by this name, to explode it to its properties (which in my opinion is more convenient).

6 Finally export them

```export { UserProvider, withUser };```

8 And use them however you like
For example:

```ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById("root")
);
```

```export default withUser(LoginForm);```

You'll also be able to notice I used the new "Hooks" feature that is shipped with React since version 16.8 to make it even neater and easier to create contexts.

***Final piece of advice***

I mentioned how people overuse Redux, and it also applies to Context API. Use it only when you need to share state between lot's of components with a lot of nesting. Most of the time, the data you have in one component will only be relevant to its children, so passing it in props is more indicative and nicer.
