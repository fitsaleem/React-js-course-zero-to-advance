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

***Answer:***

just remove these tags from the app.js file

``` 
<React.StrictMode>
   </React.StrictMode> 
```
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

```import React from "react";
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
```

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

```import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>Hello, World!</h1>;
}

ReactDOM.render(<App />, document.getElementById('root'));
```

***Create a new vite.config.js file in the root directory and add the following code:***

```module.exports = {
  build: {
    outDir: 'dist'
  }
}
```

Start the development server by running npm run dev or yarn dev.

Build the app for production by running npm run build or yarn build.

Once you have completed these steps, you should have a working React app built using Vite. You can customize the app further by adding additional components, styles, and functionality as needed.

- **Assignment 5** :  Run multiple react app in one project at same time on same machine:

**Answer:**

you can run multipe react app in your same machine by changing of your app port number :
so by defult the react app run on port 3000 so you can only run one app at a time. if you try to run the second app so it will through out that 
**already runing app in 3000 port**
so you need to edit port number for runing other react app . so go to **package.json** file and replace this code on **scripts tag**

```
"scripts":{
     "start": "set PORT=3001 && react-scripts-start",
    
}
```

