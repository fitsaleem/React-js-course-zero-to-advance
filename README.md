# useReducer hook 
***the useReducer hook is similar to the  useState hook***

***it is use when you find yourself keeping track of multiple pirces of state that rely on complex logic so at that time you use useReducer hook it will reduce you complex and also code.***

# syntax:

***the useReduce hook accept two arguments***

```const [state,dispatch]=useReducer(reducer,initialState)```

***the "reducer" is function which contain your custome logic generally will contain object***

***the "reducer" is function contain two arguments (state,action)***

***and in dispatch we call "action" and the action contain =(type,payload)***

