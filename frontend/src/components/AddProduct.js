import React from "react";

const Addproduct=()=>{
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [error, setError] = React.useState(false);
    const handleaddproduct= async ()=>{
    
        if(!name || !price || !category || !company){
            setError(true);
            return false;
        }
        console.warn(name, price, category, company);
        const userid = JSON.parse(localStorage.getItem("user"))._id;
        console.warn(userid);
        let result = await fetch('http://localhost:5000/add-product',{
            method:'post',
            body:JSON.stringify({name,price, category, company}),
            headers:{
                    'Content-Type': 'application/json'
                }        
            });
            result = await result.json();
            console.warn(result)
            alert("Product is added to the database");
    }
    
    // const [name, setName] = React.useState('');
    return(
        <div>
            <h2>Add Products</h2>
            <input className="inputBox" type="text" placeholder= "Enter Product Name" onChange={(e)=>setName(e.target.value)} value={name}/>
            {error && !name && <span className="validation">Enter valid Product name</span>}
            <input className="inputBox" type="text" placeholder= "Enter Product Price" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            {error && !price &&<span className="validation">Enter valid Price</span>}
            <input className="inputBox" type="text" placeholder= "Enter Product Category" onChange={(e)=>setCategory(e.target.value)} value={category}/>
            {error && !category &&<span className="validation">Enter valid Category</span>}
            <input className="inputBox" type="text" placeholder= "Enter Product Company" onChange={(e)=>setCompany(e.target.value)} value={company}/>
            {error && !company &&<span className="validation">Enter valid Company</span>}
            <button onClick={handleaddproduct} className="regsiterbutton" type="button">Add Product</button>
            

        </div>
    )
}


export default Addproduct;