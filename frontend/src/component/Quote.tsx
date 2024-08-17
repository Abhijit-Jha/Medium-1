const Quote = ({quote,author}:{quote:string,author:string}) => {
  return (
    <div className='w-1/2 flex justify-center items-center h-screen bg-slate-200'>
      <div className="text-2xl">
      {quote}
      <div className="flex justify-end text-xl font-bold">
      -{author}
      </div>
      </div>
    </div>
  )
}

export default Quote
