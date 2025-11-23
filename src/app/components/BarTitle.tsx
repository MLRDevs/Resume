// Alex Miller
// Title with horizontal bars


export default function BarTitle({ title }: { title:string }) {

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="p-1 rounded-xl w-3/4 bg-neon-teal/40 m-5"></div>
            <p className="font-bold text-neon-teal">{title}</p>
            <div className="p-1 rounded-xl w-3/4 bg-neon-teal/40 m-5"></div>
        </div>
    )
}


