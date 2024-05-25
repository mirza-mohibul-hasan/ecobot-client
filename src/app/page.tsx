"use client";
import { useState, FormEvent } from "react";

export default function Home() {
  const [command, setCommand] = useState<string>("");
  const [result, setResult] = useState<string>(
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum qui debitis impedit nobis suscipit, praesentium velit. Maxime, repellat obcaecati corporis asperiores illum aut ipsa voluptate exercitationem eos, sit doloremque. Praesentium voluptates nemo dolorum beatae recusandae molestiae tempora distinctio. Distinctio ipsam ducimus quisquam consectetur, ipsum numquam architecto dignissimos officiis fuga incidunt accusantium nisi corporis, omnis doloribus dicta deserunt voluptatum at neque alias, eius dolorem deleniti dolorum! Ea doloremque perspiciatis iusto debitis in possimus eum qui, tempore magnam enim aut? Incidunt accusantium necessitatibus mollitia, provident, veniam temporibus doloremque hic sint asperiores quisquam, possimus suscipit quae. Ipsum consequuntur omnis itaque laborum libero aspernatur explicabo incidunt numquam at dolore, aperiam saepe qui cumque odio nam eaque. Quasi, fuga. Quisquam impedit odio dignissimos? Natus odit aut voluptas saepe aliquid autem earum impedit ab incidunt velit ullam cumque eos, eum amet eligendi quibusdam voluptate dolorem quos odio nam commodi dignissimos repudiandae molestias? Nostrum dolorum libero non quidem, sint optio ex, neque similique sed facilis itaque quos possimus ea rerum, reiciendis commodi! Soluta nihil facilis nostrum veniam nisi odit nobis ad officiis sint, perspiciatis voluptatum iure eaque eius! Ex, distinctio delectus eligendi, vel molestias facere sequi nostrum provident enim cumque quaerat molestiae voluptatem. Sequi exercitationem veniam eos."
  );

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Command submitted:", command);
    setResult(`Command received: ${command}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-gray-100">
      <nav className="w-full py-4 bg-green-600 text-white text-center text-lg font-bold">
        EcoBot
      </nav>
      <div className="flex flex-col items-center w-full max-w-4xl mt-8">
        <div className="bg-white p-6 rounded shadow-md w-full mb-6">
          <h2 className="text-2xl font-bold mb-4">Result</h2>
          <p>{result}</p>
        </div>
        <div className="w-full bg-white p-6 rounded shadow-md">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">Command Input</h2>
            <input
              type="text"
              placeholder="Type command here"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="submit"
              value="Submit"
              className="px-4 py-2 bg-green-600 text-white rounded cursor-pointer hover:bg-green-700"
            />
          </form>
        </div>
      </div>
      <footer className="w-full py-4 bg-green-600 text-white text-center mt-8">
        © 2024 EcoBot. All rights reserved.
      </footer>
    </main>
  );
}
