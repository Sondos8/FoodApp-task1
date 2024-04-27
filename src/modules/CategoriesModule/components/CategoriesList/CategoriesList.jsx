import React from 'react'
import Header from '../../../SharedModules/components/Header/Header'
import header from '../../../../assets/images/header.png'

export default function CategoriesList() {
  return (
    <>
    <Header 
      title={'Categories Item'}
      description={'You can now add your items that any user can order it from the Application and you can edit'} 
      imgUrl={header} 
    /> 

    {/* <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h4>Categories Table Details</h4>
          <span className='color-3'>You can check all details</span>
        </div>
        <div className="col-md-6">
          <button className='btn btn-success'>Add New Category</button>
        </div>
      </div>
    </div> */}



    </>
  )
}
