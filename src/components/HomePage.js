import React, { useState, useEffect, useRef } from 'react';

import Axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Clipboard from 'react-clipboard.js';

import Header from './Header'

const PAGE_SIZE = 24;

function formatVolume(volume) {
    if (volume >= 10000) {
        return `${(volume / 10000).toFixed(0)}W`
    }
    if (volume >= 1000) {
        return `${(volume / 1000).toFixed(0)}K`
    }
    return volume;
}

function Nav(props) {
    let materialKinds = ['普通|好券直播/好券直播', '普通|大额券/大额券', '普通|高佣榜/热销', '普通|品牌券/品牌券', '普通|有好货/有好货', '普通|潮流范/潮流范', '普通|特惠/特惠']

    return (
        <ul className="nav">
            <li className="nav-item">
                <button className="nav-link text-muted btn btn-link" onClick={() => { props.setMaterialKind('') }} >全部</button>
            </li>
            {materialKinds.map((mKind, idx) =>
                <li className={`nav-item  ${idx >=2 ? 'd-none d-lg-block d-xl-block' : ''}`} key={mKind}>
                    <button className="nav-link text-muted btn btn-link" onClick={() => { props.setMaterialKind(mKind.split('/')[0]) }} >{mKind.split('/')[1]}</button>
                </li>
            )}
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
                <a target="_blank" href={itemAttrs.referral_url}>
                    <picture>
                        <source srcSet={webpUrl} type="image/webp" />
                        <source srcSet={jpgUrl} type="image/jpeg" />
                        <img src={jpgUrl} className="card-img-top" alt={itemAttrs.title}></img>
                    </picture>
                </a>
                <div className="card-body p-2 small">
                    <div className="mw-100 text-break text-truncate"><a target="_blank" className="text-dark" href={itemAttrs.referral_url}>{itemAttrs.title}</a>
                    </div>
                    <div className="text-dark d-flex justify-content-between"><span>¥<span className="font-weight-bold">{itemAttrs.price}</span> <span className="text-muted">¥<del>{itemAttrs.orig_price}</del></span>
                    </span><span className="text-muted">已售 {formatVolume(itemAttrs.volume)}</span></div>
                    <Clipboard component="button" className="btn btn-primary btn-sm w-100 px-1" data-clipboard-text={itemAttrs.referral_word}>{itemAttrs.referral_word || '暂无口令'}</Clipboard>
                </div>
            </div>
        </div>
    );
}

function ProductList(props) {
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    // https://zh-hans.reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
    const prevItemIdsRef = useRef([]);
    function getItems(materialKind, offset) {
        let prevItemIds = prevItemIdsRef.current;
        Axios.get('/api/items', { params: { item_ids: prevItemIds.join(','), material_kind: materialKind, offset: offset } }).then(resp => {
            prevItemIdsRef.current = resp.data.data.map(a => a.id);
            if (resp.data.data.length < PAGE_SIZE) {
                setHasMore(false);
            }
            setItems(i => [...i, ...resp.data.data]);
        });
    }
    useEffect(() => {
        prevItemIdsRef.current = [];
        getItems(props.materialKind, 0);
    }, [props.materialKind]);
    return (
        <InfiniteScroll
            dataLength={items.length}
            next={() => { getItems(props.materialKind, items.length) }}
            hasMore={hasMore}
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
    const [materialKind, setMaterialKind] = useState('');

    return (
        <main>
            <div className="container">
                <Nav setMaterialKind={setMaterialKind} />
            </div>
            <div className="bg-light">
                <div className="container">
                    <ProductList materialKind={materialKind} key={materialKind} />
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