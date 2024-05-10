import { useState, useContext } from 'react';
import SbButton from '../../reusableUX/button';
import CupCakeContext from '../../../Contexts/CupCakeContext';

const AddProductForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(null);
    const [image, setImage] = useState(null); 
    const [previewImage, setPreviewImage] = useState('');
    const { setCupCakesContext } = useContext(CupCakeContext);

    const handleNameChange = (e) => {
        setTitle(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(parseFloat(e.target.value));
    };

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
        setPreviewImage(URL.createObjectURL(selectedImage));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
       
            const newCupCake = {
                title: title,
                price: price,
                imageSource: image,
            };


        setCupCakesContext((prevCupCakes) => [...prevCupCakes, newCupCake]);
        setTitle('');
        setPrice('');
        setImage(null);
        setPreviewImage('');
    };

    return (
        <div style={{ display: "flex", flexDirection: "row" }}> 
            {previewImage && (
                <div>
                    <img src={previewImage} alt="Preview" style={{ width: '200px' }} />
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Name:</label>
                    <input type="text" id="title" value={title} onChange={handleNameChange} />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" value={price} onChange={handlePriceChange} />
                </div>
                <div>
                    <label htmlFor="image">Image:</label>
                    <input type="file" id="image" onChange={handleImageChange} />
                </div>
                <SbButton title="ajouter un produit" type="submit" size="200px" radius={true} /> 
            </form>
        </div>
    );
};

export default AddProductForm;
