import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const AddAlbum = (props) => {

  /*This function takes in inputs such as userID and title,
  and then calls the "addAlbum" function to add it to the album list.*/
  const getAlbumFormData = () => {
    const userId = document.getElementById('aaform-userid-inp').value;
    const title = document.getElementById('aaform-title-inp').value;
    props.addAlbumToList(Number(userId), title)
  }

  return (
    <>
      <Navbar path="/" page="Home" />


      <div className='addalbum-container'>
        <div className='addalbum-form'>
          <h4 className='form-header-text'>Enter New Album Details</h4>
          <div className='inp-container'>
            Enter User Id :
            <input id='aaform-userid-inp' type="number" />
          </div>
          <div className='inp-container'>
            Enter Album Title :
            <input id='aaform-title-inp' type="text" />
          </div>
          <div>
            <Link to="/"><button onClick={getAlbumFormData}>Add To List</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddAlbum
