import React from 'react';
import './rate.css';

export default class Rate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currency: '',
			resultCurrency: '',
			resultCount: '',
		}
	}

	componentDidMount() {
		let spinner = document.querySelector('.spinner_rate');
		let carousel  = document.querySelector('.carousel');
		carousel.style.display = 'none';
		setTimeout(() => {
			fetch("https://www.cbr-xml-daily.ru/latest.js")
			.then(response => response.json())
			.then(data => {
				let result = {};
				for (let index in data.rates) {
					result[index] = data.rates[index].toFixed(3);
				}
				this.setState({ currency: result });
			})
			spinner.style.display = 'none';
			carousel.style.display = 'block';
		}, 300)
	}

	getDay = () => {
		let mounthNow = this.props.date.mounth;
		return this.props.date.allMounth[mounthNow]
	}

	submitCalc = e => {
		e.preventDefault();
		let rateName = e.target.elements[1].value;
		let rateCount = this.state.currency[rateName] * e.target.elements[0].value;

		this.setState({ resultCount: rateCount.toFixed(2) });
		this.setState({ resultCurrency: rateName });
	}

	render() {
		return (
			<div className="main_wrapper">
				<div className="money_wrapper">
					<h2>Курс валют на <span>{this.props.date.day} {this.getDay()} {this.props.date.year} года</span></h2>
					<hr />
					<button className="btn btn-primary spinner_rate" type="button" disabled>
						<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
						Загрузка...
					</button>
					<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
						<div className="carousel-inner">
							<div className="carousel-item active">
								<div className="wallet">
									{Object.keys(this.state.currency).map((el, index) => {
											if (index <= 5) {
												return (
													<div className="currency_item" key={el}>
														<div className="currency_name">
															{el}
														</div>
														<div className="currency_count">
															{this.state.currency[el]}
														</div>
														<div className="currency_description">
															* Курс по отношению к Рублю
														</div>
													</div>
												)
											}
										}
									)}
								</div>
							</div>
							<div className="carousel-item">
								<div className="wallet">
									{Object.keys(this.state.currency).map((el, index) => {
											if (index >= 6 && index <= 11) {
												return (
													<div className="currency_item" key={el}>
														<div className="currency_name">
															{el}
														</div>
														<div className="currency_count">
															{this.state.currency[el]}
														</div>
														<div className="currency_description">
															* Курс по отношению к Рублю
														</div>
													</div>
												)
											}
										}
									)}
								</div>
							</div>
							<div className="carousel-item">
								<div className="wallet">
									{Object.keys(this.state.currency).map((el, index) => {
											if (index >= 12 && index <= 17) {
												return (
													<div className="currency_item" key={el}>
														<div className="currency_name">
															{el}
														</div>
														<div className="currency_count">
															{this.state.currency[el]}
														</div>
														<div className="currency_description">
															* Курс по отношению к Рублю
														</div>
													</div>
												)
											}
										}
									)}
								</div>
							</div>
							<div className="carousel-item">
								<div className="wallet">
									{Object.keys(this.state.currency).map((el, index) => {
											if (index >= 18 && index <= 23) {
												return (
													<div className="currency_item" key={el}>
														<div className="currency_name">
															{el}
														</div>
														<div className="currency_count">
															{this.state.currency[el]}
														</div>
														<div className="currency_description">
															* Курс по отношению к Рублю
														</div>
													</div>
												)
											}
										}
									)}
								</div>
							</div>
							<div className="carousel-item">
								<div className="wallet">
									{Object.keys(this.state.currency).map((el, index) => {
											if (index >= 24 && index <= 29) {
												return (
													<div className="currency_item" key={el}>
														<div className="currency_name">
															{el}
														</div>
														<div className="currency_count">
															{this.state.currency[el]}
														</div>
														<div className="currency_description">
															* Курс по отношению к Рублю
														</div>
													</div>
												)
											}
										}
									)}
								</div>
							</div>
							<div className="carousel-item">
								<div className="wallet">
									{Object.keys(this.state.currency).map((el, index) => {
											if (index >= 30 && index <= 34) {
												return (
													<div className="currency_item" key={el}>
														<div className="currency_name">
															{el}
														</div>
														<div className="currency_count">
															{this.state.currency[el]}
														</div>
														<div className="currency_description">
															* Курс по отношению к Рублю
														</div>
													</div>
												)
											}
										}
									)}
								</div>
							</div>
						</div>
						<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
							<i className="fa fa-chevron-left arrow-left" aria-hidden="true"></i>
						</button>
						<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
							<i className="fa fa-chevron-right arrow-right" aria-hidden="true"></i>
						</button>
					</div>
					<h2>Конвертация:</h2>
					<div className="count_money">
						<div className="calc_wallet">
							<form onSubmit={this.submitCalc}>
								<label htmlFor="number">RUB:</label>
								<input className='input_number' type="number" placeholder='Введите сумму ...' defaultValue={150} />
								<select>
									{Object.keys(this.state.currency).map((elem, index) => {
										return <option key={index.toString()} value={elem}>{elem}</option>
									})}
								</select>
								<input className='submit' type="submit" value='Посчитать' />
							</form>
							<br/>
							<hr />
							<div className="calc_result">Вы можете обменять: 	<span>
								{this.state.resultCount} {this.state.resultCurrency}
							</span>
							</div>
						</div>
					</div>
					<div className="main_footer">
						<p>На нашем сайте мы используем cookie для сбора информации технического характера. В частности, для персифицированной работы сайта мы обрабатываем IP-адрес региона вашего местололожения.</p>
					</div>
				</div>
			</div>
		)
	}
}
