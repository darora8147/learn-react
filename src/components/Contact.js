const Contact = () => {
    return (
        <div className="grid w-96">
            <h1 className="font-bold text-2xl p-4 m-4">Contact Us Page</h1>
            <div className="flex">
            <input type="text" className="m-2 p-2 w-60 border border-black rounded-md" placeholder="Name..."></input>
            <button type="submit" className="m-2 p-2 w-28 border border-black bg-green-300 rounded-md">Submit</button>
            </div>
            <input type="text" className="m-2 p-2 h-72 border border-black rounded-md" placeholder="Message..."></input>
         </div>   
        )
}

export default Contact;