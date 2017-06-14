import React, { Component } from "react";
import { connect } from 'react-redux';

import "./App.css";

import {createChart} from './../ducks/chart.js';

import NewChart from "./NewChart/NewChart";
import Sidebar from "./Sidebar/Sidebar";
import AddDataset from "./AddDataset/AddDataset";

class App extends Component {
	render() {

		const {
			activeChart,
			charts,
			createChart
		} = this.props;

		return (
			<div className="app">
				<Sidebar />
				<main className="app__main">
					<header className="app__header">
						<h1 className="app__title">Categorizer</h1>

						<div className="app__new-chart">
							<NewChart createChart={createChart} />
						</div>
					</header>
          <div className="app__active-chart">
            
          </div>
				</main>
			</div>
		);
	}
}

function mapStateToProps( { activeChartIndex, charts } ){
	return {
		activeChart: charts[activeChartIndex],
		charts: charts
	}
}

export default connect( mapStateToProps, {createChart } )(App);
