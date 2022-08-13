import React from 'react';
import './footer.css';

export default class Footer extends React.Component {
	render() {
		return (
			<div className="footer_wrapper">
				<div className="footer_container">
					<ul className="footer_items">
						<li className='item_one'>2022 &copy; Обмен валюты</li>
						<li>All Rigths Reserved</li>
					</ul>
					<ul className="footer_items">
						<li><a href="#">Карта сайта</a></li>
						<li><a href="#">Google Sitemap</a></li>
					</ul>
					<ul className="footer_items">
						<li><a href="#">Контакты</a></li>
						<li><a href="#">Гарантии</a></li>
						<li><a href="#">О сервисе</a></li>
						<li><a href="#">Условия возврата</a></li>
						<li><a href="#">Соглашение о использовании сервиса</a></li>
					</ul>
				</div>
			</div>
		)
	}
}

