// pages/index.js
import useSWR from "swr";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

function List() {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("username");
  const [sortOrder, setSortOrder] = useState("asc");
  const { data, error } = useSWR(
    `/api/data?page=${page}&pageSize=10&sortBy=${sortBy}&sortOrder=${sortOrder}`,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <table className="border-collapse border border-green-400 ">
        <thead>
          <tr>
            <th className="border bg-green-300 ">userId</th>
            <th className="border bg-green-300 ">username</th>
            <th className="border bg-green-300 ">email</th>
            <th className="border bg-green-300 ">birthdate</th>
          </tr>
        </thead>

        <tbody>
          {data.data.map((item) => (
            <tr key={item.userId}>
              <td className="border border-green-300 ">{item.userId}</td>
              <td className="border border-green-300 ">{item.username}</td>
              <td className="border border-green-300 ">{item.email}</td>
              <td className="border border-green-300 ">{item.birthdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-10 leading-10 bg-neutral-200 text-gray-900 text-center">
        {data.currentPage} / {data.pageSize} / {data.totalPages} /{" "}
        {data.totalItems}
      </div>

      <div className="h-10 leading-10 bg-neutral-200 text-gray-900 text-center">
        {sortBy} / {sortOrder} / {page}
      </div>

      <div className="mt-10">
        <button
          className="px-2 py-1 bg-green-500 mx-2"
          onClick={() => setSortBy("userId")}
        >
          sort by userId
        </button>
        <button
          className="px-2 py-1 bg-green-500 mx-2"
          onClick={() => setSortBy("username")}
        >
          sort by username
        </button>
        <button
          className="px-2 py-1 bg-green-500 mx-2"
          onClick={() => setSortOrder("asc")}
        >
          ASC
        </button>
        <button
          className="px-2 py-1 bg-green-500 mx-2"
          onClick={() => setSortOrder("desc")}
        >
          DESC
        </button>

        <button
          className="px-2 py-1 bg-green-500 mx-2"
          onClick={() => page > 1 && setPage(page - 1)}
        >
          上一页
        </button>

        <button
          className="px-2 py-1 bg-green-500 mx-2"
          onClick={() => page < data.totalPages && setPage(page + 1)}
        >
          下一页
        </button>
      </div>

      {/* Add pagination, sorting, and filtering controls as needed */}
    </div>
  );
}

export default List;
