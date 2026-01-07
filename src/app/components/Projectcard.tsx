// Alex Miller
// Project container for each project

type ProjectCardProps = {
    title: string,
    list: string[],
    description: string,
    link?: string,
}

const ProjectCard = ({ title, list, description, link }: ProjectCardProps) => {
    return (
        <div>
            <div className="flex flex-col gap-5 items-center">
                <div className="text-center bg-gradient-to-r from-pale-green to-neon-teal font-bold text-xl text-black p-5 rounded-xl">
                    <h3>{title}</h3>
                    {link
                        ? <h3><a href={link} target="_blank" className="text-blue-500 hover:text-navy-blue underline">check it out</a></h3>
                        : <></>
                    }
                </div>
                <div className="flex flex-col gap-5 md:flex-row md:gap-10 justify-center text-lg py-10">
                    <div className="font-normal text-ice-white text-lg md:w-1/2">
                        <h3 className="text-2xl font-bold text-neon-teal text-center">Basic Description</h3>
                        <div className="font-normal py-5">
                            {description}
                        </div>
                    </div>
                    <div className="font-normal text-ice-white text-lg md:w-1/2">
                        <h3 className="text-2xl font-bold text-neon-teal text-center">Fun Facts</h3>
                        <ul className="py-5 list-disc">
                            {list.map((item:string) => (
                                <li key={item}>{item}</li>
                            ))}         
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;