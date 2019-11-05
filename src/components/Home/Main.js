import React from 'react';

function Nav() {
    return (
        <ul className="nav d-flex justify-content-between">
            <li className="nav-item ">
                <a className="nav-link text-muted" href="#">大额券</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-muted" href="#">限量抢</a>
            </li>
            <li className="nav-item">
                <a className="nav-link pr-0 text-muted" href="#">天猫国际精选</a>
            </li>
        </ul>
    );
};

function Product() {
    return (
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-1">
            <div className="card shadow-sm">
                <a href="#">
                    <picture>
                        <source srcSet="//img.alicdn.com/bao/uploaded/i4/2024444814/O1CN01vn5Nqa1lQrAhZY2mZ_!!0-item_pic.jpg_300x300_.webp" type="image/webp" />
                        <source srcSet="//img.alicdn.com/bao/uploaded/i4/2024444814/O1CN01vn5Nqa1lQrAhZY2mZ_!!0-item_pic.jpg_300x300Q90.jpg" type="image/jpeg" />
                        <img src="//img.alicdn.com/bao/uploaded/i4/2024444814/O1CN01vn5Nqa1lQrAhZY2mZ_!!0-item_pic.jpg_300x300Q90.jpg" className="card-img-top"></img>
                    </picture>
                </a>
                <div className="card-body p-2 small">
                    <div className="mw-100 text-break text-truncate"><a className="text-dark" href="https://mo.m.taobao.com/union/daequan2c_2bd2b5f?pid=mm_0_0_0&show_tab=0">ANDORHEAL澜笛若慕 小棕瓶礼盒装6件套</a>
                    </div>
                    <div className="text-dark d-flex justify-content-between"><span>¥<span className="font-weight-bold">10.0</span> <span className="text-muted">¥<del>20.0</del></span>
                    </span><span className="text-muted">已售 54321</span></div>
                    <button className="btn btn-secondary btn-sm w-100">$pmC2YtmLdig$</button>
                </div>
            </div>
        </div>
    );
}

function ProductList() {
    let items = Array(10).fill(1).map((a, i) => a + i);
    return (
        <div className="d-flex align-content-start flex-wrap py-1">
            {items.map((item) => <Product key={item} />)}
        </div>
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