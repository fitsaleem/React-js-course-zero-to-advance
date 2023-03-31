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



