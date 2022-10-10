import Table from "./components/table";
import Form from "./components/form";
import { useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const handler = () => {
    setVisible(visible? false: true);
  };
  return (
    <>
      <h1 className="text-center p-5 m-5">Get hands on react redux nextjs</h1>
      <div className="container">{visible ? <Form /> : <></>}</div>
      <Table />
      <button onClick={handler} className="btn btn-success">Add Data</button>
    </>
  );
}
