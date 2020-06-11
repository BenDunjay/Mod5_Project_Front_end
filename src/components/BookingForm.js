import React from "react";
import API from "../API";

export default class BookingForm extends React.Component {
  state = {
    availabilityObject: {},
  };

  componentDidMount = () => {
    API.createRequest(this.props.match.params.availability_id).then(
      (availObject) =>
        this.setState({
          availabilityObject: availObject,
        })
    );
  };

  render() {
    console.log(this.props.match.params);
    console.log(this.state.availabilityObject);
    return <div>Hi from booking form</div>;
  }
}
