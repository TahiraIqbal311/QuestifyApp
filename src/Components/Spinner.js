import loading  from './loading.gif'
import React from 'react'
class Spinner extends React.Component{
    render(){
        return(
            <>
           <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            </>
        )
    }
}
export default Spinner