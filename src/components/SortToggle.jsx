import React from 'react'

function SortToggle({ sortOrder, setSortOrder }) {
    return (
        <div className="mb-4">
            <button
                className="px-4 py-1 border rounded text-sm text-gray-700 hover:bg-blue-100"
                onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
            >
                {sortOrder === 'desc' ? '오래된순' : '최신순'} 정렬
            </button>
        </div>
    )
}

export default SortToggle
