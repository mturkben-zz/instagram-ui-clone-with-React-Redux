import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import {is_page} from '../../actions/funAction'
import NoProfileLogo from '../../assets/no_profile_photo.jpg'
import HomePageRight from "./HomePageRight";
import Shares from "./Shares";
import HomePageStory from "./HomePageStory";
import "../style.css"

const HomePage = props => {
	useEffect(() => {
		props.onIsPage(props.location.pathname)
	}, [props.location.pathname])
	
	return (
		<div className="container-fluid" style={{backgroundColor:"#fafafa"}}>
			<div className="row">
				<div className="container">
					<div className="row px-5" style={{marginTop: 100}}>
						<div className="col-12 col-lg-8">
							<HomePageStory/>
							<Shares/>
							<Shares/>
							<Shares/>
							<Shares/>
						</div>
						<div className="col-lg-4 hp-r-side position-sticky d-md-none d-lg-block">
							<div className="position-fixed" style={{width: 280}}>
								<div className="hp-r-top d-flex justify-content-between align-content-center flex-row">
									<img className="img-fluid rounded-circle mr-3" src={NoProfileLogo} width="60"/>
									<div className="d-flex justify-content-center align-items-start flex-column w-100">
										<div>muhammedturkben</div>
										<span>Muhammed Mustafa Türkben</span>
									</div>
								</div>
								<div className="hp-r-center-header">
									<div className="d-flex justify-content-between align-items-center flex-row w-100 mt-3">
										<span>Senin İçin Öneriler</span>
										<a href="/#">Tümünü Gör</a>
									</div>
									<HomePageRight/>
								</div>
								<div className="hp-r-footer mt-4">
									<div>
										<ul className="d-flex flex-wrap justify-content-start align-items-center p-0">
											<li>
												<a href="/#">Hakkında</a>
											</li>
											<li>
												<a href="/#">Basın</a>
											</li>
											<li>
												<a href="/#">API</a>
											</li>
											<li>
												<a href="/#">İş Fırsatları</a>
											</li>
											<li>
												<a href="/#">Gizlilik</a>
											</li>
											<li>
												<a href="/#">Koşullar</a>
											</li>
											<li>
												<a href="/#">Konumlar</a>
											</li>
											<li>
												<a href="/#">Başlıca Hesaplar</a>
											</li>
											<li>
												<a href="/#">Konu Etiketleri</a>
											</li>
											<li>
												<a href="/#">Dil</a>
											</li>
										</ul>
									</div>
									<div className="hp-r-footer-copyright">
										© 2021 INSTAGRAM FROM FACEBOOK
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => state

const mapDispatchToProps = {
	onIsPage: is_page
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
