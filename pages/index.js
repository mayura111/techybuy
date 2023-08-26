import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner, Categories } from '../components';

const Home = ({ products, banners, promotionData }) => (
  <div>

    <div className="hero-banner-container">
      <div><Categories/></div>
      <HeroBanner banner={banners && banners[0]} />
    </div>
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
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

  const bannerQuery = '*[_type == "banner"]';
  const banners = await client.fetch(bannerQuery);

  const promotionQuery = '*[_type == "promotion"]';
  const promotionData = await client.fetch(promotionQuery);

  return {
    props: { products, banners, promotionData }
  }
}

export default Home;