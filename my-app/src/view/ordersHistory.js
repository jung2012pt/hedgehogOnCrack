import React from 'react';
import styles from '../css/ordersHistory.module.css';

export default function OrdersHistory() {
    return (
        <div>
            <span className={styles.title}>My Orders</span>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <span>Order ID:</span>
                    <span className={styles.ID}>&nbsp;QUBZF1</span>
                    <span className={styles.status}>Delivered</span>
                </div>
                <div className={styles.cardBody}>
                    <div className={styles.info}><img className={styles.pic} src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/bottle_beach.png?v=11784267851598469514" alt="" /></div>
                    <div className={styles.info}><span>Beach</span></div>
                    <div className={styles.info}>
                        <span className={styles.Date}>Purchase date</span>
                        <span className={styles.Date}>11 May 2023</span>
                    </div>
                    <div className={styles.info1}><span className={styles.price}>$39.90</span></div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <span>Order ID:</span>
                    <span className={styles.ID}>&nbsp;ZXCQB8</span>
                    <span className={styles.status}>Delivered</span>
                </div>
                <div className={styles.cardBody}>
                    <div className={styles.info}><img className={styles.pic} src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/savanna_OK.png?v=4783820813181844557" alt="" /></div>
                    <div className={styles.info}><span>Savanna</span></div>
                    <div className={styles.info}>
                        <span className={styles.Date}>Purchase date</span>
                        <span className={styles.Date}>9 May 2023</span>
                    </div>
                    <div className={styles.info1}><span className={styles.price}>$39.90</span></div>
                </div>
            </div>
        </div>
    );
}
