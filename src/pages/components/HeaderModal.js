import React, {useEffect, useState} from "react"
import UserLogo from "../../assets/profile.png";
import {Modal} from "react-bootstrap";
import TestPhoto from "../../assets/test_photo.jpg";

const HeaderModal = ({profile, setProfile}) => {
	
	const [_Cprofile, _CsetProfile] = useState(false)
	const [show_goto_page, setShow_Goto_Page] = useState(false)
	const [show, setShow] = useState(false);
	const [doit, setDoit] = useState(false);
	return (
		<>
			{
				profile ?
					<div className="h-main-container p-0">
						{
							!show_goto_page ?
								<>
									<div className="d-flex heart-item">
										<button onClick={() => {
											setShow_Goto_Page(true);
											setProfile(true)
										}}
										        className="p-0 m-0 h-goto-page d-flex w-100 justify-content-between align-items-center">
											<div className="d-flex p-0 m-0">
												<div className='h-rounded-item h-bg-red m-2'>
													2
												</div>
												<div className='h-text-item'>
													<p> Takip İstekleri </p>
													<sup> İstekleri onayla veya yok say </sup>
												</div>
											</div>
											<div className='h-right-area'>
												<ion-icon name="chevron-forward-outline"></ion-icon>
											</div>
										</button>
									</div>
									<div className="d-flex heart-item">
										<div className="d-flex p-0 m-0">
											<div className='h-rounded-item m-2'>
												<img className="img-fluid" src={UserLogo} alt='UserLogo' width='43'/>
											</div>
											<div className='h-text-item'>
												<p><b>zuck </b></p>
												<sup> Seni takip etmeye başladı. <span> 4h </span>
												</sup>
											</div>
										</div>
										<div className='h-right-area'>
											<button className='btn btn-light' variant="primary"
											        onClick={() => setShow(true)}>
												Takiptesin
											</button>
											<Modal centered show={show} onHide={() => setShow(false)}>
												<Modal.Body>
													<div
														className="d-flex justify-content-center align-items-center flex-column">
														<img className="img-fluid" src={UserLogo}
														     alt='UserLogo' width='60'/>
														<div className='my-4'>
															@zuck'i takibi bırak
														</div>
														<div className='w-100 p-0 m-0 h-modal-footer'>
															<button className='btn-block'> Takipi Bırak
															</button>
															<button className='btn-block'
															        onClick={() => setShow(false)}> İptal
															</button>
														</div>
													</div>
												</Modal.Body>
											</Modal>
										</div>
									</div>
									<div className="d-flex heart-item">
										<div className="d-flex p-0 m-0">
											<div className='h-rounded-item m-2'>
												<img className="img-fluid" src={UserLogo} alt='UserLogo'
												     width='45'/>
											</div>
											<div className='h-text-item'>
												<p><b>zuck </b> bir yorumda senden bahsetti: </p>
												<sup> <span>@mturkben721 </span>I like your style :)
												</sup>
											</div>
										</div>
										<div className='h-right-area'>
											<img className="img-fluid" src={TestPhoto} alt='UserLogo'
											     width='40'/>
										</div>
									</div>
								</>
								:
								<>
									<div> THİS PAGE</div>
								</>
						}
					</div> : null
			}
		</>
	);
}

export default HeaderModal
