import React from 'react';
import '../../styles/Portfolio.css';
import data from '../../data';

export default function Portfolio() {
  return (
    <div>
      <div className="content card-container">
      {data.map((user) => (
        <a href={user.url} key={user.id} className="card-flex-button btn-block">
          <div id="card">
            <div className="card-flex-wrapper">
            <div className="card-flex-content">
              <h3 style={{color: user.titleColor}}>{user.titleText}</h3>
              <p style={{color: user.descriptionColor}}>{user.description}</p>
            </div>
          </div>
          </div>
          </a>
        ))}
      </div>
    </div>
  );
}

// var CardContainer = React.createClass({
// 	render: function(){
// 		var cards = [];
// 		for(var i = 1; i <= this.props.numCards; i += 1){
// 			cards.push(<CardItem idNum={i}  />);
// 		}
// 		return (
// 			<div className="card-flex">{cards}</div>
// 		);
// 	}
// });

// var CardItem = React.createClass({
// 	render: function() {
// 		return(
// 			<div id={'card-' + this.props.idNum} className="card-flex-item"></div>
// 		);
// 	}
// });

// var CardContent = React.createClass({
// 	render: function(){
// 		return(
// 			<div className="card-flex-wrapper">
// 				<div className="card-flex-image">
// 					<img src={this.props.imgSrc} alt="img placeholder" />
// 				</div>
// 				<div className="card-flex-content">
// 					<h3>{this.props.headerText}</h3>
// 					<p>{this.props.description}</p>
// 					<a href={this.props.url} className="card-flex-button btn-block">Button</a>
// 				</div>
// 			</div>
// 		);
// 	}
// });

// //Change number of cards 1-10
// ReactDOM.render(<CardContainer numCards={5} />, document.getElementById('card'));

// //Card content here
// ReactDOM.render(<CardContent 
// 	imgSrc="https://placeimg.com/640/480/nature"
// 	headerText="One"
// 	description="I'm a card and I'm first"
// 	url="https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout" />, document.getElementById('card-1'));
// ReactDOM.render(<CardContent 
// 	imgSrc="http://lorempixel.com/640/480/abstract/"
// 	headerText="Two"
// 	description="I'm a card and I'm Second"
// 	url="https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout" />, document.getElementById('card-2'));
// ReactDOM.render(<CardContent 
// 	imgSrc="http://lorempixel.com/640/480/city/"
// 	headerText="Three"
// 	description="I'm a card and I'm Third"
// 	url="https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout" />, document.getElementById('card-3'));
// ReactDOM.render(<CardContent 
// 	imgSrc="http://lorempixel.com/640/480/people/"
// 	headerText="Four"
// 	description="I'm a card and I'm Four"
// 	url="https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout" />, document.getElementById('card-4'));
// ReactDOM.render(<CardContent 
// 	imgSrc="http://lorempixel.com/640/480/food/"
// 	headerText="Five"
// 	description="I'm a card and I'm Five"
// 	url="https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout" />, document.getElementById('card-5'));

// const IssueList = ({ issues }) => {
//   // We create a list of rendered IssueItems by using the map method on `issues`
//   const renderedList = issues.map((issue) => {
//     return <IssueItem key={issue.id} issue={issue} />;
//   });

//   // Here we return our array of IssueItems wrapped inside a parent div
//   return <div className="ui relaxed divided list">{renderedList}</div>;
// };

// export default function List({ users }) {
//   return (
//     <div className="container">
//       <h1>Random Users:</h1>
//       <ul className="list-group">
//         {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
//         {users.map((user) => (
//           <li className="list-group-item" key={user.login.uuid}>
//             {`${user.name.first} ${user.name.last} (${user.login.username})`}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }