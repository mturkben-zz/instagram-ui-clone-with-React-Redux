import React, {useEffect, useState} from "react";
import NoProfileLogo from '../../assets/no_profile_photo.jpg'
import {Modal} from "react-bootstrap";
import Subaru from "../../assets/subaru.jpg";

const Shares = () => {
	const [show, setShow] = useState(false);
	const [yorum, setYorum] = useState("");
	const [yorumStyle, setYorumStyle] = useState(false);
	
	useEffect(()=>{
		setYorumStyle( yorum !== "" ? true : false);
	},[yorum])
	
	console.log(yorum);
	return (
		<div className="container hp-l-posts">
			<div className="row hp-l-posts-header">
				<div className="col-6 hp-l-posts-header-l">
					<img className="img-fluid rounded-circle m-2 ml-0" src={NoProfileLogo} width="40" height="40" alt="ProfilePicture"/>
					<b>mturkben</b>
				</div>
				<div className="col-6 hp-l-posts-header-r"><a onClick={()=> setShow(true)}>...</a>
					<Modal centered show={show} onHide={() => setShow(false)}>
						<Modal.Body>
							<div className="d-flex justify-content-center align-items-center flex-column">
								<div className='w-100 p-0 m-0 h-modal-footer h-main-modal'>
									<button className='btn-block'> Şikayet Et </button>
									<button className='btn-block'> Takibi Bırak </button>
									<button className='btn-block'> Gönderiye Git </button>
									<button className='btn-block'> Paylaş </button>
									<button className='btn-block'> Bağlantıyı Kopyala </button>
									<button className='btn-block'> Sitene Göm</button>
									<button className='btn-block' onClick={() => setShow(false)}> İptal </button>
								</div>
							</div>
						</Modal.Body>
					</Modal>
				</div>
			</div>
			<div className="row hp-l-posts-main">
				<img src={Subaru}  className="img-fluid" alt="Posts"/>
				<div className="d-flex justify-content-between align-items-center w-100">
					<div className="d-flex justify-content-center align-items-center">
						<ion-icon name='heart-outline'/>
						<ion-icon name='chatbubble-outline'/>
						<ion-icon name='arrow-redo-outline'/>
					</div>
					<ion-icon name='bookmark-outline'/>
				</div>
				<div className="p-3 w-100">
					<div className="text-left d-flex">
						<b className="mr-2">mturkben</b>
						<p className="p-0 m-0"> Şundan Aldım bitane :) </p>
					</div>
					<div className="font-weight-lighter"> 8 Saniye Önce </div>
				</div>
				<div className="d-flex  align-items-center p-2 w-100">
					<ion-icon name='happy-outline'/>
					<input type="text" placeholder="Yorum ekle..." className="w-100" value={yorum} onChange={(e)=>setYorum(e.target.value)}/>
					<input type="submit" value="Paylaş" style={{color: yorumStyle ? "#0095f6" : "#0095f660"}}/>
				</div>
			</div>
		</div>
	);
}

export default Shares;
