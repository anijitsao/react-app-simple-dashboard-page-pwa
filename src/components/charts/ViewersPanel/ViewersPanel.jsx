import { useState, Component } from "react";

// Components
import ChangeViewerCount from "./ChangeViewerCount";

const ViewersPanel = (props) => {
  // initialize viewers data and its modifier function
  const [viewersData, setViewersData] = useState({
    channelInfo: [
      {
        name: "Star Jalsha",
        viewers: "6",
        id: crypto.randomUUID(),
      },
      {
        name: "Star Sports",
        viewers: "2",
        id: crypto.randomUUID(),
      },
      {
        name: "National Geograpic",
        viewers: "5",
        id: crypto.randomUUID(),
      },
      {
        name: "Others",
        viewers: "11",
        id: crypto.randomUUID(),
      },
    ],
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    const channelInfoNew = [...viewersData.channelInfo];

    // update the viewers value
    channelInfoNew.forEach((ele, index, arrayElements) => {
      if (ele.id == id) {
        arrayElements[index].viewers = value;
      }
    });

    props.updateViewersCount(channelInfoNew);
    setViewersData({ ...viewersData, channelInfo: channelInfoNew });
  };

  return (
    <article className="viewers-panel basic-padding" data-testid="viewers-panel">
      <div className="viewers-panel-title">
        Hourwise channel watching details
      </div>
      <div className="view-distribution">
        {viewersData.channelInfo.map((ele) => {
          return (
            <ChangeViewerCount
              key={ele.id}
              {...ele}
              handleChange={handleChange}
            />
          );
        })}
      </div>
    </article>
  );
};

export default ViewersPanel;
