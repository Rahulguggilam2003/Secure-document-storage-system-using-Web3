import React, { useEffect, useState } from "react";

const GetAsset = ({ State }) => {
  let [Files, setFiles] = useState([]);
  let [Search, setSearch] = useState("");

  const LoadFiles = async () => {
    try {
      const File = Search && (await State.Contract.Display(Search));
      setFiles(File);
    } catch (Err) {
      alert("Error in Fetching Files");
    }
  };

  return (
    <div className="Scroll h-[100%] w-[100%]">
      <div className="w-[100%]">
        <input
          className="w-[80%] p-2 outline-none"
          type="text"
          onChange={(E) => {
            setSearch(E.target.value);
          }}
        />
        <button
          className="w-[20%] bg-green-500 p-2 text-white font-semibold"
          onClick={LoadFiles}
        >
          Fetch
        </button>
      </div>
      {Files &&
        Files.map((File, index) => {
          return (
            <div
              key={index}
              className="flex justify-between w-[100%] border-b-2 border-b-white p-2 text-white"
            >
              <a
                className="text-blue-300"
                href={`https://brown-magic-opossum-246.mypinata.cloud/ipfs/${File.substring(7)}?pinataGatewayToken=`}
                target="_blank"
              >
                {`https://brown-magic-opossum-246.mypinata.cloud/ipfs/${File.substring(7)}?pinataGatewayToken=`}
              </a>
              <img
                src={`https://brown-magic-opossum-246.mypinata.cloud/ipfs/${File.substring(7)}?pinataGatewayToken=`}
                height={100}
                width={100}
                alt=""
              />
            </div>
          );
        })}
    </div>
  );
};

export default GetAsset;
