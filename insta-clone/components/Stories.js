import React from "react";
import faker from "faker";
import Story from "./Story";
const Stories = () => {
  const [suggestions, setSuggestions] = React.useState([]);

  React.useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div
      className="flex 
    scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100
    space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-scroll"
    >
      {suggestions.map((profile, i) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
