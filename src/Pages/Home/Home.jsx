import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div className="relative">

            <img className="w-screen h-screen" src="https://img.freepik.com/premium-photo/young-male-developer-is-programming-code-script-late-night-with-beautiful-city-lights_197602-1828.jpg?size=626&ext=jpg&ga=GA1.1.1189830713.1677247708&semt=ais" alt="" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h2 className="text-7xl text-white font-semibold">Zesan <span className="text-6xl text-sky-400 font-bold">Ahmed</span></h2>
                <div className='flex gap-3'>
                    <p className="text-2xl text-white font-bold">I am </p>
                    <p className="text-4xl underline decoration-sky-400 text-white font-bold"><Typewriter
                        options={{
                            strings: ['Web Developer', 'MERN Stack Developer', 'React Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></p>
                </div>

            </div>
        </div>
    );
};

export default Home;