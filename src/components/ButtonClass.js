import React from "react";

// export const ButtonClass = ({
//   label = "Default",
//   handleClick = () => console.log("I am default"),
// }) => <button onClick={handleClick}>{label}</button>;

export class ButtonClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      label = "Default Class",
      handleClick = () => console.log("I am default"),
    } = this.props;
    return <button onClick={handleClick}>{label}</button>;
  }
}
