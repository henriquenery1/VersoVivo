import React from "react";

interface Props {
  body: string;
}

const ShowContent: React.FC<Props> = ({ body }) => {
  return (
    <div className="relative z-10 p-10 w-3/5 mx-auto shadow-lg bg-old-book-page bg-opacity-80 rounded-3xl overflow-auto max-h-[38rem] custom-scrollbar">
      <p className="text-3xl text-content-pen leading-10 font-medium">
        {body}
      </p>
    </div>
  );
};

export default ShowContent;
