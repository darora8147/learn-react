import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
    constructor(props){
        super(props);
        // console.log("Parent Constructor Called");
    }

    componentDidMount() {
        // console.log("Parent Component Did Mount Called");
    }

    render() {
        // console.log("Parent Render Called");
        return (
            <div className="p-4 m-4 bg-gray-200 w-[250px] rounded-lg shadow-md">
                <h1 className="text-xl font-bold">About Us</h1>
                <p className="p-4 font-light">This is a food delivery app built using React.</p>
                <UserClass name={"First Child"} location={"Pune"} />
            </div>
        );
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <p>This is a food delivery app built using React.</p>
//             <UserClass name={"Divyam Arora (Class)"} /> 
//         </div>
//     );
// }

export default About;