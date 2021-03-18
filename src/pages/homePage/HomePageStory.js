import React from "react";
import NoProfileLogo from "../../assets/no_profile_photo.jpg";

const HomePageStory = () => {
	
	return (
		<div className="hp-top-main">
			<div className="hp-top-icons">
				<ion-icon name="chevron-back-circle" className="hp-top-icons-in"/>
			</div>
			<div className="hp-top-main-inner" onScroll={(e)=> console.log(e.target.scrollLeft)}>
				<div className="hp-top-story">
					<img className="img-fluid rounded-circle m-2 ml-0" src={NoProfileLogo} width="70" height="70"
					     alt="ProfilePicture"/>
					<span>mturkben</span>
				</div>
				<div className="hp-top-story">
					<img className="img-fluid rounded-circle m-2 ml-0" src={NoProfileLogo} width="70" height="70"
					     alt="ProfilePicture"/>
					<span>mturkben</span>
				</div>
				<div className="hp-top-story">
					<img className="img-fluid rounded-circle m-2 ml-0" src={NoProfileLogo} width="70" height="70"
					     alt="ProfilePicture"/>
					<span>mturkben</span>
				</div>
				<div className="hp-top-story">
					<img className="img-fluid rounded-circle m-2 ml-0" src={NoProfileLogo} width="70" height="70"
					     alt="ProfilePicture"/>
					<span>mturkben</span>
				</div>
				<div className="hp-top-story">
					<img className="img-fluid rounded-circle m-2 ml-0" src={NoProfileLogo} width="70" height="70"
					     alt="ProfilePicture"/>
					<span>mturkben</span>
				</div>
				<div className="hp-top-story">
					<img className="img-fluid rounded-circle m-2 ml-0" src={NoProfileLogo} width="70" height="70"
					     alt="ProfilePicture"/>
					<span>mturkben</span>
				</div>
				<div className="hp-top-story">
					<img className="img-fluid rounded-circle m-2 ml-0" src={NoProfileLogo} width="70" height="70"
					     alt="ProfilePicture"/>
					<span>mturkben</span>
				</div>
				<div className="hp-top-story">
					<img className="img-fluid rounded-circle m-2 ml-0" src={NoProfileLogo} width="70" height="70"
					     alt="ProfilePicture"/>
					<span>mturkben</span>
				</div>
				<div className="hp-top-story">
					<img className="img-fluid rounded-circle m-2 ml-0" src={NoProfileLogo} width="70" height="70"
					     alt="ProfilePicture"/>
					<span>mturkben</span>
				</div>
				<div className="hp-top-story">
					<img className="img-fluid rounded-circle m-2 ml-0" src={NoProfileLogo} width="70" height="70"
					     alt="ProfilePicture"/>
					<span>mturkben</span>
				</div>
				<div className="hp-top-story">
					
					
					
					<img className="img-fluid rounded-circle m-2 ml-0" src={NoProfileLogo} width="70" height="70"
					     alt="ProfilePicture"/>
					<span>mturkben</span>
				</div>
				<div className="hp-top-story">
					<img className="img-fluid rounded-circle m-2 ml-0" src={NoProfileLogo} width="70" height="70"
					     alt="ProfilePicture"/>
					<span>mturkben</span>
				</div>
			</div>
			<div className="hp-top-icons">
				<ion-icon name="chevron-forward-circle" className="hp-top-icons-in"/>
			</div>
		</div>
	);
}

export default HomePageStory;
