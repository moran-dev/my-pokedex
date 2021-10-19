import React from 'react'

const FormattedPrice = props => {
    return <div>{`R$ ${Number(props.price).toFixed(2).replace('.', ',')}`}</div>
}

export default FormattedPrice