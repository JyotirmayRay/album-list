import React from 'react'
import List from './List'
import Navbar from './Navbar'

// Call the list component for each list on the albums after getting the list of all albums from the app.
const AlbumsList = (props) => {
  return (
    <>
      {/* Navbar */}
      <Navbar page="Add Album" path="/add-album" />

      <div className='albums-list'>
        {props.albums.map((album) => <List album={album} key={album.id} setUpdateAlbum={props.setUpdateAlbum} deleteAlbumFromList={props.deleteAlbumFromList} />)}
      </div>
    </>
  )
}

export default AlbumsList
