import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import {is_page} from '../../actions/funAction'

const MessagePage = props => {
    useEffect(() => {
            props.onIsPage(props.location.pathname)
    }, [props.location.pathname])

    return (
        <div>
            SHOW MESSAGE PAGE
        </div>
    )
}


const mapStateToProps = state => state

const mapDispatchToProps = {
    onIsPage:is_page
}


export default connect(mapStateToProps,mapDispatchToProps)(MessagePage);
