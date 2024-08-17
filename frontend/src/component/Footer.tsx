
const Footer = () => {
    const footers = ["Help",
        "Status",
        "About",
        "Career",
        "Press",
        "Blog",
        "Privacy",
        "Terms",
        "Text to speech",
        "Teams"]
    return (
        <div className="flex justify-center     ">
            {footers.map((f,index)=>{
                return <a key={index} className="ml-[15px] font-extralight cursor-pointer hover:underline transition ease-linear delay-150 duration-100">{f}</a>
            })}
        </div>
    )
}

export default Footer
