// The extension of file jsx, is a special feateure of React, 
// .jsx extension allow us to write html in JavaScript/
import { useState, useEffect} from "react";

const Create = () => {

    const [Name, setName] = useState();
    const [Price, setPrice ] = useState();
    const [Quantity, setQuantity ] = useState();

    const [Products, setProduct] = useState();


    const productData = (e) => {
        e.preventDefault();        
        const product = {
            Name: Name,
            Price: Price,
            Quantity: Quantity
        }
        console.log(product);
    }
    const FetchProduct = async () => {

        try {

            const response = await fetch('https://68aaced2909a5835049d0b45.mockapi.io/Test');
            const data = await response.json();
            setProduct(data);
            console.log(Products);
            
        } catch (e) {
            console.log(e);
        }

    }
    useEffect(function(){
        FetchProduct();

    });

    return (
       <div className="container mt-5">
        <div className="row">
        <div className="col-lg-4">
            <div className="card shadow p-4">
                <h2 className="mb-4">Create Product</h2>

                <form onSubmit={productData}>
                    <div className="mb-3">
                        <label htmlFor="productName" className="form-label">Product Name:</label>
                        <input
                            type="text"
                            id="productName"
                            name="productName"
                            className="form-control"
                            onKeyUp={e => setName (e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price:</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            className="form-control"
                             onKeyUp={e => setPrice (e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Quantity" className="form-label"> Quantity:</label>
                       <input
                            type="number"
                            id="Quantity"
                            name="Quantity"
                            className="form-control"
                             onKeyUp={e => setQuantity (e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Create</button>
                </form>
            </div>
        </div>

        <div className= "col-lg-8">
            <div className = "card">
                <div className="card-header">
                    <i className="fa fa-list"></i> All Products
                </div>
                    <table className= "table-borderd table-hover table-stripped">
                    <thead> 
                       {
                        <tr>
                            <th> ID </th>
                            <th> Name </th>
                            <th> Price </th>
                            <th> Quantity </th>
                        </tr> 
                    }
                    </thead>
                    <tbody>
                        { Products.length > 0 {
                        <tr>
                            <th> ID </th>
                            <th> Name </th>
                            <th> Price </th>
                            <th> Quantity </th>
                        </tr> 
                        } : (
                             
                        <tr>
                            <th> ID </th>
                            <th> Name </th>
                            <th> Price </th>
                            <th> Quantity </th>
                        </tr> 
                    
                        ) 
                    }
                    
                        
                        </tbody> 

                    </table>

            </div>

        </div>
    </div>
</div>

    )
}
export default Create;
