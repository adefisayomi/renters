import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="">
      <h1 className="text-purple-500 text-5xl font-bold ">Hello there</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vel, temporibus magnam facere et similique vitae molestias ipsum distinctio sapiente.</p>
    </div>
  );
}
