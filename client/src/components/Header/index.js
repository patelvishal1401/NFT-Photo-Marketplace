import React from 'react';
import styles from './header.module.scss';
import getWeb3, { getGanacheWeb3, Web3 } from "../../utils/getWeb3";


const Header = () => (
    <div className={styles.header}>
        <nav id="menu" className="menu">
          <ul>
            <li><a href="/" className={styles.link}> HOME </a></li>

            <li><a href="/publish" className={styles.link}> Publish Photo NFT </a></li>

            <li><a href="/my-photos" className={styles.link}> My Photos</a></li>

            {process.env.NODE_ENV !== 'photo_marketplace' && (
              <li><a href="/photo-marketplace" className={styles.link}> Photo MarketPlace</a></li>
            )}
          </ul>
        <p className={styles.notice}>  Use Rinkeby Network For Transection</p>
        </nav>
    </div>
)

export default Header;
