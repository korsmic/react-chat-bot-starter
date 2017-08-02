import React, { Component } from 'react';
import $ from 'jquery';

class RecomendSpot extends Component{
	render() {
		return(
			<div className="image-select mdl-card mdl-shadow--2dp">
				<img src={this.props.RsImg}/>
				<h5>{this.props.RsTitle}</h5>
				<div className="mdl-card__supporting-text">
					<p className="match">マッチ度：{this.props.RsPer}％</p>
					<p className="stars">評価：<span className="star_innner">{this.props.RsStar}</span></p>
				</div>
			</div>
		);
	}
	
	componentDidMount(){
		$(function(){
			$('.star_innner').each(function(){
				var $star = $(this).text();
				if($star == "0.5"){
					$(this).html('<i class="fa fa-star-half-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>');}
				else if($star == "1.0"){
					$(this).html('<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>');}
				else if($star == "1.5"){
					$(this).html('<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>');}
				else if($star == "2.0"){
					$(this).html('<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>');}
				else if($star == "2.5"){
					$(this).html('<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>');}
				else if($star == "3.0"){
					$(this).html('<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>');}
				else if($star == "3.5"){
					$(this).html('<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>');}
				else if($star == "4.0"){
					$(this).html('<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>');}
				else if($star == "4.5"){
					$(this).html('<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half-o" aria-hidden="true"></i>');}
				else if($star == "5.0"){
					$(this).html('<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>');}
				//反映されない場合はもう一度処理を行う。 
				else {return;}
			});
		});
	}
}

export default RecomendSpot;