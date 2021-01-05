import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { shopdata } from "../data/shopdata";
import Shopdetail from "./Shopdetail";
import { motion } from "framer-motion";
export default function Shop(props) {
  const pageVariants = {
    in: {
      opacity: 1,
      x: 0
    },
    out: {
      opacity: 0,
      x: "-100vw"
    }
  };
  const pageTransition = {
    duration: 2
  };

  const shopMap = shopdata.map(item => (
    <li>
      <Link to={`/shop/${item._id}`}>{item.name}</Link>
    </li>
  ));

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="container"
    >
      <div class="card">
        <img
          src={
            "https://orig08.deviantart.net/891b/f/2015/185/f/b/south_park_animated_gif_3___july_4th_by_flip_reaper_z-d8zx0j8.gif"
          }
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Characters</h5>
          <hr />
          {shopMap}
          <Switch>
            <Route path="/shop/:shopID/">
              <Shopdetail />
            </Route>
          </Switch>
        </div>
      </div>
    </motion.div>
  );
}
