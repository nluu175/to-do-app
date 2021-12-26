import { useState, useEffect } from "react";
import { useForm } from "./custom/useForm";
import axios from "axios";

const AddParams = (props) => {
  const [values, handleChange] = useForm({
    content: "",
    dueDate: "",
  });

  const { handleSubmit } = props;

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="content">Content</label>
        <input
          name="content"
          value={values.content}
          onChange={handleChange}
          placeholder="Write something ..."
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
        />
        <label htmlFor="dueDate">Due Date</label>
        <input
          name="dueDate"
          value={values.dueDate}
          type="date"
          onChange={handleChange}
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
        />
        <label htmlFor="important">Important</label>
        <input
          name="important"
          type="checkbox"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
        />
        <label htmlFor="completed">Completed</label>
        <input
          name="completed"
          type="checkbox"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddParams;
