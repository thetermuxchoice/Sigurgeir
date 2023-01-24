import React from 'react';
import { HiOutlineShoppingCart } from "react-icons/hi";
import styles from '../../styles/card.module.css';

const prueba = {
    id: 30,
    title: "Oriental Fresh Shirt",
    price: 189,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nemo, quos fugit, qui ad asperiores doloribus dicta laboriosam recusandae at consequuntur quo voluptatibus, exercitationem iste. Natus unde vitae perferendis mollitia.",
    images: [
    "https://api.lorem.space/image/shoes?w=640&h=480&r=1526",
    "https://api.lorem.space/image/shoes?w=640&h=480&r=5630",
    "https://api.lorem.space/image/shoes?w=640&h=480&r=5570"
    ],
    creationAt: "2023-01-23T06:26:35.000Z",
    updatedAt: "2023-01-23T16:43:42.000Z",
    category: {
    id: 4,
    name: "Shoes",
    image: "https://api.lorem.space/image/shoes?w=640&h=480&r=5050",
    creationAt: "2023-01-23T06:26:35.000Z",
    updatedAt: "2023-01-23T06:26:35.000Z"
    }
    }
  

export const Card = ({id, title, price, description, images, category}) => {
  return (
    <div className={styles.card}>
        <div className={styles.images}>
            <img className={styles.image} alt={title} src={images[0]}/>
        </div>
        <div className={styles.description}>
            <div className={styles.title}>
                <div className={styles.product}>
                    {title}
                </div>
                <div className={styles.price}>
                    {`${price}$`}
                </div>                  
            </div>
            <div className={styles.info}>
                <div className={styles.size}>
                    <div className={styles.sizeTitle}>
                        Sizes:
                    </div>
                    <div className={styles.sizes}>
                        <div className={styles.item}>
                            S
                        </div>
                        <div className={styles.item}>
                            M
                        </div>
                        <div className={styles.item}>
                            L
                        </div> 
                        <div className={styles.item}>
                            XL
                        </div>       
                    </div>
                </div>
                <div className={styles.colors}>
                    <div className={styles.sizes}>
                        <div className={styles.color} style={{backgroundColor:'#00ffff'}}>
                        </div>
                        <div className={styles.color} style={{backgroundColor:'#ff0000'}}>
                        </div>
                        <div className={styles.color} style={{backgroundColor:'#ffa200'}}>
                        </div> 
                        <div className={styles.color} style={{backgroundColor:'#188500'}}>
                        </div>       
                    </div>
                </div>
            </div>
            <div className={styles.buttons}>
                <button className='button'>
                    Add to cart!
                    <HiOutlineShoppingCart 
                        style={
                            {marginBottom: '-3px',
                            marginLeft:'5px'}
                            }
                    />
                </button>
                <button className='button'>
                    Description
                </button>
            </div>
        </div>
    </div>
  );
};
