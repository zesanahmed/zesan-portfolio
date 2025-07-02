const RannaGhorCard = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mt-16">
      <figure>
        <img
          className="h-96 w-96"
          src="https://i.ibb.co/XX4RWx4/banglar-rannaghor-5de0c-web-app-main-Layout.png"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">Banglar RannaGhor</h2>
        <p>
          <ul>
            <li>
              <p className="text-sky-400">
                This website is about Bangladeshi chefs and their special
                recipes.
              </p>
            </li>
            <li>
              <span className="font-bold">Technologies:</span> React, Node.js,
              Express, MongoDB
            </li>
            <li>
              <span className="font-bold">Features:</span> User authentication,
              Recipe management, Admin dashboard
            </li>
            <li>
              <span className="font-bold">Highlights:</span> Responsive design,
              User-friendly interface, Recipe sharing
            </li>
            <li>
              <p>
                <span className="font-bold">Description:</span> A platform for
                users to explore and share Bangladeshi recipes.
              </p>
            </li>
          </ul>
        </p>
        <div className="card-actions justify-end">
          <a
            href="https://banglar-rannaghor-5de0c.web.app/"
            className="btn bg-sky-600 hover:bg-sky-700 text-white "
          >
            Visit
          </a>
          <a
            href="https://github.com/zesanahmed/Banglar-Rannaghor-Client"
            className="btn bg-sky-600 hover:bg-sky-700 text-white "
          >
            Client-GitHub
          </a>
          <a
            href="https://github.com/zesanahmed/Banglar-RannaGhor-Server"
            className="btn bg-sky-600 hover:bg-sky-700 text-white "
          >
            Server-GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default RannaGhorCard;
