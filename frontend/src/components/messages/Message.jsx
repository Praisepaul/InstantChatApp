const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img alt = "Messages" src={"/bg.webp"} />
            </div>
        </div>

        <div className={`chat-bubble text-black bg-blue-500`}>Hey! What's up?</div>
        <div className='chat-footer opacity-50 text-black text-xs flex gap-1 items-center'>12:43</div>
    </div>
  );
};

export default Message