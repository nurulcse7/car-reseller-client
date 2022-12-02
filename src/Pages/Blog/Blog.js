import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
  useTitle('Blog');

  return (
    <div className='m-12 p-12'>
      <div className='collapse '>
        <input type='checkbox' />
        <div className='collapse-title text-xl font-bold'>
          Ques. 01: What are the different ways to manage a state in a React
          application?
        </div>
        <div className='collapse-content text-lg'>
          <span className='text-xl font-bold text-secondary'>Answer:</span>{' '}
          <br />
          <span>
            There are some types of state manage in a React apps <br />
            <br />✔ Firstly, URL state is quite easy to manage, usually through
            custom hooks that give us all the information we need about our
            location, history, and pathname. If we are using React Router, we
            can get all the information also we need using useHistory or
            useLocation. URL state is largely already managed if we are using a
            framework like Next.js or the current version of React Router.{' '}
            <br />
            <br />
            ✔ Secondly, Local state is useState that's first tool to manage
            state in our components. It can take accept any valid data value,
            including primitive and object values. Additionally, its setter
            function can be passed down to other components as a callback
            function <br />
            <br />
            ✔ Thirdly, Global State is using useReducer and useContext. But the
            Context API is not a state management solution. It is a way to avoid
            problems like props drilling (creating a bunch of props in
            components that don’t need it), but it is only helpful for reading
            state, not updating it. <br />
            To manage your global state, reach for tried and tested third-party
            libraries like Redux, Zustand, Jotai, and Recoil etc. Redux is also
            great, but make sure that you get started using Redux Toolkit.{' '}
            <br />
            <br />
            ✔ Fourthly, Server State in React, can be deceptively challenging to
            manage. At first, it seems we just need to fetch data and display it
            in the page using useEffect. But then we need to display a loading
            spinner while you are waiting for the data. Then you need to handle
            errors and display them to the user as they arise. To fix this,
            there are a couple of great libraries that make data fetching in
            React a breeze: SWR and React Query. <br />
          </span>
        </div>
      </div>

      <div className='collapse '>
        <input type='checkbox' />
        <div className='collapse-title text-xl font-bold'>
          Ques. 02: How does prototypical inheritance work?
        </div>
        <div className='collapse-content text-lg'>
          <span className='text-xl font-bold text-secondary'>Answer:</span>{' '}
          <br />
          <span>
            JavaScript is the most common of the prototype-capable languages.
            When used appropriately, prototypical inheritance in JavaScript is a
            powerful tool that can save hours of coding. After the ES6 updates,
            JavaScript allowed for “prototypal inheritance”, meaning that
            objects and methods can be shared, extended, and copied. Because
            JavaScript is a prototype-based, Object-Oriented programming
            language and its syntactical sugar. When it comes to inheritance,
            JavaScript only has one construct: objects. Each object has a
            private property that holds a link to another object called its
            prototype. <br />
            <br />
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. Every object with its methods and
            properties contains an internal and hidden property known as
            [[Prototype]]. It is a method by which an object can inherit the
            properties and methods of another object. Traditionally, in order to
            get and set the [[Prototype]] of an object, we use
            Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern
            language, it is being set using __proto__.
          </span>
        </div>
      </div>

      <div className='collapse '>
        <input type='checkbox' />
        <div className='collapse-title text-xl font-bold'>
          Ques. 03: What is a unit test? Why should we write unit tests?
        </div>
        <div className='collapse-content text-lg'>
          <span className='text-xl font-bold text-secondary'>Answer:</span>{' '}
          <br />
          <span>
            Unit testing is an important step in the development process because
            if done correctly, it can help identify initial code errors that may
            be more difficult to find at a later testing stage. Unit testing is
            a software development process where the smallest testable part of
            an application, called a unit, is verified individually and
            independently for proper operation. This testing method is used by
            software developers and sometimes QA staff during the development
            process. The main purpose of the unit test is to test the written
            code separately and determine if it works as intended. Unit testing
            that meets and confirms quality standards before placing all codes.
            This ensures a reliable engineering environment where quality is
            paramount. Helps developers write better code more efficiently. And
            during the product development life cycle, unit testing saves time
            and money.
          </span>
        </div>
      </div>

      <div className='collapse '>
        <input type='checkbox' />
        <div className='collapse-title text-xl font-bold'>
          Ques. 04: React vs. Angular vs. Vue?
        </div>
        <div className='collapse-content text-lg'>
          <span className='text-xl font-bold text-secondary'>Answer:</span>{' '}
          <br />
          <span>
            JavaScript is a multi-paradigm language that supports event-driven,
            functional, object-oriented, and prototype-based programming styles.
            JavaScript was initially used only for the client-side but, in more
            recent times, it has also been used as a server-side programming
            language. <br />
            There are many javascript framework but most of used React, Angular
            and Vue. Each framework is component-based and allows the rapid
            creation of UI features. However, they all have a different
            structure and architecture. Below I tried to give some differences.{' '}
            <br />
            <h1 className='text-xl font-bold underline'>Features:</h1>
            <p>
              ✔ React: Declarative, Virtual DOM, Event handling, JSX,
              Performance good, React Native, Component-Based
            </p>
            <p>
              ✔ Angular: Progressive Web Apps, Desktop, Code Generation, Code
              Splitting, Templates, Angular CLI
            </p>
            <p>
              ✔ Veu: Virtual DOM, Data Binding, CSS Transitions and Animations,
              Template, Complexity{' '}
            </p>
            <br />
            <h1 className='text-xl font-bold underline'>Pros:</h1>
            <p>
              ✔ React: Easy to learn, Open Source, Single page applications,
              Reusable components, Virtual DOM, SEO friendly
            </p>
            <p>
              ✔ Angular: Open Source, Single page applications, Easier DOM
              manipulation, Two-way binding, Very testable
            </p>
            <p>
              ✔ Veu: Lightweight, Fast, Extensive documentation, Reactive
              two-way binding
            </p>
            <br />
            <h1 className='text-xl font-bold underline'>Cons:</h1>
            <p>
              ✔ React: Documentation may be an issue, JSX is a double-edged
              sword
            </p>
            <p>
              ✔ Angular: Possible performance issues, Can get complex for larger
              scenarios, Some features may be difficult to understand for
              newcomers
            </p>
            <p>
              ✔ Veu: Comparatively fewer components, Lack of support for
              large-scale projects, Over Flexibility
            </p>
            <br />
          </span>
        </div>
      </div>
      <h3 className='text-secondary text-lg my-5 ml-4'>
        N.B: Click on the question for expand and collapse.
      </h3>
    </div>
  );
};

export default Blog;
