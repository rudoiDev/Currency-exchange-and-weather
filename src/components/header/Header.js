import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default class Header extends React.Component {

	weatherColor = () => {
		let mainHeading = document.querySelector('h1');
		mainHeading.innerHTML = 'Сайт прогноза погоды';

		let header_wrapper = document.querySelector('.header_wrapper');
		header_wrapper.style.background = '#85A2F5';

		let itemOne = document.querySelector('.item_one');
		itemOne.style.color = '#85A2F5';
		itemOne.innerHTML = '2022 &copy; Прогноз погоды';
	}

	rateColor = () => {
		let mainHeading = document.querySelector('h1');
		mainHeading.innerHTML = 'Сайт обмена валюты';

		let header_wrapper = document.querySelector('.header_wrapper');

		header_wrapper.style.background = '#6C983C';
		let itemOne = document.querySelector('.item_one');
		itemOne.style.color = '#6C983C';
		itemOne.innerHTML = '2022 &copy; Обмен валюты'
	}

	render() {
		return (
			<div className="header_wrapper">
				<nav>
					<h1>Сайт обмена валюты</h1>
					<ul className='li_wrapper'>
						<li>
							<Link to="/" onClick={this.rateColor}>Валюта</Link>
						</li>
						<li>
							<Link to="/weather" onClick={this.weatherColor}>Погода</Link>
							</li>
					</ul>
				</nav>
			</div>
		)
	}
}

