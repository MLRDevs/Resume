// Alex Miller
// Project container for each project

type ProjectCardProps = {
    title: string,
    description: string,
    link: string,
}

const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
    return (
        <div className="px-10 py-10">
            <h2 className="text-2xl font-semibold border-l-7 border-blue-500 pl-4 mb-4">{title}</h2>
            <p className="text-lg text-gray-500 md:max-w-1/2 py-5">{description}</p>
            <a href={link} target="_blank" className="underline">View on Git</a>
        </div>
    );
};

export default ProjectCard;