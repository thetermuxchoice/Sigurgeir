import React from 'react';
import Layout from '../components/Layout/Layout';
import { useFetch } from '../customHooks/useFetch';
import { Card } from '../components/Card.jsx/Card';
import styles from '../styles/products.module.css';

export const Products = () => {
    const {data, isLoading, error} = useFetch('https://api.escuelajs.co/api/v1/products');

  return (
    <>
        <Layout>
          <div className={styles.container}>
            {
              isLoading ?
              <div>
                Loading content...
              </div>
              :
              error ?
              <div>
                The was an error...
              </div>
              :
              data?.map((product, index)=>{
                return <Card 
                key={product.title} 
                title={product.title}
                price={product.price}
                images={product.images}
                />
              })
            }
          </div>
        </Layout>  
    </>
  );
};
