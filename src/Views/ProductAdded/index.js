import { PRODUCT_ADDEDED_SUCCESSFULLY } from 'Shared/Constants';
import './style.css'

function ProductAdded() {
    return (
        <div className="newProductAdded " role="alert">
            {PRODUCT_ADDEDED_SUCCESSFULLY}
        </div>
    )
}

export default ProductAdded;