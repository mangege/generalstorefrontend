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
                <a href="#"><img src="https://gw.alicdn.com/bao/uploaded/O1CN01OCoixR1tVS68W5NOy_!!2-item_pic.png_240x240.jpg_.webp" className="card-img-top"></img></a>
                <div className="card-body p-2 small">
                    <div class="mw-100 text-break text-truncate"><a className="text-dark" href="https://mo.m.taobao.com/union/daequan2c_2bd2b5f?pid=mm_0_0_0&show_tab=0">ANDORHEAL澜笛若慕 小棕瓶礼盒装6件套</a>
                    </div>
                    <div className="text-dark d-flex justify-content-between"><span>¥<span className="font-weight-bold">10.0</span> <span class="text-muted">¥<del>20.0</del></span>
                    </span><span className="text-muted">已售 54321</span></div>
                    <div className="text-center">
                        <button className="btn btn-secondary btn-sm p-1">$pmC2YtmLdig$</button>
                    </div>
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