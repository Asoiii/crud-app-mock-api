'use client';

import React from 'react';

interface TableProps {
  columns: string[];
  data: any[];
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const Table: React.FC<TableProps> = ({ columns, data, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border w-full text-left">
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="border p-2 bg-gray-200">
                {col}
              </th>
            ))}
            {onEdit || onDelete ? (
              <th className="border p-2 bg-gray-200">Actions</th>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100">
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="border p-2">
                  {row[col] || '-'}
                </td>
              ))}
              {onEdit || onDelete ? (
                <td className="border p-2 space-x-2">
                  {onEdit && (
                    <button
                      className="text-blue-600 hover:underline"
                      onClick={() => onEdit?.(row.id)}
                    >
                      Edit
                    </button>
                  )}
                  {onDelete && (
                    <button
                      className="text-red-600 hover:underline"
                      onClick={() => onDelete?.(row.id)}
                    >
                      Delete
                    </button>
                  )}
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
