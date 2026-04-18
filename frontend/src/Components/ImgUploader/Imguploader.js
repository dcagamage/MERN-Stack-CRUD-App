import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Nav from '../Nav/Nav'

function Imguploader() {
    const [image,setImage] = useState(null);
    const [allImage, setAllImage] = useState(null);

    const submitImg = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image",image);

        await axios.post(
            "http://localhost:5000/uploadimg",
            formData,{
                headers: { "Content-Type": "multipart/form-data" },
            }
        );
        getImage();
    };
    
    const onImgChange = (e) => {
        setImage(e.target.files[0]);
    };

    const getImage = async () => {
        try {
            const result = await axios.get("http://localhost:5000/getimage");
            setAllImage(result.data.data);
        } catch (e) {
            console.error("Error getting image",e);
        }
    };

    useEffect(() => {
        getImage();
    },[]);

  return (
    <div>
        <Nav/>
      <h1>Image Part</h1> <br/>
      <form onSubmit={ submitImg }>
        <input type='file' accept='image/*' onChange={ onImgChange }></input> <br/><br/>
        <button type='submit'>Upload</button>
      </form>
      <br/>

      {allImage === null ? "" : allImage.map((data) => (
        <img key={data._id}
        src={`http://localhost:5000/files/${data.image}`}
        height={100}
        width={100}
        alt={`User uploaded content ${data._id}`}
        ></img>
      ))}
    </div>
  )
}

export default Imguploader
