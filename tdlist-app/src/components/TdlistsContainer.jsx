import React, { Component } from "react";
import axios from "axios";

class TdlistsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tdlists: [],
    };
  }

  loadTdlists() {
    axios
      .get("/api/version1/tdlists")
      .then((res) => {
        console.log(res.data);
        this.setState({ tdlists: res.data });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.loadTdlists();
  }

  render() {
    return (
      <div>
        <div className="taskContainer">
          <input
            className="newTask"
            type="text"
            placeholder="Input a New Task and Press Enter"
            maxLength="75"
            onKeyPress={this.createTodo}
          />
        </div>
        <div className="wrapItems">
          <ul className="listItems">
            {this.state.tdlists.map((tdlist) => {
              return (
                <li className="item" tdlist={tdlist} key={tdlist.id}>
                  <input className="itemCheckbox" type="checkbox" />
                  <label className="itemDisplay">{tdlist.title}</label>
                  <span className="removeItemButton">x</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default TdlistsContainer;

// import React, { useState } from "react";
// import axios from "axios";

// // switch to functional component version --- class v below

// const TdlistsContainer = () => {
//   const [tdListState, setTdListState] = useState([]);

//   const tdListHandler = () => {
//     axios
//       .get("/api/version1/tdlists")
//       .then((res) => {
//         setTdListState({ tdlists: res.data });
//       })
//       .catch((error) => console.log(error));
//   }

//   // loadTdlists() {
//   //   axios
//   //     .get("/api/version1/tdlists")
//   //     .then((res) => {
//   //       this.setState({ tdlists: res.data });
//   //     })
//   //     .catch((error) => console.log(error));
//   // }

//   return (
//     <div>
//         <div className="taskContainer">
//           <input
//             className="newTask"
//             type="text"
//             placeholder="Input a New Task and Press Enter"
//             maxLength="75"
//           />
//         </div>
//         <div className="wrapItems">
//           <ul className="listItems"></ul>
//         </div>
//       </div>
//   );
// }

// export default TdlistsContainer;
