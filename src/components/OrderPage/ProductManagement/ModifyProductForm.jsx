import { useState, useContext, useEffect } from 'react';
import SbButton from '../../reusableUX/button';
import CupCakeContext from '../../../Contexts/CupCakeContext';

const ModifyProductForm = () => {
    const { cupCakesContext, setCupCakesContext, selectedCupCakeContext } = useContext(CupCakeContext);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [imageSource, setImageSource] = useState(null);
    const [previewImage, setPreviewImage] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImageSource(selectedImage);
        setPreviewImage(URL.createObjectURL(selectedImage));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const modifiedCupCakes = cupCakesContext.map(cupCake => {
            if (cupCake.id === selectedCupCakeContext.id) {
                return {
                    ...cupCake,
                    title: title,
                    price: price,
                    imageSource: imageSource,
                };
            }
            return cupCake;
        });
        setCupCakesContext(modifiedCupCakes);
    };

    useEffect(() => {
        if (selectedCupCakeContext) {
            setTitle(selectedCupCakeContext.title);
            setPrice(selectedCupCakeContext.price);
            setImageSource(selectedCupCakeContext.imageSource);
            setPreviewImage(selectedCupCakeContext.image);
        }
    }, [selectedCupCakeContext]);

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            { !selectedCupCakeContext && (
                <h3>Svp sélectionner un CupCake à modifier</h3>
            )}
            {selectedCupCakeContext && (    
                <>
                    {previewImage && (
                        <div>
                            <img src={previewImage} alt="Preview" style={{ width: '200px' }} />
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="title">Name:</label>
                            <input type="text" id="title" value={title} onChange={handleTitleChange} />
                        </div>
                        <div>
                            <label htmlFor="price">Price:</label>
                            <input type="text" id="price" value={price} onChange={handlePriceChange} />
                        </div>
                        <div>
                            <label htmlFor="image">Image:</label>
                            <input type="file" id="image" onChange={handleImageChange} />
                        </div>
                        <SbButton title="Modifier un produit" type="submit" size="200px" radius={true} />
                    </form>
                </>
            )}
        </div>
    );
};

export default ModifyProductForm;
