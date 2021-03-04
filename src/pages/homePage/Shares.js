import React, {useState} from "react";
import NoProfileLogo from '../../assets/no_profile_photo.jpg'
import {Modal} from "react-bootstrap";
import UserLogo from "../../assets/profile.png";

const Shares = () => {
	const [show, setShow] = useState(false);
	return (
		<div className="container hp-l-posts">
			<div className="row hp-l-posts-header">
				<div className="col-6 hp-l-posts-header-l">
					<img className="img-fluid rounded-circle m-2 ml-0" src={NoProfileLogo} width="40" height="40"/>
					<b>mturkben</b>
				</div>
				<div className="col-6 hp-l-posts-header-r"><a href="javascript::void(0)" onClick={()=> setShow(true)}>...</a>
					
					<Modal centered show={show} onHide={() => setShow(false)}>
						<Modal.Body>
							<div className="d-flex justify-content-center align-items-center flex-column">
								<div className='w-100 p-0 m-0 h-modal-footer'>
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
		</div>
	);
}

export default Shares;
