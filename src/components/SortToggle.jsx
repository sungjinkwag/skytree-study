import React from 'react'

function SortToggle({
    readFilter,
    setReadFilter,
    sortOrder,
    setSortOrder
}) {
    return (
        <div className="mb-4 space-y-3">

            {/* 읽음 상태 필터 */}
            <div className="flex gap-2">
                {[
                    { value: 'all', label: '전체' },
                    { value: 'read', label: '읽음' },
                    { value: 'unread', label: '안 읽음' }
                ].map(item => (
                    <button
                        key={item.value}
                        onClick={() => setReadFilter(item.value)}
                        className={`px-4 py-2 border rounded text-sm ${
                            readFilter === item.value
                                ? 'bg-blue-500 text-white border-blue-500'
                                : 'text-gray-700 hover:bg-blue-100'
                        }`}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            {/* 날짜 정렬 */}
            <div className="flex gap-2">
                <button
                    onClick={() => setSortOrder('desc')}
                    className={`px-4 py-2 border rounded text-sm ${
                        sortOrder === 'desc'
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'text-gray-700 hover:bg-blue-100'
                    }`}
                >
                    최신순
                </button>

                <button
                    onClick={() => setSortOrder('asc')}
                    className={`px-4 py-2 border rounded text-sm ${
                        sortOrder === 'asc'
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'text-gray-700 hover:bg-blue-100'
                    }`}
                >
                    오래된순
                </button>
            </div>

        </div>
    )
}

export default SortToggle