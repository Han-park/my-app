import React from "react";
import ReactDOM from "react-dom";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header(){
    return(
        <div>
        <header id="header">
						<h1><a href="index.html">Future Imperfect</a></h1>
						<nav class="links">
							<ul>
								<li><a href="#">Lorem</a></li>
								<li><a href="#">Ipsum</a></li>
								<li><a href="#">Feugiat</a></li>
								<li><a href="#">Tempus</a></li>
								<li><a href="#">Adipiscing</a></li>
							</ul>
						</nav>
						<nav class="main">
							<ul>
								<li class="search">
									<a href="#search">S</a>
									<form id="search" method="get" action="#">
										<input type="text" name="query" placeholder="Search" />
									</form>
								</li>
								<li class="menu">
									<a href="#menu">M</a>
								</li>
							</ul>
						</nav>
					</header>
                    </div>
    );
}

export default Header;  