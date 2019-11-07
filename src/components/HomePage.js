import React, { useState, useEffect, useRef } from 'react';

import Axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Clipboard from 'react-clipboard.js';

import Header from './Header'

function formatVolume(volume) {
    if (volume >= 10000) {
        return `${(volume / 10000).toFixed(0)}W`
    }
    if (volume >= 1000) {
        return `${(volume / 1000).toFixed(0)}K`
    }
    return volume;
}

function Nav() {
    return (
        <ul className="nav d-flex justify-content-between">
            <li className="nav-item ">
                <a className="nav-link text-muted" href="/">大额券</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-muted" href="/">限量抢</a>
            </li>
            <li className="nav-item">
                <a className="nav-link pr-0 text-muted" href="/">天猫国际精选</a>
            </li>
        </ul>
    );
};

function Product(props) {
    let itemAttrs = props.item.attributes;
    let jpgUrl = `${itemAttrs.pict_url}_300x300Q90.jpg`;
    let webpUrl = `${itemAttrs.pict_url}_300x300_.webp`;
    return (
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-1">
            <div className="card shadow-sm">
                <a href={itemAttrs.referral_url}>
                    <picture>
                        <source srcSet={webpUrl} type="image/webp" />
                        <source srcSet={jpgUrl} type="image/jpeg" />
                        <img src={jpgUrl} className="card-img-top" alt={itemAttrs.title}></img>
                    </picture>
                </a>
                <div className="card-body p-2 small">
                    <div className="mw-100 text-break text-truncate"><a className="text-dark" href={itemAttrs.referral_url}>{itemAttrs.title}</a>
                    </div>
                    <div className="text-dark d-flex justify-content-between"><span>¥<span className="font-weight-bold">{itemAttrs.price}</span> <span className="text-muted">¥<del>{itemAttrs.orig_price}</del></span>
                    </span><span className="text-muted">已售 {formatVolume(itemAttrs.volume)}</span></div>
                    <Clipboard component="button" className="btn btn-primary btn-sm w-100 px-1" data-clipboard-text={itemAttrs.referral_word}>{itemAttrs.referral_word||'暂无口令'}</Clipboard>
                </div>
            </div>
        </div>
    );
}

function ProductList() {
    const [items, setItems] = useState([]);
    // https://zh-hans.reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
    const prevItemIdsRef = useRef([]);
    function getItems() {
        let prevItemIds = prevItemIdsRef.current;
        Axios.get('/api/items', { params: { item_ids: prevItemIds.join(',') } }).then(resp => {
            prevItemIdsRef.current = resp.data.data.map(a => a.id);
            setItems(i => [...i, ...resp.data.data]);
        });
    }
    useEffect(() => {
        getItems()
    }, [])
    return (
        <InfiniteScroll
            dataLength={items.length}
            next={() => { getItems() }}
            hasMore={true}
            loader={<div className=" text-center"><div className="spinner-border"><p className="sr-only text-center">加载中...</p></div></div>}
            endMessage={
                <p className="text-center">没有了!</p>
            }>
            <div className="d-flex align-content-start flex-wrap py-1">
                {items.map((item) => <Product key={item.id} item={item} />)}
            </div>
        </InfiniteScroll >
    );
}

function Main() {
    return (
        <main>
            {/* <div className="container">
                <Nav />
            </div> */}
            <div className="bg-light">
                <div className="container">
                    <ProductList />
                </div>
            </div>
        </main>
    );
};

function HomePage() {
    return (
        <div>
            <Header />
            <Main />
        </div>
    );
}

export default HomePage;