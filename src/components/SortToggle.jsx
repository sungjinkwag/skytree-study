import React from 'react'

function SortToggle({ sortOrder, setSortOrder }) {
    return (
        <div className="mb-4">
            <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border px-3 py-2 rounded text-sm"
            >
                <option value="read-desc">읽은 목록 우선 · 최신순</option>
                <option value="read-asc">읽은 목록 우선 · 오래된순</option>
                <option value="unread-desc">안 읽은 목록 우선 · 최신순</option>
                <option value="unread-asc">안 읽은 목록 우선 · 오래된순</option>
            </select>
        </div>
    )
}

export default SortToggle