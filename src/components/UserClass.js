import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name: "Dummy Name",
                location: "Dummy Location"
            }
        }
        console.log(this.props.name + " Constructor Called");
    }

    async componentDidMount() {
        console.log(this.props.name + " Component Did Mount Called");
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        this.setState({ userInfo: json });
    }

    componentDidUpdate(){
        console.log(this.props.name + " Component Did Update Called");
    }

    componentWillUnmount() {
        console.log(this.props.name + " Component Will Unmount Called");
    }

    render() {
        console.log(this.props.name + " Render Called");
        const { name , location, avatar_url, company } = this.state.userInfo;
        return (
            <div className="center p-4 m-4 bg-gray-100 rounded-lg shadow-md">
            <img className="w-32 h-32 rounded-full" src={avatar_url} alt={name} />
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="font-light">{company} - {location}</p>
        </div>
        )
    }
}

export default UserClass;