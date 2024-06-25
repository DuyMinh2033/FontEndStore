import React, { useEffect, useState } from 'react'
import * as ProductService from '../../Service/ProductService'
import { useParams } from 'react-router-dom';
import { useMutationHook } from '../../hooks/useMutationHook';
import CardCommponent from '../CardCommponent/CardCommponent';

const ProducTypeComponent = () => {
    const products = [
        { id: 1, sold: '1000+', discount: '5%' },
        { id: 2, sold: '1000+', discount: '5%' },
        { id: 3, sold: '1000+', discount: '5%' },
        // Add more products as needed
    ];
    const [loading, setLoading] = useState(false)
    const mutation = useMutationHook((type) => ProductService.filterTypeProduct(type))
    const { data: productType } = mutation
    const param = useParams()

    const fetchFilterType = (type) => {
        setLoading(true)
        mutation.mutate(type);
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        if (param?.type) {
            const newtype = param?.type.split('_').join(' '); //khong can cung dc :))
            fetchFilterType(newtype)
        }
    }, [param?.type])


    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-2">
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action">Tu lanh</a>
                        <a href="#" className="list-group-item list-group-item-action">TV</a>
                        <a href="#" className="list-group-item list-group-item-action">MAYGIAT</a>
                    </div>
                </div>
                <div className="col-md-9 ms-4">
                    <div className="row">
                        {productType?.data?.map((product) => (
                            <div key={product.id} className="col-md-3 mb-2">
                                <CardCommponent productTypeData={product} />
                            </div>
                        ))}
                    </div>
                    <nav>
                        <ul className="pagination"  style={{display:'flex', justifyContent:'center'}}>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default ProducTypeComponent
