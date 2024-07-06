import React from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { convertPrice } from '../../utils';
import { useDispatch } from 'react-redux';

const CardCommponent = (props) => {
    const navigate = useNavigate()
    const { id, key, name, image, type, price, rating, description, countInStock, selled, productTypeData } = props

    const handleDetails = (id) => {
        navigate(`productdetails/${id}`)
    }
    const handleDetailType = (id) => {
        navigate(`/productdetails/${id}`)
    }
    return (
        <>
            {id && (
                <>
                    <div className="d-lg-flex justify-content-center">
                        <Card
                            style={{ width: '218px', cursor: countInStock > 0 ? 'pointer' : 'not-allowed', opacity: countInStock > 0 ? 1 : 0.6 }}
                            className='d-flex'
                            onClick={countInStock > 0 ? () => handleDetails(id) : null}
                        >
                            <Card.Img variant="top" src={image} style={{ height: '156px' }} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>Giá: {convertPrice(price)}</Card.Text>
                                <p className="card-rating">{rating} ⭐ | Đã bán {selled || 2}</p>
                                <p>Số lượng: {countInStock}</p>
                                <Card.Text>Mô tả: {description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div >
                    {countInStock === 0 && <p style={{ color: 'red', fontWeight: 'bold', margin:'5px 20px' }}>Sản phẩm đã hết hàng</p>}
                </>
            )}


            {
                productTypeData && (
                    <div className="d-lg-flex justify-content-center">
                        <Card style={{ width: '218px' }} className='d-flex' >
                            <Card.Img variant="top" src={productTypeData.image} style={{ height: '156px' }} alt='Toos' onClick={() => handleDetailType(productTypeData._id)} />
                            <Card.Body>
                                <Card.Title>{productTypeData.name}</Card.Title>
                                <Card.Text> Giá: {convertPrice(productTypeData.price)}</Card.Text>
                                <p className="card-rating">{productTypeData.rating} ⭐ | Đã bán 30% +</p>
                                <Card.Text>
                                    Mô tả: {productTypeData.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                )
            }

        </>
    )
}

export default CardCommponent
