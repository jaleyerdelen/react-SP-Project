import React from "react";
import { useParams } from "react-router-dom";
import { shopdata } from "../data/shopdata";

function Shopdetail(props) {
  const { shopID } = useParams();

  const shop = shopdata
    .filter(item => item._id === Number(shopID))
    .map(item => (
      <div className="mt-5">
        <div className="card text-white bg-dark mb-3 text-center">
          <img src={item.imgURL} />

          <h1>Characters Detail</h1>
          <hr />
          <h2>{item.name}</h2>
          <div class="body">
            <p class="card-text">
              <p>{item.title}</p>
            </p>

            <p>{item.topic}</p>
          </div>
        </div>
      </div>
    ));

  return <>{shop}</>;
}

export default Shopdetail;
