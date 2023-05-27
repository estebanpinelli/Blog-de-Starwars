import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
	  <div className="container">
		<div className="row">
		  <h2>Listado de personajes</h2>
		  {store.people.map((people, index) => {
			return (
			  <div className="col-12 col-md-4" key={index}>
				<div className="card">
				  <img src={people.image} className="card-img-top" alt="..." />
				  <div className="card-body">
					<h5 className="card-title">{people.name}</h5>
					<Link
					  to={`/character/${people.id}`}
					  className="btn btn-primary"
					>
					  Ver mas...
					</Link>
					<button
					  className="btn btn-warning"
					  onClick={() => {
						actions.setFavorite(peple);
					  }}
					>
					  Like
					</button>
				  </div>
				</div>
			  </div>
			);
		  })}
		</div>
	  </div>
	);
  };