import React, { useState, useEffect, useRef } from 'react';

import Axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

function formatVolume(volume) {
    if (volume >= 10000) {
        return `${(volume/10000).toFixed(0)}W`
    }
    if (volume >= 1000) {
        return `${(volume/1000).toFixed(0)}K`
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
                    <button className="btn btn-primary btn-sm w-100">{itemAttrs.referral_word}</button>
                </div>
            </div>
        </div>
    );
}

function ProductList() {
    const [items, setItems] = useState([]);
    const [pageNo, setPageNo] = useState(0);
    // https://zh-hans.reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
    const prevItemIdsRef = useRef([]);
    useEffect(() => {
        let prevItemIds = prevItemIdsRef.current;
        Axios.get('http://192.168.2.181:3000/api/items', {params: {ids: prevItemIds.join(',')}}).then(resp => {
            prevItemIdsRef.current = resp.data.data.map(a => a.id);
            setItems(i => [...i, ...resp.data.data]);
        });
    }, [pageNo]);
    return (
        <InfiniteScroll
            dataLength={items.length}
            next={() => { setPageNo(a => a + 1) }}
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
            <div className="container">
                <Nav />
            </div>
            <div className="bg-light">
                <div className="container">
                    <ProductList />
                </div>
            </div>
        </main>
    );
};

export default Main;