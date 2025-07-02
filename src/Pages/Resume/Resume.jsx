import { PiUserList } from "react-icons/pi";


const Resume = () => {
  const divStyle = {
    backgroundColor: '#2c2d2f',
};
    return (
        <div style={divStyle} className=" text-white p-16" >
            <div className="flex justify-between">
                <h2 className="text-4xl text-sky-600 font-bold">My Resume.</h2>
                <PiUserList className="text-4xl text-sky-600" />
            </div>
            <hr className="mt-2" />
            <div className="flex flex-col justify-center items-center my-16">
            <figure><img src="https://i.ibb.co/dttT03w/resume.png" alt="" className="" /></figure>

<a
href={'https://drive.google.com/uc?export=download&id=1M29GUzmQocybWxvXAut9cW7z55Vnu2so'}
download
className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded"
>
Download Resume
</a> 
            </div>
        </div >
    );
};

export default Resume;

 