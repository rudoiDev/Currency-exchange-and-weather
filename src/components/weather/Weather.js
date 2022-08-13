import React from 'react';
import './weather.css';

export default class Weather extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			wether_city: '',
			wether_temp: '',
			wether_description: '',
			wether_img: '',
			weather_carts: []
		}
	}

	componentDidMount() {
		this.getWeaterCarts();
		this.getWeather();
	}

	getWeaterCarts = () => {
		let spinner = document.querySelector('.spinner')
		let carousel = document.querySelector('.carousel')
		carousel.style.display = 'none';

		let weatherCarts = [];
		let arrPromices = [];
		setTimeout(() => {
			((min = 0, max = 18) => {
				for (let i = min; i <= max; i++) {
					arrPromices[i] = (() => {
						const param = {
							url: "https://api.openweathermap.org/data/2.5/",
							appid: process.env.REACT_APP_API_KEY,
							cityId: this.props.city.id[i]
						};
						return (
							new Promise((res, rej) => {
								weatherCarts.push({});
								fetch(`${param.url}weather?id=${param.cityId}&units=metric&APPID=${param.appid}`)
									.then(weather => weather.json())
									.then(data => {
										weatherCarts[i].cart_name = data.name;
										weatherCarts[i].cart_temp = Math.floor(data.main.temp);
										weatherCarts[i].cart_description = data.weather[0]['description'];
										weatherCarts[i].cart_img = `https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`;
									})
									.then(() => {
										res()
									})
							})
						)
					})()
				}
			})()
			Promise.all(arrPromices)
			.then(() => {
				this.setState({ weather_carts: weatherCarts })
				spinner.style.display = 'none';
				carousel.style.display = 'block';
			})
		}, 300)
	};

	getWeather = () => {
		const selectSpinner = document.querySelector('.select_spinner');
		selectSpinner.style.display = 'block';
		const listWrapper = document.querySelector('.weather_list-wrapper');
		listWrapper.style.display = 'none';

		setTimeout(() => {
			const select = document.querySelector('.select_item').value;
			const param = {
				url: "https://api.openweathermap.org/data/2.5/",
				appid: process.env.REACT_APP_API_KEY,
				cityId: select
			};
	
			fetch(`${param.url}weather?id=${param.cityId}&units=metric&APPID=${param.appid}`)
				.then(weather => weather.json())
				.then(this.showWeather)
				.then(() => {
					selectSpinner.style.display = 'none';
					listWrapper.style.display = 'block';
				})
		}, 300)
	};

	showWeather = (data) => {
		this.setState({
			wether_city: data.name,
			wether_temp: Math.floor(data.main.temp),
			wether_description: data.weather[0]['description'],
			wether_img: `https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`
		})
	}

	getDay = () => {
		let mounthNow = this.props.date.mounth;
		return this.props.date.allMounth[mounthNow]
	}

	render() {
		return (
			<div className="weather_wrapper">
				<div className="weather_container">
					<h2>Текущая погода на <span>{this.props.date.day} {this.getDay()} {this.props.date.year} года</span></h2>
					<hr />
					<button className="btn btn-primary spinner" type="button" disabled>
						<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
						Загрузка...
					</button>
					<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
						<div className="carousel-inner">
							<div className="carousel-item active">
								<div className='weather_list-carts'>
									{Object.values(this.state.weather_carts).map((elem, index) => {
										if (index < 6) return (
												<div key={index.toString()} className="list_cart">
													<div className="cart_name">
														{elem.cart_name}
													</div>
													<div className="cart_temp">
														{elem.cart_temp}&deg;
													</div>
													<div className="cart_description">
														{elem.cart_description}
													</div>
													<div className="cart_img">
														<img src={elem.cart_img} />
													</div>
												</div>
										)
									})}
								</div>
							</div>
							<div className="carousel-item">
								<div className='weather_list-carts'>
								{Object.values(this.state.weather_carts).map((elem, index) => {
										if (index > 6 && index <= 12) return (
												<div key={index.toString()} className="list_cart">
													<div className="cart_name">
														{elem.cart_name}
													</div>
													<div className="cart_temp">
														{elem.cart_temp}&deg;
													</div>
													<div className="cart_description">
														{elem.cart_description}
													</div>
													<div className="cart_img">
														<img src={elem.cart_img} />
													</div>
												</div>
										)
									})}
								</div>
							</div>
							<div className="carousel-item">
								<div className='weather_list-carts'>
								{Object.values(this.state.weather_carts).map((elem, index) => {
										if (index > 12 && index <= 19) return (
												<div key={index.toString()} className="list_cart">
													<div className="cart_name">
														{elem.cart_name}
													</div>
													<div className="cart_temp">
														{elem.cart_temp}&deg;
													</div>
													<div className="cart_description">
														{elem.cart_description}
													</div>
													<div className="cart_img">
														<img src={elem.cart_img} />
													</div>
												</div>
										)
									})}
								</div>
							</div>
						</div>
						<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="prev">
							<i className="fa fa-chevron-left arrow-left" aria-hidden="true"></i>
						</button>
						<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">
							<i className="fa fa-chevron-right arrow-right" aria-hidden="true"></i>
						</button>
					</div>
					<div className="weather_list-carts">
					</div>
					<h2>Узнать погоду в определенном городе:</h2>
					<div className="weather_list-main">
						<div className="weather_list">
							<button className="btn btn-primary select_spinner" type="button" disabled>
								<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
								Загрузка...
							</button>
							<div className="weather_list-wrapper">
								<div className="weather_city">
									{this.state.wether_city}
								</div>
								<div className="weather_temp">
									{this.state.wether_temp}&deg;
								</div>
								<div className="weather_description">
									{this.state.wether_description}
								</div>
								<div className="weather_img">
									<img src={this.state.wether_img} alt="" />
								</div>
							</div>
							<select className='select_item' onChange={this.getWeather}>
								{Object.values(this.props.city.name).map((elem, index) => {
									return <option key={elem} value={this.props.city.id[index]}>{elem}</option>
								})}
							</select>
						</div>
					</div>
					<div className="weather_footer">
						<p>На нашем сайте мы используем cookie для сбора информации технического характера. В частности, для персифицированной работы сайта мы обрабатываем IP-адрес региона вашего местололожения.</p>
					</div>
				</div>
			</div>
		)
	}
}
