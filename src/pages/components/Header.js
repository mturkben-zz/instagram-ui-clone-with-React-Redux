import React, {useEffect, useState} from 'react'

import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import Logo from "../../assets/logo.png"
import UserLogo from '../../assets/profile.png'
import Heart from '../../assets/heart.png'
import HeartOutline from '../../assets/heartOutline.png'

import "../style.css"
import HeaderModal from "./HeaderModal";

const Header = props => {
	
	const [search, setSearch] = useState(false)
	const [profile, setProfile] = useState(false)
	const [_isPage, _setIsPage] = useState([])
	const [heart, setHearth] = useState(false)
	
	useEffect(() => {
		changeNavbarStyle();
	}, [props.fun.isPage])
	
	const changeNavbarStyle = () => {
		if(props.fun.isPage === '') {
			return false
		}
		switch(props.fun.isPage) {
			case '/':
				return _setIsPage(['home', 'home'])
			case '/msg':
				return _setIsPage(['msg', 'chatbubble-ellipses'])
			case '/explore':
				return _setIsPage(['explore', 'compass'])
			case '/info':
				return _setIsPage(['info', 'heart'])
			default:
				return props.fun.isPage
		}
	}
	
	const openModal = () => {
		setProfile(true)
		_setIsPage([])
	}
	
	return (
		<div className="container-fluid border-bottom bg-white fixed-top">
			<div className="container px-5 py-3">
				<div className="row d-flex justify-content-center align-items-center">
					<div className="col">
						<Link to='/'><img src={Logo} alt="Logo"/> </Link>
					</div>
					<div className="col">
						<div className="input-group input-group-sm">
							<input type="text" onClick={() => setSearch(true)} onBlur={() => setSearch(false)}
							       style={search ? {textAlign: "left"} : {textAlign: "center"}}
							       placeholder='&#xF002; Search' className="form-control"
							       aria-describedby="inputGroup-sizing-sm"/>
						</div>
					</div>
					<div className="col">
						<div className="d-flex float-right flex-row mt-header-right">
							
							<Link to='/'>
								<ion-icon name={_isPage[0] === 'home' ? _isPage[1] : 'home-outline'}/>
							</Link>
							<Link to='/msg'>
								<ion-icon name={_isPage[0] === 'msg' ? _isPage[1] : 'chatbubble-ellipses-outline'}/>
							</Link>
							<Link to='/explore'>
								<ion-icon name={_isPage[0] === 'explore' ? _isPage[1] : 'compass-outline'}/>
							</Link>
							
							<div className='dropdown heart-page'>
								<a href="/#" onClick={e => openModal(e)} id="rgeDropdown"
								   aria-haspopup="true" aria-expanded="false">
									<img alt='Heart' src={profile ? Heart : HeartOutline} width="25"/>
								</a>
								<HeaderModal profile={profile} setProfile={(e)=> setProfile(e)}/>
							</div>
							
							<div className="dropdown">
								<input type='image' style={heart ? {border: '1px solid #000'} : {border: '1px solid #fff'}}
								       width="30" src={UserLogo} alt='User Logo' id="prfDropdown" data-toggle="dropdown"
								       aria-haspopup="true" aria-expanded="false"
								       onFocus={()=> {_setIsPage([])}}
								       onBlur={()=> {changeNavbarStyle()}}
								/>
								<div className="dropdown-menu dropdown-menu-right shadow-sm p-0"
								     aria-labelledby="prfDropdown">
									<a className="dropdown-item" href="/#">
										<ion-icon name="person-circle-outline"/>
										Profile</a>
									<a className="dropdown-item" href="/#">
										<ion-icon name="bookmark-outline"/>
										Saved</a>
									<a className="dropdown-item" href="/#">
										<ion-icon name="settings-outline"/>
										Settings</a>
									<a className="dropdown-item" href="/#">
										<ion-icon name="repeat-outline"/>
										Switch Accounts</a>
									<div className='dropdown-divider m-0'/>
									<a className="dropdown-item" href="/#"> Log Out</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Header);
