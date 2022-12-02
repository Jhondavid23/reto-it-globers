import React, { Component } from 'react'
import {connect} from 'react-redux'
import Product from "../Products/Product"
import contanerStyle from './style/containerProducts.module.css';

export class ContainerProducts extends Component {
  render() {
    return (
      <div className={contanerStyle.container}>
        {this.props.products && this.props.products.map((p) =>{
            return  <div key={p.id} className={contanerStyle.divProduct}>
                <Product products = {p}/>
            </div>
        })}
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
    return {
        products : state.products.products
    }
}

export default connect (mapStateToProps)(ContainerProducts)