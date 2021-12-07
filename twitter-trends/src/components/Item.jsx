import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { StyledItem } from "./components.style";

const Item = ({ tweets, index }) => {
  const tweetId = tweets.id.toString();
  return (
    <Draggable draggableId={tweetId} index={index} key={tweets.id}>
      {(provided) => (
        <StyledItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {tweets.text}
        </StyledItem>
      )}
    </Draggable>
  );
};

export default Item;
