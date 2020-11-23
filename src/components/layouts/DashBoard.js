import React from 'react';
import Nav from './Nav';

export default function DashBoard(props) {
  return (
    <div>
      dashboard
      <Nav />
      {props.children}
    </div>
  );
}
