## Chapter 1 - Introduction to React & Setup

  
- **Assignment 1** : If we delete `node_modules`. How to run our app again successfully ?

***Answer:***

If you delete the node_modules folder in your React project, you will need to recreate it by running the npm install command again in your project directory. Here are the steps you can follow to run your React app successfully after deleting node_modules:

Open a terminal and navigate to the root directory of your React project.

Run the command ***npm install**. This will read the dependencies listed in your package.json file and download and install the necessary packages into the node_modules folder.

Once the installation is complete, you can start your React app by running the command ***npm start**.

This will start the development server and launch your app in the browser. If everything was installed correctly, your app should run as expected.

It's worth noting that deleting the node_modules folder is generally not recommended, as it can result in the loss of important dependencies and configurations. In general, it's best to avoid deleting this folder and instead try to troubleshoot any issues that you may be experiencing.






- **Assignment 2** : How to remove double `console.logs` from React ? [ it is not needed in real life to remove them, its just an assignment problem ].  [ *Hint: Some special Component at top level is of App is causing it* ]. We explore more about  - why this is needed in later videos.

### Special Assignments ==============

- **Assignment 3** : Create a Page with multiple React Apps. Both React Apps should be independent of each other.

***Answer:***

To create a page with multiple independent React apps, you can follow these steps:

Create a new React project using create-react-app or a similar tool.

Set up the directory structure for your multiple apps. You can create a new subdirectory for each app, or use a different directory structure that makes sense for your specific use case.

Create a new React app in each subdirectory using create-react-app or a similar tool.

Write the code for each app as you would normally, making sure to keep them completely independent of each other. Each app should have its own set of components, state, and logic.

Once you have finished writing the code for each app, you can use a tool like Webpack or Parcel to bundle each app into a separate JavaScript file.

In your main app, create a page or component where you want to render the two apps.

Use react-dom to render each app in its own div element within your main page or component. You can use the ReactDOM.render() function to do this.

Here's an example of how to render two independent React apps on the same page:

{import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <div id="app1"></div>
      <div id="app2"></div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(<App1 />, document.getElementById("app1"));

ReactDOM.render(<App2 />, document.getElementById("app2"));
}

In this example, we have a main app that renders two sub-apps, App1 and App2, in their own div elements. The App1 and App2 components are completely independent of each other and can be written and updated separately. By using ReactDOM.render() to render each app in its own element, we ensure that they are completely independent of each other and can be updated and changed separately.

- **Assignment 4** : Try to build a react app using other toolchains like `Vite`

*** Answer:**

To build a React app using a toolchain other than create-react-app, such as Vite, you can follow these general steps:

Set up a new project using the tool of your choice. For example, you can use the Vite command line interface to create a new project.

Add React as a dependency to your project using npm or yarn.

Set up the necessary configuration files for your toolchain. For Vite, this would typically include a vite.config.js file where you can configure the build settings for your project.

Create a new index.js file to serve as the entry point for your React app. This file should import the necessary React components and render them to the DOM using the ReactDOM.render() function.

Write the code for your React app as you would normally, making sure to use the appropriate syntax and conventions for your chosen toolchain.

Use your toolchain's build command to create a production-ready build of your app. For Vite, this would typically involve running the vite build command.

Here's an example of how to build a basic React app using Vite:

Install Vite by running npm install -g vite or yarn global add vite.

Create a new project by running vite create my-react-app.

Change into the new project directory by running cd my-react-app.

Install the React dependencies by running npm install react react-dom or yarn add react react-dom.

Create a new index.js file in the src directory and add the following code:

{import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>Hello, World!</h1>;
}

ReactDOM.render(<App />, document.getElementById('root'));
}

***Create a new vite.config.js file in the root directory and add the following code:***

module.exports = {
  build: {
    outDir: 'dist'
  }
}


Start the development server by running npm run dev or yarn dev.

Build the app for production by running npm run build or yarn build.

Once you have completed these steps, you should have a working React app built using Vite. You can customize the app further by adding additional components, styles, and functionality as needed.

## Chapter 2 -   Components - JSX and Props

 
- **Assignment 1** :  Create a simple React app for **RESUME Builder**. It will be static website. You have to make components like **Resume** as top level and under it - **Skills**, **Education**, **Experience** etc as components.  All resume data will be under 1 big JavaScript object like which you can us in components via props. You can fix the number of items in **Skills**, **Education**, **Experience** or any section. Example you can say that only 3 experience items is allowed.

  ``` 
   resume = {
      experience : [ { year:2012, company:'xyz', role:'something' }],
      education:[ ],
      skills : [ 'react js', 'node js']
      .....
      ...
      }
  ```

   > You can choose any simple HTML layout and convert it to React Components 
 
   Example Link : [ Resume HTML ](https://codepen.io/emzarts/pen/OXzmym)

  ### Special Assignments ==============

- **Assignment 2** : Create a Parent Component called **Border** which can provide some CSS border to any component nested into it. [Hint : You will need to use `children` props here
   < Border> 
         < Component > 
   < Border />


- **Assignment 3** :

 This is continuation of previous assignment **RESUME Builder**. Now you have to make a separate component  **ResumeEditor** which has a **FORM**. This form will have many **input boxes**. Each one related to one section. For example you can have one input box or **experience** section. Another input box for **skill** section and like this. Every input box should have an **Add** button in front of it. Once you press this add button that information is stored in the state , which you can update  at top of the App level. Now this state should update the **Resume**  Component and its child you have built. 
 -  first component will be your **RESUME**  document which is only for reading purpose.
- second component will be this **FORM** 
- you have to manage the state in between 
- only Add functionality is required in this assignment
- you can change input boxes according to your need depending on your format of Resume. You can have multiple textboxes also for same section. Like for date + experience item etc.

- **Assignment 4** : Try this challenge : https://beta.reactjs.org/learn/state-a-components-memory#challenges

### Related Videos : 

1. HTML Forms-1 [Video](https://youtu.be/DUJEpSkzrVA)
2. HTML Forms-2 : [Video](https://youtu.be/Nj6Omw6zOok)



## MINI PROJECT


# Project 1 - TODO App

Todo app can be used to maintain a list of your pending daily items. A Simple todo list must have these features


* You can add any new item to TODO list
* You can click on any item to mark it as done, if you have done that by mistake - you can click again to undo.
* You can delete any item (completed or pending)
* You get a total of completed items and overall items on the list.
* You can move list items "Up" or "Down" using buttons.


![Output](https://raw.githubusercontent.com/abhishekrathore/fullstackbootcamp2019/master/01_REACT/2_PROJECT_1/images/todo-project.gif)


## Additional Features

 **KEYBOARD BASED Features** :

-	use **ENTER** key on keyboard to add a new item.
-	when you click on an item, it should be selected (you can change style to show it is selected)
- If you press the **DELETE** key on the keyboard after selecting the list item it should delete that list item. If you have not selected any item the last item should be deleted.
- You can select list item and press **UP** arrow key to Move It Up. And you can press the **DOWN** key to move it down.

	
**Other Features** :

* **Pin element to Top of List** : On double click make element reach top of list. You can show a different color also to show that element is pinned.
* **Show the date & time** at which list item was added.
* **Order** by : Todo Item names, Date added, Completed.
* **Due date feature** : Add a due date of task of any todo item. You will need to add another input box for this at top. Whenever you are in 24 hour limit of due date - Task outline will be shown in ORANGE color. e.g if a task is due on 23 May - from 22nd May it should show in ORANGE outline color. If a due date is passed task should show RED Outline.
* Use some component like `https://github.com/react-component/progress` to show a **progress bar** at top of list. This progress bar will show how much of total percent of tasks are completed.
* **Delete item via swipe gesture** - like swipe to right on mobile phone. [*Hint: You have to find an event type for this* ]

**Advanced Features** :

* **Use localStorage** in browser using libraries like  `https://github.com/localForage/localForage` to make your todo list permanent in browser. This will have your list stored in browser database and will not delete it on refresh or closing of browser.
[LocalStorage Video](https://youtu.be/OTkQVPVYW7w)
[LocalForage Video](https://youtu.be/Rqyu9qzydoc)

 **ANIMATION BASED Features [optional]** :
 
* Enter Animation : Animate list item on adding.
* Exit Animation : Animate list item at removal.







## Chapter 7 -   More State & useEffect hooks

- **Assignment 1** : The method shown in this video was just to introduce **useEffect** hook. However that was not the correct use of useEffect hook. Can you change the code to remove useEffect and still have the editVideo functionality.  [ *Hint : use the concept that Component is rendered every time prop changes* ]

- **Assignment 2** : This is continuation of previous assignment **RESUME Builder**. 
  -  Add functionality to **delete** the items from resume.
  - Add functionality to **update** the items from resume.
  - you have to manage the state in between 
  - you can change input boxes according to your need depending on your format of Resume. You can have multiple textboxes also for same section. Like for date + experience item etc.
  - Check the output can be printed perfectly in PDF.


## Chapter 8 -  useReducer

- **Assignment 1** : Try this challenge : https://beta.reactjs.org/learn/extracting-state-logic-into-a-reducer#challenges

- **Assignment 2** : Convert your **RESUME BUILDER** Application from `useState` to `useReducer` by converting states logic to a common reducer. Your reducer can have as many switch cases as you want. You can also divide them based on sections. `ADD_SKILL`, `ADD_EXPERIENCE` etc. to make logic even simpler for developer.

### Related Videos : 

1. REDUX - Understand it in Simple way [Video](https://youtu.be/WdEQNzUMP_M)



## Chapter 9 -   Context API & useContext

- **Assignment 1** : Try this challenge : 
https://beta.reactjs.org/learn/passing-data-deeply-with-context#challenges

- **Assignment 2** : Add a Context to your **RESUME BUILDER** to change font-size, font-color and some other font-properties. Also add a form to changed these property at top of App. 

- **Assignment 3** : Add a Context to your **RESUME BUILDER** to change Dark Mode and Light Mode. You can also use a `React Switch` kind of library to make it more user friendly to switch.


## Chapter 10 -   Context API with useReducer [Redux architecture]

### Special Assignments

- **Assignment 1**  : Make a  **useCounter** Hook: To keep track of a number that can be incremented or decremented. 
``` const [count, increment, decrement] = useCounter(0);```


## Chapter 11 -   useRef

- **Assignment 1** : Try this challenge: 

https://beta.reactjs.org/learn/referencing-values-with-refs#challenges

- **Assignment 2** : Try this challenge:  
https://beta.reactjs.org/learn/manipulating-the-dom-with-refs#challenges

- **Assignment 3**  : Make a  **useWindowSize** Hook: which returns size of current browser window. 
``` const [width, height] = useWindowSize();```



### Related Videos : 

1. Complete DOM Course playlist [Video](https://bit.ly/35nMKB7)



## Chapter 12 -   useEffect and API calling

- **Assignment 1** : Try this challenge : 

https://beta.reactjs.org/learn/synchronizing-with-effects#challenges

- **Assignment 2** : Try this challenge : 

https://beta.reactjs.org/learn/removing-effect-dependencies#challenges

- **Assignment 3** : Try this challenge : 

https://beta.reactjs.org/learn/reusing-logic-with-custom-hooks#challenges

- **Assignment 4** Use **JSON Placeholder API** (link given below). 
  -	You have to create a button  which can get some posts and show them in a List.
  -	You have to a **show comments** button on each list item. On click of show comments, Post's comments should be fetched below that list item. [ Comments are available for each post in API]
  -	When you click on a particular list item's show comments, it should expand and **show** comments, otherwise it should collapse and **hide** the comments.
  -	Try to optimize by :
	
	-	Only getting comments of required Post items (not all at a time)
	-	Storing somehow the old comments of closed list items. So you will not fetch them again, when your show comments again.

![enter image description here](https://raw.githubusercontent.com/coderdost/full-stack-dev-2023/main/json-placeholder.png)

### Related Links : 

1. Mockaroo fake data APIs [Link](https://www.mockaroo.com/)
2. JSON placeholder API [Link](https://jsonplaceholder.typicode.com/)



## Chapter 13 -   Memoization - useMemo, useCallback, memo

- **Assignment 1** : Implement a component that displays a list of items. The component should memoize the list of items to prevent unnecessary re-rendering.

- **Assignment 2**:  How to use memoization in the  **JSON Placeholder API** assignment in previous problem. Can you try to **optimize** it using **useMemo/useCallback** ?

- **Assignment 3**:  **useMemo** and **useCallback** are same hook. useCallback is just a convenient hook way to write **useMemo** for functions. Prove this using **useMemo** in place of **useCallback** in any previous problem. *[ Hint : you will have to change the useMemo callback and return the function definition ]*



## Chapter 14 - Advanced React - Part 1


- **Assignment 1** : 
Try to apply `useDeferredValue` and `useTransistion` hooks on API based components. Either make a new one or use any existing code you have from other assignments. You can use `Chrome Network throttling` from **Devtools** > **Performance** Tabs  and use **Slow 3G** option to see the effects



## Chapter 15 - Advanced React - Part 2

- **Assignment 1** : 
Try to use `window.print` functionality as show in code without flushSync and see if really make a difference. Also, try the same on `alert` functionality, can it also work  ?

