import React , {useState,useEffect} from 'react'

import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Modal } from 'react-bootstrap';

import Logo from "../../assets/logo.png"
import UserLogo from '../../assets/profile.png'
import TestPhoto from '../../assets/test_photo.jpg'
import Heart  from '../../assets/heart.png'
import HeartOutline from '../../assets/heartOutline.png'

import "../style.css"

const Header = props => {

    const [search , setSearch] = useState(false)
    const [profile , setProfile] = useState(false)
    const [_Cprofile , _CsetProfile] = useState(false)
    const [heart, setHearth] = useState(false)
    const [show_goto_page, setShow_Goto_Page] = useState(false)
    const [_isPage , _setIsPage] = useState([])

    const [show, setShow] = useState(false);

    useEffect(()=> {
        changeNavbarStyle();
    },[props.fun.isPage])

    const changeNavbarStyle = () => {
        if(props.fun.isPage === '') {return false}
        switch(props.fun.isPage) {
            case '/': return _setIsPage(['home','home'])
            case '/msg': return _setIsPage(['msg','chatbubble-ellipses'])
            case '/explore': return _setIsPage(['explore','compass'])
            case '/info': return _setIsPage(['info','heart'])
            default: return props.fun.isPage
        } 
    }

    const openModal = () => {
        setProfile(true);_setIsPage([]);
    }

    const onArea = () => {
        if(_Cprofile) {
            setProfile(false);changeNavbarStyle();
        }
    }

    const notOnArea = e => {
        e.target.ownerDocument.onclick = () => {
            changeNavbarStyle()
            setProfile(false);
        }
    }

    return (
        <div className="container-fluid border-bottom bg-white">
            <div className="container px-5 py-3">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col">
                        <Link to='/'><img src={Logo} alt="Logo"/> </Link>
                    </div>    
                    <div className="col">
                        <div className="input-group input-group-sm">
                            <input type="text" onClick={() => setSearch(true)} onBlur={() => setSearch(false)} style={search ? {textAlign:"left"}: {textAlign:"center"}}  placeholder='&#xF002; Search' className="form-control" aria-describedby="inputGroup-sizing-sm"/>
                        </div>
                    </div> 
                    <div className="col">
                        <div className="d-flex float-right flex-row mt-header-right">

                            <Link to='/'><ion-icon name={_isPage[0] === 'home' ?  _isPage[1] : 'home-outline'}/></Link>
                            <Link to='/msg'><ion-icon name={_isPage[0] === 'msg' ?  _isPage[1] : 'chatbubble-ellipses-outline'}/></Link>
                            <Link to='/explore'><ion-icon name={_isPage[0] === 'explore' ?  _isPage[1] : 'compass-outline'}/></Link>
                            
                            <div className='dropdown heart-page'>
                                <a href='javascript:void(0)' onClick={e => openModal(e)} id="rgeDropdown" aria-haspopup="true" aria-expanded="false">
                                    <img alt='Heart' src={profile ? Heart : HeartOutline} width="25"/>
                                </a>
                                {
                                    profile ? 
                                    <div className="h-main-container p-0" 
                                        onMouseOver={() => {_CsetProfile(false);onArea()}} 
                                        onMouseLeave={(e) => {_CsetProfile(true);notOnArea(e)}}
                                    >
                                        {
                                            show_goto_page ?
                                                <>
                                                    <div> THİS  PAGE </div>
                                                </>
                                            :   
                                                <>
                                                    <div className="d-flex heart-item">
                                                        <button onClick={() => {setShow_Goto_Page(true);setProfile(true)}} className="p-0 m-0 h-goto-page d-flex w-100 justify-content-between align-items-center">
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
                                                                <p>  <b>zuck </b>   </p>
                                                                <sup> Seni takip etmeye başladı. <span> 4h </span> </sup>
                                                            </div>
                                                        </div>
                                                        <div className='h-right-area'>
                                                            <button className='btn btn-light' variant="primary" onClick={()=> setShow(true)}>
                                                                Takiptesin
                                                            </button>
                                                            <Modal centered show={show} onHide={() => setShow(false)}>
                                                                <Modal.Body>
                                                                    <div className="d-flex justify-content-center align-items-center flex-column">
                                                                        <img className="img-fluid" src={UserLogo} alt='UserLogo' width='60'/>
                                                                        <div className='my-4'>
                                                                            @zuck'i takibi bırak
                                                                        </div>
                                                                        <div className='w-100 p-0 m-0 h-modal-footer'>
                                                                            <button className='btn-block'> Takipi Bırak</button>
                                                                            <button className='btn-block' onClick={()=> setShow(false)} > İptal</button>
                                                                        </div>
                                                                    </div>
                                                                </Modal.Body>
                                                            </Modal>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex heart-item">
                                                        <div className="d-flex p-0 m-0">
                                                            <div className='h-rounded-item m-2'>
                                                                <img className="img-fluid" src={UserLogo} alt='UserLogo' width='45'/>   
                                                            </div>
                                                            <div className='h-text-item'>
                                                                <p> <b>zuck </b> bir yorumda senden bahsetti: </p>
                                                                <sup> <span >@mturkben721 </span>I like your style :) </sup>
                                                            </div>
                                                        </div>
                                                        <div className='h-right-area'>
                                                        <img className="img-fluid" src={TestPhoto} alt='UserLogo' width='40'/>   
                                                        </div>
                                                    </div>
                                                </>
                                        }
                                    </div> : null
                                }   
                            </div>

                            <div className="dropdown">
                                <input onBlur={()=> {setHearth(false);changeNavbarStyle()}} onFocus={() => {setHearth(true);_setIsPage([])}}  type='image' style={heart ? {border: '1px solid #000'} : {border:'1px solid #fff'}}  width="30" src={UserLogo} alt='User Logo' id="prfDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                                <div className="dropdown-menu dropdown-menu-right shadow-sm p-0"  aria-labelledby="prfDropdown">
                                    <a className="dropdown-item" href="/#"><ion-icon name="person-circle-outline"></ion-icon> Profile</a>
                                    <a className="dropdown-item" href="/#"><ion-icon name="bookmark-outline"></ion-icon> Saved</a>
                                    <a className="dropdown-item" href="/#"><ion-icon name="settings-outline"></ion-icon> Settings</a>
                                    <a className="dropdown-item" href="/#"><ion-icon name="repeat-outline"></ion-icon> Switch Accounts</a>
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