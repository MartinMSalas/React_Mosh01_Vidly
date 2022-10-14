import React, { Component } from "react";


/*
install font awesome react https://fontawesome.com/v5/docs/web/use-with/react#get-started
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/free-regular-svg-icons
npm install --save @fortawesome/react-fontawesome

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

const fullHeart = <FontAwesomeIcon icon={faHeart} />;
const emptyHeart = <FontAwesomeIcon icon={farHeart} />;
*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

const Like = (props) => {
  const fullHeart = (
    <FontAwesomeIcon
      icon={faHeart}
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
    />
  );
  const emptyHeart = (
    <FontAwesomeIcon
      icon={farHeart}
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
    />
  );

  return props.liked ? fullHeart : emptyHeart;
};

export default Like;

/*

class Like extends Component {
  
  render() { 
    const fullHeart = ( 
      <FontAwesomeIcon
        icon={faHeart}
        onClick={props.onClick}
        style={{ cursor: "pointer" }}
      />
    );
    const emptyHeart = (
      <FontAwesomeIcon
        icon={farHeart}
        onClick={props.onClick}
        style={{ cursor: "pointer" }}
      />
    );

    return (this.props.liked ? fullHeart : emptyHeart);
  }
}
export default Like; 
*/
