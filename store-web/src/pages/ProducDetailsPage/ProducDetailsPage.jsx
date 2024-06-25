import React from 'react'
import ProductDetailComponent from '../../components/ProductDetailComponent/ProductDetailComponent'
import { useNavigate, useParams } from 'react-router-dom'

const ProducDetailsPage = () => {
  const param = useParams()
  const { id } = param
  return (
    <div style={{backgroundColor:'rgb(222 222 222)' ,height:'100vh',display:'flex', justifyContent:'center'}}>
      <ProductDetailComponent idProduct={id} />
    </div>
  )
}

export default ProducDetailsPage
