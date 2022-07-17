import Header from "../components/Header.js"
import "./Home.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

const Home=()=>{
const [products,setProducts]=useState([])
const[filtredProducts,setFiltredProducts]=useState();

    const getProducts = async ()=>{
        try{
            const res=await axios.get("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/");
            setProducts(res.data);
        }catch(err){
        }
    }

    useEffect(()=>{
        getProducts()
    },[])

    const handleChange=(event)=>{
        const filterProducts=products.filter(function(productsItem){
            return productsItem.category==event.target.value
        })
        setFiltredProducts(filterProducts)
    }

    useEffect(()=>{
        setFiltredProducts(products)
    },[products])

    const handleInputChange=(event)=>{
        const keyword=event.target.value.toLowerCase()
        const inputFilter=products.filter((items)=>{
            return items.name.toLowerCase().includes(keyword)
        })
        setFiltredProducts(inputFilter)
        
    }
    return(
        <div className="home-container">
        <Header></Header>

        <div className="filter-section">
            <input onChange={handleInputChange} placeHolder="Apple Watch, Samsung S21, Macbook Pro, ..."></input>
            
            <select onChange={handleChange} required className="select-category" name="product_categories" id="product_categories">
            <option value="" disabled selected hidden>Categories</option>
            <option value="Electronic">Electronic</option>
            <option value="Furnitures">Furnitures</option>
            <option value="Clothing">Clothing</option>
            <option value="Accessories">Accessories</option>
            </select>
        </div>

        <div className="product-cards">

        {filtredProducts?.map((product)=>(
           <div className="product">

            <Link to={`/detail/${product.id}`}>
           <div className="image-container">
           <img className="product-image" src={product.avatar}></img>
           </div>
           </Link>

            <h3 className="product-title">{product.name}</h3>
            <p className="product-price">${product.price}</p>
           </div> 

        ))}

        </div>
        
        <Link to={"/create"}>
        <div className="add-product-button">
            <p>+</p>
        </div>
        </Link>

        </div>

    )
}

export default Home;