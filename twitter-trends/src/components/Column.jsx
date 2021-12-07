import React from "react";
import Item from "./Item";
import { Droppable } from "react-beautiful-dnd";
import { StyledColumn, StyledList } from "./components.style";

const Column = ({ col }) => {
  const { id, list, columnName } = col;
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <StyledColumn>
          <h2>{columnName}</h2>
          <StyledList {...provided.droppableProps} ref={provided.innerRef}>
            {list &&
              list.map((tweets, index) => (
                <Item key={index} tweets={tweets} index={index} />
              ))}
            {provided.placeholder}
          </StyledList>
        </StyledColumn>
      )}
    </Droppable>
  );
};

export default Column;
