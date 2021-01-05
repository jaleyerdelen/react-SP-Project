import React from "react";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Features(props) {
  const aboutTransition = {
    duration: 2
  };

  const pageTransition = {
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: "-100vw"
    }
  };

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={aboutTransition}
      className="container"
    >
      <div className="card fragman container" styleName="width: 18rem">
        <img src={props.imgURL} className="img" />
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <h3 className="card-text">{props.header}</h3>
          <h4>{props.topic}</h4>
          <a href="#" className="btn btn-danger">
            <span />
            Watch
          </a>
        </div>
      </div>
    </motion.div>
  );
}
