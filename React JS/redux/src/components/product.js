import React, { useState, useEffect } from 'react';

const Products = () => {
    //const dispatch = useDispatch();
    //const { data: products, status } = useSelector((state) => state.product);
     const [products, setProducts] = useState([]);

    useEffect(() => {
        //dispatch(fetchProducts());
        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            console.log(data);
            setProducts(data);
        };
        fetchProducts();
    }, []);


    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>${product.price}</h5>
                    <button className='btn'>Add To Cart </button>
                </div>
            ))}
        </div>
    );
};

export default Products;