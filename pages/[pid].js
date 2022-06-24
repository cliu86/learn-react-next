import { Fragment } from "react"

const ProductDetail = () => {
  return (
    <Fragment>
      <h1>Title</h1>
      <p>DESC</p>
    </Fragment>
  )
}

export async function getStaticPaths(context){
  return {
    paths: [
      {param: {pid: 'p1'}},
      {param: {pid: 'p2'}},
      {param: {pid: 'p3'}},
    ]
  }
}

export default ProductDetail