// The extension of file jsx, is a special feateure of React, 
// .jsx extension allow us to write html in JavaScript/
import { useState} from "react";

const Create = () => {

    const [Name, setName] = useState();
    const [Price, setPrice ] = useState();
    const [Quantity, setQuantity ] = useState();

    const productData = (e) => {
        e.preventDefault();        
        const product = {
            Name: Name,
            Price: Price,
            Quantity: Quantity
        }
        console.log(product);
    }
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
    </div>
</div>

    )
}
export default Create;
