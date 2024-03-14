import React from "react";

let excuse;
let who = [
  "Steve Buscemi",
  "Ronald McDonald",
  "An angry frog",
  "The actual void lord itself",
  "The person that invented envelope adhesive",
  "Death metal zombie Princess Diana",
  "Abraham Lincoln's moustache",
  "Chuck Norris"
];
let action = [
  "de-materialized",
  "created a wonderful puree using only",
  "forced self-awareness on",
  "falcon punched",
  "performed a 'divide by zero' on",
  "awkwardly caressed"
];
let what = [
  "my favorite underwear",
  "the enter keys from all my keyboards",
  "an innocent kitten",
  "my second favorite Backstreet Boys poster",
  "a heavily soiled urinal cake",
  "a battle tested nerf gun"
];
let when = [
  "on Christmas Eve",
  "while a hot pocket was being microwaved",
  "during the vocal peak in Hanson's breakaway hit MmmBop",
  "while I was in the bathroom",
  "while I was completing my excuse generator project",
  "during a barbershop quartet rendition of a Skrillex dubstep song"
];

function generateExcuse() {
  excuse =
    who[Math.floor(Math.random() * who.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)] +
    ".";

  let excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = excuse;
}

window.onload = function() {
  generateExcuse();
  document.getElementById("myBtn").addEventListener("click", generateExcuse);
};





const Home = () => {
	return (
		<div class="container text-center mt-5">


		{/* START jumbotron */}
		<div class="row">
		  <div class="col-3"></div>
		  <div class="col-6">
			<div class="card text-center bg-light p-2 jaysBlackBorder">
			  <div>
				<img
				  src="https://res.cloudinary.com/teepublic/image/private/s--MktTJh5t--/t_Preview/b_rgb:ffffff,c_limit,f_auto,h_630,q_90,w_630/v1510490317/production/designs/2047957_1.jpg"
				/><img
				  src="https://res.cloudinary.com/teepublic/image/private/s--MktTJh5t--/t_Preview/b_rgb:ffffff,c_limit,f_auto,h_630,q_90,w_630/v1510490317/production/designs/2047957_1.jpg"
				/><img
				  src="https://res.cloudinary.com/teepublic/image/private/s--MktTJh5t--/t_Preview/b_rgb:ffffff,c_limit,f_auto,h_630,q_90,w_630/v1510490317/production/designs/2047957_1.jpg"
				/>
			  </div>
			</div>
		  </div>
		  <div class="col-3"></div>
		</div>
		{/* END jumbotron */}

  
		{/* START new excuse button */}
		<div class="row pt-4">
		  <div class="col-3"></div>
		  <div class="col-6">
			<button class="btn btn-danger w-100 border jaysBlackBorder" id="myBtn">
			  Click for a New Excuse
			</button>
		  </div>
		  <div class="col-3"></div>
		</div>
		{/* END new excuse button */}
  
		{/* START excuse card */}
		<div class="row pt-4">
		  <div class="col-3"></div>
		  <div class="col-6">
			<div class="card text-center text-bg-secondary jaysBlackBorder">
			  <div class="bg-dark fs-2 text-uppercase text-danger">
				I'm sorry professor, but...
			  </div>
			  <div class="pt-3 pb-1 px-3 fs-5">
				<p id="excuse">
				  If you can read this text, that means Jay's JavaScript isn't
				  loading
				</p>
			  </div>
			</div>
		  </div>
		  <div class="col-3"></div>
		</div>
		{/* END excuse card */}
  
		{/* START footer */}
		<div class="row pt-4">
		  <div class="col-3"></div>
		  <div class="col-6">
			<div class="card text-center text-bg-dark p-2 jaysBlackBorder">
			  <div>
				Made with &#127828; by
				<a
				  href="https://github.com/labs404"
				  target="_blank"
				  class="link-danger link-offset-2 link-underline-opacity-0"
				  >Jay</a
				>
			  </div>
			</div>
		  </div>
		  <div class="col-3"></div>
		</div>
		{/* END footer */}
	  </div>
	);
};

export default Home;