const PremiumShopCard = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mt-16">
      <figure>
        <img
          className="h-96 w-96"
          src="https://i.ibb.co/D14hCkD/localhost-5174.png"
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">Premium Shop</h2>

        <p>
          <ul>
            <li className="">
              <p className="text-sky-400">
                This is an e-commerce website for selling phones, laptops,
                books, etc.
              </p>
            </li>
            <li>
              <span className="font-bold">Technologies:</span> React, Node.js,
              Express, MongoDB
            </li>
            <li>
              <span className="font-bold">Features:</span> User authentication,
              Product management
            </li>
            <li>
              <span className="font-bold">Highlights:</span> Responsive design,
              Admin dashboard, User-friendly interface
            </li>
            <li>
              <p>
                <span className="font-bold">Description:</span> A platform for
                users to buy and sell products easily.
              </p>
            </li>
          </ul>
        </p>
        <div className="card-actions justify-end">
          <a
            href="https://premium-shop.vercel.app/"
            className="btn bg-sky-600 hover:bg-sky-700 text-white "
          >
            Visit
          </a>
          <a
            href="https://github.com/zesanahmed/premium-shop"
            className="btn bg-sky-600 hover:bg-sky-700 text-white "
          >
            Client-GitHub
          </a>
          <a
            href="https://github.com/zesanahmed/premium-shop-server"
            className="btn bg-sky-600 hover:bg-sky-700 text-white "
          >
            Server-GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default PremiumShopCard;
