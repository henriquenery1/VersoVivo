import React from "react";

interface Props {
  body: string;
}

const ShowContent: React.FC<Props> = ({ body }) => {
  return (
    <p className="relative z-10 p-10 w-3/5 mx-auto text-3xl bg-[#7B7B82] bg-opacity-80 rounded-3xl shadow-lg text-content-pen">
      {body}
    </p>
  );
};

export default ShowContent;
