import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner, Categories } from '../components';

const Home = ({ products, promotionData }) => (
  <div>

    <div className="hero-banner-container">
      <div><Categories/></div>
      <HeroBanner/>
    </div>
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>There are many variations </p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={promotionData && promotionData[0]} />
  </div>
);

export const getStaticProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  // const bannerQuery = '*[_type == "banner"]';
  // const banners = await client.fetch(bannerQuery);

  const promotionQuery = '*[_type == "promotion"]';
  const promotionData = await client.fetch(promotionQuery);

  return {
    props: { products, promotionData }
  }
}

export default Home;