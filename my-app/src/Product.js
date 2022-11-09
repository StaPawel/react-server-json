import { useParams } from "react-router-dom";

const Product = (props) => {

    const { id } = useParams()
    console.log('useParam id: ' + id)
    console.log('props: ' + props.xd)
    
    return (
      <p>Product.js { id }</p>
    );
  }
  
  export default Product;
  