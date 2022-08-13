import React from 'react';
import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../header/Header';
import Rate from '../rate/Rate';
import Weather from '../weather/Weather';
import Footer from '../footer/Footer';

let date = {
	allMounth: ["Января", "Февраля", "Мара", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"],
	day: new Date().getDate(),
	mounth: new Date().getMonth(),
	year: new Date().getFullYear()
};

let cityParam = {
	id: [523812, 554233, 524901, 498817, 473249, 501175, 3057568,974222, 3171193, 4254884, 2510769, 298795, 1282028, 2750405, 2741623, 587116, 174982, 1218197,732800],
	name: ["Mytishchi", "Korolev", "Moscow", "Saint Petersburg", "Vladikavkaz", "Rostov-na-Donu", "Slovak Republic", "Mooirivier", "Perosa Argentina", "Brazil", "Kingdom of Spain", "Republic of Turkey", "Republic of Maldives","Kingdom of the Netherlands", "Canada", "Republic of Azerbaijan", "Republic of Armenia", "Turkmenistan", "Republic of Bulgaria"],
};

export default class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="app_component">
					<Header />
					<Routes>
						<Route path='/' element={<Rate date={date} />} />
						<Route path='/weather' element={<Weather city={cityParam} date={date}/>} />
					</Routes>
					<Footer />
				</div>
			</BrowserRouter>
		)
	}
}
