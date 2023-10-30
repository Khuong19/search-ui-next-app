import React from "react";

const RadioButton = () => {
  return (
    <>
        <div className="flex flex-wrap">
    
        <div className="flex items-center mr-4">
                <input
                id="green-radio"
                type="radio"
                defaultValue=""
                name="colored-radio"
                className="w-4 h-4  bg-transparent border-gray-300 focus:ring-input-blue dark:focus:ring-blue-500 dark:ring-black focus:ring-2 dark:border-gray-600"
                />
                <label
                htmlFor="green-radio"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                Tất cả
                </label>
            </div>
            <div className="flex items-center mr-4">
                <input
                id="green-radio"
                type="radio"
                defaultValue=""
                name="colored-radio"
                className="w-4 h-4  bg-white border-gray-300 focus:ring-input-blue dark:focus:ring-blue-500 dark:ring-black focus:ring-2 dark:bg-transparent dark:border-gray-600"
                />
                <label
                htmlFor="green-radio"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                Văn bản luật
                </label>
            </div>
            <div className="flex items-center mr-4">
                <input
                id="green-radio"
                type="radio"
                defaultValue=""
                name="colored-radio"
                className="w-4 h-4  bg-white border-gray-300 focus:ring-input-blue dark:focus:ring-blue-500 dark:ring-black focus:ring-2 dark:bg-transparent dark:border-gray-600"
                />
                <label
                htmlFor="green-radio"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                Án luật
                </label>
            </div>
    
    </div>

    </>
  );
};

export default RadioButton;
