"use client";
import { log } from "console";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [todo, settodo] = useState({ title: "", description: "" });
  const addToDo = () => {
    let todos = localStorage.getItem("todos");
    if (todos) {
      let todosJson: any = JSON.parse(todos);

      if (
        ((todosJson = todosJson.filter((value: { title: string }) => {
          return value.title !== todo.title;
        })),
        length > 0)
      ) {
        alert("Todo already exists");
      } else {
        alert("Todo Added");
        todosJson.push(todo);
        localStorage.setItem("todos", JSON.stringify(todosJson));
        settodo({ title: "", description: "" });
      }
    } else {
      localStorage.setItem("todos", JSON.stringify([todo]));
    }
  };
  const onChange = (e: any) => {
    settodo({ ...todo, [e.target.name]: e.target.value });
    console.log(todo);
  };
  return (
    <div className="my-2 font-bold text-2xl">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Add a Todo
            </h2>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">
                Todo Title
              </label>
              <input
                value={todo.title}
                type="text"
                id="title"
                name="title"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={onChange}
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">
                Todo Details
              </label>
              <input
                value={todo.description}
                type="text"
                id="description"
                name="description"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={onChange}
              />
            </div>
            <button
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-fit"
              onClick={addToDo}
            >
              &#43; Add Todo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
