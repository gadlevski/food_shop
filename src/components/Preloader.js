import React from "react";
import { Spinner } from "react-bootstrap";

function Preloader() {
  return (
    <>
      <Spinner variant='danger' animation='border' />
    </>
  );
}

export default Preloader;
