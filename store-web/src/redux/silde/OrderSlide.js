import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    orderItems: [],
    selecedItemOrder: [],
    shippingAddress: {
    },
    paymentMethod: '',
    itemsPrice: 0,
    shippingPrice: 0,
    taxiPrice: 0,
    totalPrice: 0,
    user: '',
    isPaid: false,
    paidAt: '',
    isDelivered: false,
    deliverAt: '',
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrderProduct: (state, action) => {
            const { orderItems } = action.payload;
            const itemOrder = state.orderItems.find((item) => item.product === orderItems.product);
            if (itemOrder) {
                itemOrder.amount += orderItems.amount;
            } else {
                state.orderItems.push(orderItems);
            }
        },
        increaseAmount: (state, action) => {
            const { id } = action.payload
            const itemOder = state.orderItems.find((item) => item.product === id)
            const orderItemSelected = state.selecedItemOrder.find((item) => item.product === id)
            itemOder.amount++
            if (orderItemSelected) {
                orderItemSelected.amount++
            }
        },
        descreaseAmount: (state, action) => {
            const { id } = action.payload
            const itemOder = state.orderItems.find((item) => item.product === id)
            const orderItemSelected = state.selecedItemOrder.find((item) => item.product === id)
            itemOder.amount--
            if (orderItemSelected) {
                orderItemSelected.amount--
            }
        },
        RemoveCart: (state, action) => {
            const { idProduc } = action.payload
            const itemOder = state.orderItems.filter((item) => item.product !== idProduc)
            const orderItemSelected = state.selecedItemOrder.filter((item) => item.product !== idProduc)
            state.orderItems = itemOder
            state.selecedItemOrder = orderItemSelected
        },
        RemoveAllCart: (state, action) => {
            const { Ids } = action.payload
            const itemOrder = state.orderItems.filter((item => !Ids.includes(item.product)))
            state.orderItems = itemOrder
            state.selecedItemOrder = itemOrder
        },
        selecedItemOrder: (state, action) => {
            const { listChecked } = action.payload
            const slectedCheked = []
            state.orderItems.forEach(order => {
                if (listChecked.includes(order.product)) {
                    slectedCheked.push(order)
                }
            })
            state.selecedItemOrder = slectedCheked
        }
    }
})


export const { addOrderProduct, increaseAmount, descreaseAmount, RemoveCart, RemoveAllCart, selecedItemOrder } = orderSlice.actions

export default orderSlice.reducer