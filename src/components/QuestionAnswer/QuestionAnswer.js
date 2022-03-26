import React from 'react';
import './QuestionAnswer.css'

const QuestionAnswer = () => {
  return (
    <div className='container'>
      <h2>How react works?</h2>
      <p>
        React implements a virtual DOM that is basically a DOM tree
        representation in JavaScript. So when it needs to read or write to the
        DOM, it will use the virtual representation of it. Then the virtual DOM
        will try to find the most efficient way to update the browser’s DOM.
        Unlike browser DOM elements, React elements are plain objects and are
        cheap to create. React DOM takes care of updating the DOM to match the
        React elements. The reason for this is that JavaScript is very fast and
        it’s worth keeping a DOM tree in it to speed up its manipulation.
        Although React was conceived to be used in the browser, because of its
        design it can also be used in the server with Node.js
      </p>

      <h2>Props vs State</h2>
      <p>
        For parent-child communication, simply pass props. Use state to store
        the data your current page needs in your controller-view. Use props to
        pass data and event handlers down to your child components.These lists
        should help guide you when working with data in your components. <br />
        <strong>Props</strong>
        <ul>
          <li>are immutable</li>
          <li>which lets React do fast reference checks</li>
          <li>are used to pass data down from your view-controller</li>
          <li>your top level component</li>
          <li>have better performance</li>
          <li>use this to pass data to child components</li>
        </ul>
        <strong>State</strong>
        <ul>
          <li>should be managed in your view-controller </li>
          <li> your top level component</li>
          <li> is mutable has worse performance</li>
          <li> should not be accessed from child components</li>
          <li> pass it down with props instead</li>
        </ul>
      </p>
    </div>
  );
};

export default QuestionAnswer;
