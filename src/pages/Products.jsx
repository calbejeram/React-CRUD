import React, { useEffect, useState } from 'react';
import InventoryForm from '../components/InventoryForm';
import ProductTable from '../components/ProductTable';

function Products(Array) {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQuantity, setProductQuantity] = useState('');

    const handleProductName = (event) => {
        setProductName(event.target.value);
    };
    const handleProductDescription = (event) => {
        setProductDescription(event.target.value);
    };
    const handleProductPrice = (event) => {
        setProductPrice(event.target.value);
    };
    const handleProductQuantity = (event) => {
        setProductQuantity(event.target.value);
    };

    const LoadData = localStorage.getItem("InventoryForm") ? JSON.parse(localStorage.getItem("InventoryForm")) : [];
    

    const [productArray, setProductArray] = useState(LoadData);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (productName !== "" && productPrice > 0) {
            const productId = Date.now();
            const product = {productId, productName, productDescription, productPrice, productQuantity};
            // console.log(productId)
            // console.log(product)

            setProductArray([...productArray, product]);
            console.log(productArray)

            setProductName("");
            setProductDescription("");
            setProductPrice("");
            setProductQuantity("");
        } else {
            alert("Invalid product amount");
        };
    };

        useEffect(() => {
        localStorage.setItem("InventoryForm", JSON.stringify(productArray))
    }, [productArray]);

  return (
    <div>
        <h1>Product Inventory</h1>
        <InventoryForm productName={productName} productDescription={productDescription} productPrice={productPrice} productQuantity={productQuantity} handleProductName={handleProductName} handleProductDescription={handleProductDescription} handleProductPrice={handleProductPrice} handleProductQuantity={handleProductQuantity} handleSubmit={handleSubmit}/>

        <ProductTable Array={productArray} />
    </div>
  );
};

export default Products;
