import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.js"
import "./CreateProduct.css"
const CreateProduct=()=>{
 const navigate = useNavigate()
 const [values, setValues] = useState({
    name: "",
    description: "",
    avatar: "",
    price: "",
    category: "",
    developerEmail:"y.emretoptanci@gmail.com"
 });

 const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Product Name",
      required: true
    },
    {
      id: 2,
      name: "description",
      type: "text",
      placeholder: "Description",
      required: true,
      className:"input-description"
    },
    {
      id: 3,
      name: "avatar",
      type: "text",
      placeholder: "Image URL",
      required: true
    },
    {
      id: 4,
      name: "price",
      type: "number",
      placeholder: "Price",
      required: true,
    }]

    const handleChange=(event)=>{
        setValues((prev) => {
            return { ...prev, [event.target.name]: event.target.value };
          });
          
        };
        
        
        const addNewProduct = async ()=>{
            try{
                const newProduct={...values};
                const res=await axios.post(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products`, newProduct
                ).then((response=>console.log(response)
                ));
            }catch(err){
                console.log(err);
            }} 

        const handleSubmit=(e)=>{
            e.preventDefault()
            addNewProduct()
            navigate("/",{replace:true})
        }


    return(
        <>
        <Header></Header>
        <div className="create-product-container">
            <h3>Create Product</h3>
            <form onSubmit={handleSubmit}>

            {inputs.map((input) => (
            <textarea
              key={input.id}
              {...input}
              
              onChange={handleChange}
            />))}

            <select onChange={handleChange} required className="select-category" name="category" id="category">
            <option value="" disabled selected hidden>Categories</option>
            <option value="Electronic">Electronic</option>
            <option value="Furnitures">Furnitures</option>
            <option value="Clothing">Clothing</option>
            <option value="Accessories">Accessories</option>
            </select>
            
            <button>SUBMIT</button>
            
            </form>
        </div>
        
        </>
    )
}

export default CreateProduct;