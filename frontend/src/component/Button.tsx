const Button = ({ text, plpr, onclick }: { text: string; plpr: number; onclick: (e:any)=>void }) => {

  return (
    <div>
      <button
        className="bg-black rounded-full text-white p-2 text-center w-auto"
        style={{ paddingLeft: `${plpr+10}px`, paddingRight: `${plpr+10}px`}}
        onClick={onclick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
