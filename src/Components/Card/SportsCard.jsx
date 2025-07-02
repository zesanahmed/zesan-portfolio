const SportsCard = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-96 w-96"
          src="https://i.ibb.co/XJyK7GM/sports-genius-hub-web-app.png"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">Sports Genius Hub</h2>

        <p>
          <ul className="">
            <li>
              <p className="text-sky-400">This is a sports learning website.</p>
            </li>
            <li>
              <span className="font-bold">Technologies:</span> React, Node.js,
              Express, MongoDB
            </li>
            <li>
              <span className="font-bold">Features:</span> User authentication,
              Course management
            </li>
            <li>
              <span className="font-bold">Highlights:</span> Responsive design,
              Admin dashboard, User-friendly interface
            </li>
            <li>
              <p>
                <span className="font-bold">Description:</span> A platform for
                sports enthusiasts to learn and improve their skills.
              </p>
            </li>
          </ul>
        </p>

        <div className="card-actions justify-end">
          <a
            href="https://sports-genius-hub.web.app/"
            className="btn bg-sky-600 hover:bg-sky-700 text-white "
          >
            Visit
          </a>
          <a
            href="https://github.com/zesanahmed/Sports-genius-hub-client"
            className="btn bg-sky-600 hover:bg-sky-700 text-white "
          >
            Client-GitHub
          </a>
          <a
            href="https://github.com/zesanahmed/Sports-genius-hub-server"
            className="btn bg-sky-600 hover:bg-sky-700 text-white "
          >
            Server-GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default SportsCard;
