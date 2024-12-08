import { DiCss3, DiHtml5 } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandFirebase } from "react-icons/tb";


const Technologies = () => {
    return (
        <div className="pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="p-4">
                    <DiHtml5 className="text-7xl text-orange-600"></DiHtml5>
                </div>
                <div className="p-4">
                    <DiCss3 className="text-7xl text-blue-400"></DiCss3>
                </div>
                <div className="p-4">
                   <RiTailwindCssFill className="text-7xl text-blue-600"></RiTailwindCssFill>
                </div>
                <div>
                    <RiReactjsLine className="text-7xl text-cyan-500"></RiReactjsLine>
                </div>
                <div className="p-4">
                   <TbBrandFirebase className="text-7xl text-orange-400"></TbBrandFirebase>
                </div>
                <div className="p-4">
                    <FaNodeJs className="text-7xl text-green-500"></FaNodeJs>
                </div>
                <div className="p-4">
                    <SiMongodb className="text-7xl text-green-600" />
                </div>
                <div className="p-4">
                    <SiExpress className="text-7xl text-white"></SiExpress>
                </div>
            </div>
        </div>
    );
};

export default Technologies;