import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import Bground from '../Image/backgrd.jpg'
import "./Homestyle.css"
const Home = () => {
  return (
    <Layout>
          <div className="home" style={{ backgroundImage: `url(${Bground})` }}>
        <div className="headercontain">
            <h1>Buy Suits</h1>
            <p>Best quality suits in the world</p>
            <Link to="/suits">
            <button>
                Order Now
            </button>
            </Link>
        </div>
       </div>
    </Layout>
  )
}

export default Home
