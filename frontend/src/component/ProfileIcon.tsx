

const ProfileIcon = ({name}:{name:string}) => {
    
  return (
    <div className="rounded-full bg-green-700 h-8 w-8 overflow-hidden flex items-center justify-center">
        <span className="">{name[0]}</span>
    </div>
  )
}

export default ProfileIcon
