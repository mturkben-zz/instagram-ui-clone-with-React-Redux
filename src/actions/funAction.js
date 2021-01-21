const IS_PAGE = 'IS PAGE'


const is_page = data => {
    return {
        type:IS_PAGE,
        payload: data
    }
}


export {is_page, IS_PAGE}