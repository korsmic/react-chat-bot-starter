import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
// import RefreshIndicator from 'material-ui/RefreshIndicator';
import CircularProgress from 'material-ui/CircularProgress';

// AWS_URL
// const AWS_URL = 'http://54.64.98.65:3000';
const AWS_URL = 'http://54.250.145.91:3000';
// MONGO_URL
// const MONGO_URL = 'http://localhost:3090';
const MONGO_URL = `https://enigmatic-sea-18795.herokuapp.com`

const style = {
  refresh: {
    visibility: "hidden"
  }
};

class Matrix3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
			// Slider settings
			sliderA: 4,// A:便利な
			sliderB: 4,// B:静かな
			sliderC: 4,// C:ワイルドな
			sliderD: 4,// D:スタイリッシュな
			sliderE: 4,// E:古風な
			sliderF: 4,// F:開放的な
			sliderG: 4,// G:自然豊かな
			sliderH: 4,// H:格式のある
			sliderI: 4,// I:リラックスできる
			sliderJ: 4,// J:にぎやかな
			sliderK: 4,// k:上品な
			sliderL: 4,// L:隠れ家的な
      selection: [],
			disabled1: false,
			disabled2: true,
			disabled3: true,
			loadStatus: "hidden"
    };

		this.handleSliderA = this.handleSliderA.bind(this);
		this.handleSliderB = this.handleSliderB.bind(this);
		this.handleSliderC = this.handleSliderC.bind(this);
		this.handleSliderD = this.handleSliderD.bind(this);
		this.handleSliderE = this.handleSliderE.bind(this);
		this.handleSliderF = this.handleSliderF.bind(this);
		this.handleSliderG = this.handleSliderG.bind(this);
		this.handleSliderH = this.handleSliderH.bind(this);
		this.handleSliderI = this.handleSliderI.bind(this);
		this.handleSliderJ = this.handleSliderJ.bind(this);
		this.handleSliderK = this.handleSliderK.bind(this);
		this.handleSliderL = this.handleSliderL.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		// this.handleSendData = this.handleSendData.bind(this);
  };

	// handleSlider Settings
	handleSliderA(event, value){event.preventDefault(); this.setState({ sliderA: value });}
	handleSliderB(event, value){event.preventDefault(); this.setState({ sliderB: value });}
	handleSliderC(event, value){event.preventDefault(); this.setState({ sliderC: value });}
	handleSliderD(event, value){event.preventDefault(); this.setState({ sliderD: value });}
	handleSliderE(event, value){event.preventDefault(); this.setState({ sliderE: value });}
	handleSliderF(event, value){event.preventDefault(); this.setState({ sliderF: value });}
	handleSliderG(event, value){event.preventDefault(); this.setState({ sliderG: value });}
	handleSliderH(event, value){event.preventDefault(); this.setState({ sliderH: value });}
	handleSliderI(event, value){event.preventDefault(); this.setState({ sliderI: value });}
	handleSliderJ(event, value){event.preventDefault(); this.setState({ sliderJ: value });}
	handleSliderK(event, value){event.preventDefault(); this.setState({ sliderK: value });}
	handleSliderL(event, value){event.preventDefault(); this.setState({ sliderL: value });}

  handleSubmit(event){
		
		event.preventDefault();

		const sliderA = this.state.sliderA;
		const sliderB = this.state.sliderB;
		const sliderC = this.state.sliderC;
		const sliderD = this.state.sliderD;
		const sliderE = this.state.sliderE;
		const sliderF = this.state.sliderF;
		const sliderG = this.state.sliderG;
		const sliderH = this.state.sliderH;
		const sliderI = this.state.sliderI;
		const sliderJ = this.state.sliderJ;
		const sliderK = this.state.sliderK;
		const sliderL = this.state.sliderL;

		const selection = {
			sliderA,sliderB,sliderC,sliderD,sliderE,sliderF,sliderG,sliderH,sliderI,sliderJ,sliderK,sliderL
		}
		this.setState({ 
			selection: [{
				sliderA,sliderB,sliderC,sliderD,sliderE,sliderF,sliderG,sliderH,sliderI,sliderJ,sliderK,sliderL
			}], 
			loadStatus: "visible",
			disabled1: true
		});

		const selectionToJson = JSON.parse(JSON.stringify(selection));
		console.log('selectionToJson: ', selectionToJson);

		// axios
		// yIDの値をAWSから取得する
		axios.post(`${AWS_URL}/topython`, selectionToJson )
			.then((res) => {
				console.log('yID: ',res.data.yID);
				console.log("yID: ",res.data.yID);
				console.log("yImagePath: ",res.data.yImagePath);
				console.log("yName: ",res.data.yName);
				console.log("yText: ",res.data.yText);
				this.setState({
					yData: {
						yID: res.data.yID,
						yImagePath: res.data.yImagePath,
						yName: res.data.yName,
						yText: res.data.yText,
						disabled3: false
					},
					// disabled2: true,
					loadStatus: "hidden"
				});
			})
			.catch(function (error) {
				console.log(error);
			});
  }

	yDataSend() {
		return this.state.yData;
	}

	// handleSendData(event) {
	// 	event.preventDefault();
	// 	this.onClick = this.onClick;
	// 	const yID = this.state.yID;
	// 	console.log('send yID: ', yID);
	// 	// axios
	// 	// yIDの値をheroku mongodbにPOSTして取得する
	// 	axios.post(`${MONGO_URL}/yadget`, { yID })
	// 		.then((response) => {
	// 			console.log("yID: ",response.data.yID);
	// 			console.log("yImagePath: ",response.data.yImagePath);
	// 			console.log("yName: ",response.data.yName);
	// 			console.log("yText: ",response.data.yText);
	// 			this.setState({
	// 				yData: {
	// 					yID: response.data.yID,
	// 					yImagePath: response.data.yImagePath,
	// 					yName: response.data.yName,
	// 					yText: response.data.yText,
	// 					disabled3: false
	// 				},
	// 				disabled2: true
	// 			});
	// 		})
	// 		.catch(function (error) {
	// 			console.log(error);
	// 		});
	// }


	

	render() {
		return(
			<div className="sliders">
				<form>
					<div className="sliderbox">
						<p>便利な : <span>{this.state.sliderA}</span></p>
						<div>
							<p>重要でない</p>
							<p>重要</p>
						</div>
						<Slider className="slider" step={1} min={1} max={7} value={this.state.sliderA} onChange={this.handleSliderA} />

						<p>静かな : <span>{this.state.sliderB}</span></p>
						<div>
							<p>重要でない</p>
							<p>重要</p>
						</div>
						<Slider className="slider" step={1} min={1} max={7} value={this.state.sliderB} onChange={this.handleSliderB} />
						
						<p>ワイルドな : <span>{this.state.sliderC}</span></p>
						<div>
							<p>重要でない</p>
							<p>重要</p>
						</div>
						<Slider className="slider" step={1} min={1} max={7} value={this.state.sliderC} onChange={this.handleSliderC} />
						
						<p>スタイリッシュな : <span>{this.state.sliderD}</span></p>
						<div>
							<p>重要でない</p>
							<p>重要</p>
						</div>
						<Slider className="slider" step={1} min={1} max={7} value={this.state.sliderD} onChange={this.handleSliderD} />
						
						<p>古風な : <span>{this.state.sliderE}</span></p>
						<div>
							<p>重要でない</p>
							<p>重要</p>
						</div>
						<Slider className="slider" step={1} min={1} max={7} value={this.state.sliderE} onChange={this.handleSliderE} />
						
						<p>開放的な : <span>{this.state.sliderF}</span></p>
						<div>
							<p>重要でない</p>
							<p>重要</p>
						</div>
						<Slider className="slider" step={1} min={1} max={7} value={this.state.sliderF} onChange={this.handleSliderF} />
						
						<p>自然豊かな : <span>{this.state.sliderG}</span></p>
						<div>
							<p>重要でない</p>
							<p>重要</p>
						</div>
						<Slider className="slider" step={1} min={1} max={7} value={this.state.sliderG} onChange={this.handleSliderG} />
						
						<p>格式のある : <span>{this.state.sliderH}</span></p>
						<div>
							<p>重要でない</p>
							<p>重要</p>
						</div>
						<Slider className="slider" step={1} min={1} max={7} value={this.state.sliderH} onChange={this.handleSliderH} />
						
						<p>リラックスできる : <span>{this.state.sliderI}</span></p>
						<div>
							<p>重要でない</p>
							<p>重要</p>
						</div>
						<Slider className="slider" step={1} min={1} max={7} value={this.state.sliderI} onChange={this.handleSliderI} />
						
						<p>にぎやかな : <span>{this.state.sliderJ}</span></p>
						<div>
							<p>重要でない</p>
							<p>重要</p>
						</div>
						<Slider className="slider" step={1} min={1} max={7} value={this.state.sliderJ} onChange={this.handleSliderJ} />
						
						<p>上品な : <span>{this.state.sliderK}</span></p>
						<div>
							<p>重要でない</p>
							<p>重要</p>
						</div>
						<Slider className="slider" step={1} min={1} max={7} value={this.state.sliderK} onChange={this.handleSliderK} />
						
						<p>隠れ家的な : <span>{this.state.sliderL}</span></p>
						<div>
							<p>重要でない</p>
							<p>重要</p>
						</div>
						<Slider className="slider" step={1} min={1} max={7} value={this.state.sliderL} onChange={this.handleSliderL} />
	
					</div>
					<p className="caution">※「①送信」クリック後、5秒前後処理に時間がかかります。</p>
					{/* <p className="caution">※処理が完了すると「②DB送信」の色が変わりクリック可能になります。</p> */}
					<div className={`load-status ${this.state.loadStatus}`}>
						<div className="loading">
							<CircularProgress />
						</div>
					</div>
					<RaisedButton
						onTouchTap={this.handleSubmit}
						disabled={this.state.disabled1}
						label="①送信"
						fullWidth={true}
						primary={true}
					/>
				</form>
					{/* <RaisedButton
						onTouchTap={this.handleSendData}
						disabled={this.state.disabled2}
						label="②DB送信"
						fullWidth={true}
						secondary={true}
					/> */}
			</div>
		);
	}

}

export default Matrix3;

