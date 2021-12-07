import React, { useState, useEffect } from "react";
import Column from "./components/Column";
import { DragDropContext } from "react-beautiful-dnd";
import { getSearchTweets, getRecentTweets } from "./services/TwitterService";
import { setStorage, getStorage } from "./services/StorageService";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { StyledColumns, NoResults } from "./App.style";

const App = () => {
  const [tweets, setTweets] = useState([]);
  const [columns, setColumns] = useState([]);
  const [noResult, setNoResult] = useState(false);

  useEffect(() => {
    let cancelCall = false;
    getRecentTweets().then((response) => {
      if (!cancelCall) setTweets(response);
    });
    return () => {
      cancelCall = true;
    };
  }, []);

  useEffect(() => {
    const initialColumns = {
      todo: {
        id: "todo",
        columnName: "Recent Tweets",

        list: tweets,
      },
      doing: {
        id: "doing",
        columnName: "Saved Tweets",
        list: getStorage("newEndList")?.length ? getStorage("newEndList") : [],
      },
    };

    setColumns(initialColumns);
  }, [tweets]);

  const searchTweets = (text) => {
    getSearchTweets(text).then((response) => {
      setTweets(response);
      Array.isArray(response) && response.length
        ? setNoResult(false)
        : setNoResult(true);
    });
  };

  const onDragEnd = ({ source, destination }) => {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null;

    // Make sure we're actually moving the item
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;

    // Set start and end variables
    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];

    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the list
      // Start by making a new list without the dragged item
      const newList = start.list.filter((_, idx) => idx !== source.index);

      // Then insert the item at the right location
      newList.splice(destination.index, 0, start.list[source.index]);

      source.droppableId === "todo"
        ? setStorage("newStartList", newList)
        : setStorage("newEndList", newList);

      // Then create a new copy of the column object
      const newCol = {
        id: start.id,
        columnName: start.columnName,
        list: newList,
      };

      // Update the state
      setColumns((state) => ({ ...state, [newCol.id]: newCol }));
      return null;
    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      const newStartList = start.list.filter((_, idx) => idx !== source.index);

      // Create a new start column
      const newStartCol = {
        id: start.id,
        columnName: start.columnName,
        list: newStartList,
      };

      // Make a new end list array
      const newEndList = end.list;

      // Insert the item into the end list
      newEndList.splice(destination.index, 0, start.list[source.index]);

      setStorage("newEndList", newEndList);

      if (destination.droppableId === "todo") {
        setStorage("newEndList", newStartList);
      }

      // Create a new end column
      const newEndCol = {
        id: end.id,
        columnName: end.columnName,
        list: newEndList,
      };

      // Update the state
      setColumns((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      }));
      return null;
    }
  };

  return (
    <>
      <SearchBar searchTweets={searchTweets} />
      {noResult && <NoResults>No result found</NoResults>}
      <DragDropContext onDragEnd={onDragEnd}>
        <StyledColumns>
          {Object.values(columns).map((col) => (
            <Column col={col} key={col.id} />
          ))}
        </StyledColumns>
      </DragDropContext>
    </>
  );
};

export default App;
