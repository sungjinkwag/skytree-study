import React from 'react'

function MonthFilter({ selectedMonth, setSelectedMonth, articles }) {
    // 게시글 날짜에서 중복을 제거한 월 목록 생성
    const months = [...new Set(
        articles.map(article => article.date.substring(0, 7))
    )].sort((a, b) => b.localeCompare(a))

    return (
        <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="w-full border px-3 py-2 rounded mb-4"
        >
            <option value="전체">전체 기간</option>

            {months.map(month => (
                <option key={month} value={month}>
                    {month.replace('-', '년 ')}월
                </option>
            ))}
        </select>
    )
}

export default MonthFilter