import React from 'react';
import { Form as BTForm, FormGroup, Input, Label, Col, Button } from 'reactstrap';

function InventoryForm({productName, productDescription, productPrice, productQuantity, handleProductName, handleProductDescription, handleProductPrice, handleProductQuantity, handleSubmit}) {

  return (
    <div className='container'>
      <h1>Product Inventory Tracker</h1>
      <BTForm className='form' onSubmit={handleSubmit}>
        <FormGroup>
            <Label for='productName'>Product Name:</Label>
            <Col>
                <Input type='text' name='productName' id='productName' placeholder='Enter Product Name' value={productName} onChange={handleProductName}></Input>
            </Col>
        </FormGroup>

        <FormGroup>
            <Label for='productDescription'>Product Description:</Label>
            <Col>
                <Input type='text' name='productDescription' id='productDescription' placeholder='Enter Product Description' value={productDescription} onChange={handleProductDescription}></Input>
            </Col>
        </FormGroup>

        <FormGroup>
            <Label for='productPrice'>Product Price:</Label>
            <Col>
                <Input type='number' name='productPrice' id='productPrice' placeholder='Enter Product Price' value={productPrice} onChange={handleProductPrice}></Input>
            </Col>
        </FormGroup>

        <FormGroup>
            <Label for='productQuantity'>Product Quantity:</Label>
            <Col>
                <Input type='number' name='productQuantity' id='productQuantity' placeholder='Enter Product Quantity' value={productQuantity} onChange={handleProductQuantity}></Input>
            </Col>
        </FormGroup>
        <Button type='submit' color='primary'>Submit</Button>
      </BTForm>
    </div>
  )
}

export default InventoryForm;
