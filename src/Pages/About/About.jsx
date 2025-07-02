import { CgProfile } from "react-icons/cg";

const About = () => {
    const divStyle = {
        backgroundColor: '#2c2d2f',
    };
    return (
        <div style={divStyle} className=" text-white p-16" >
            <div className="flex justify-between">
                <h2 className="text-4xl text-sky-600 font-bold">About Me.</h2>
                <CgProfile className="text-4xl text-sky-600" />
            </div>
            <hr className="mt-2" />
            <div className="grid grid-cols-3 mt-8">
                <div className="col-span-2">
                    <h2 className="text-2xl font-bold">MERN & Next.JS Developer</h2>
                    <div className="mt-3 pr-5 space-y-3">
                        <p>Greetings, I am a passionate web developer hailing from the vibrant landscape of Bangladesh.</p>
                        <p>My journey into the world of web development began with a spark of curiosity and a desire to shape the digital world. Today, I specialize in MERN stack development, React.js, Next.js, and I bring a unique blend of skills and creativity to every project I undertake.</p>
                        <p>I believe in the power of collaboration and am always excited to work with individuals and businesses that share a vision for innovative digital solutions. Whether it is creating a stunning e-commerce platform, developing a dynamic web application, or enhancing user experiences, I'm up for the challenge.</p>
                        <p>If you are looking for a skilled MERN stack developer with a creative edge and a hunger for innovation, let is connect. Together, we can turn your digital dreams into reality.</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold">Personal Information</h2>
                    <div className="mt-3 space-y-1">
                        <p className="text-lg"><span className="font-bold underline decoration-sky-600 decoration-2">Name</span> <span className="font-semibold">:</span> Zesan Ahmed</p>
                        <p className="text-lg"><span className="font-bold underline decoration-sky-600 decoration-2">Age</span> <span className="font-semibold">:</span> 22</p>
                        <p className="text-lg"><span className="font-bold underline decoration-sky-600 decoration-2">Residence</span> <span className="font-semibold">: </span>
                            Dhaka, Bangladesh</p>
                        <p className="text-lg"><span className="font-bold underline decoration-sky-600 decoration-2">Address</span> <span className="font-semibold">:</span> Faridpur Sadar, Faridpur</p>
                        <p className="text-lg"><span className="font-bold underline decoration-sky-600 decoration-2">Email</span> <span className="font-semibold">:</span> zesanahmed69@gmail.com</p>
                        <p className="text-lg"><span className="font-bold underline decoration-sky-600 decoration-2">Phone</span> <span className="font-semibold">:</span> (+880) 1954500994</p>
                        <p className="text-lg"><span className="font-bold underline decoration-sky-600 decoration-2">Whatsapp</span> <span className="font-semibold">:</span> (+880) 1521546784</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;

