import React from "react";

import { Link } from "react-router-dom";
import { ListItem } from "@material-ui/core";

export default function BookCart() {
  return (
    <div className="book__cart">
      <Link to="/books/:bookId">
        <ListItem primaryText="Chat 1">chat 1</ListItem>
      </Link>
    </div>
  );
}
