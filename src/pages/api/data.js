// pages/api/data.js
import { generateMockData } from "@/mock/index";

export default function handler(req, res) {
  // Mock data
  const data = generateMockData(100); // 生成100条模拟数据

  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const pageSize = parseInt(req.query.pageSize, 10) || 10;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  // Sorting
  const sortBy = req.query.sortBy || "id";
  const sortOrder = req.query.sortOrder === "desc" ? -1 : 1;
  paginatedData.sort((a, b) => (a[sortBy] - b[sortBy]) * sortOrder);

  // Filtering
  const categoryFilter = req.query.category;
  const filteredData = categoryFilter
    ? paginatedData.filter((item) => item.category === categoryFilter)
    : paginatedData;

  const response = {
    totalItems: data.length,
    currentPage: page,
    pageSize: pageSize,
    totalPages: Math.ceil(data.length / pageSize),
    data: filteredData,
  };

  res.status(200).json(response);
}
