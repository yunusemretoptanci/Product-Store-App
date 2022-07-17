import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header.js"
import "./ProductDetail.css";
const ProductDetail=()=>{
    const location=useLocation();
    const id=location.pathname.split("/")[2];
    const [product,setProduct]=useState({});

    const getProduct=async()=>{
        try{
            const res=await axios.get("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/"+id)
            setProduct(res.data);   
        }catch(err){
        }
    }

    const deleteProduct=async()=>{
        try{
            const res=await axios.delete("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/"+id)
        }catch(err){
        }
    }

    useEffect(()=>{
        getProduct();
    },[id]);

   
        
   

    return(
        <>
        <Header></Header>
        <div className="product-detail-container">
        <div className="product-info">
            <div className="product-image-container">
            <img src={product.avatar}></img>
            </div>
        <div className="product-title-price">

            <h3>{product.name}</h3>
            <p>$ {product.price}</p>

        </div>
        </div>

        <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
        </div>
        </div>

        <Link to={"/"}>
        <div onClick={deleteProduct} className="delete-product-button">
            <p>-</p>
        </div>
        </Link>
        </>
    )
}

export default ProductDetail;