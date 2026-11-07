import React from 'react'
import articlesData from '../data/articles.json'

function ArticleList({
    selectedCategory,
    selectedMonth,
    sortOrder,
    searchKeyword,
    readArticles,
    markAsRead,
    toggleRead
}) {
    // 카테고리 + 월별 필터링
    let filtered = articlesData.filter(article => {
        const categoryMatch =
            selectedCategory === '전체' ||
            article.categories?.includes(selectedCategory)

        const monthMatch =
            selectedMonth === '전체' ||
            article.date.startsWith(selectedMonth)

        return categoryMatch && monthMatch
    })

    // 제목 검색
    if (searchKeyword.trim() !== '') {
        const keyword = searchKeyword.toLowerCase()

        filtered = filtered.filter(article =>
            article.title.toLowerCase().includes(keyword)
        )
    }

    // 읽음 여부 + 날짜 정렬
    filtered.sort((a, b) => {
        const aRead = readArticles.some(id => String(id) === String(a.id))
        const bRead = readArticles.some(id => String(id) === String(b.id))

        // 읽음 우선순위
        if (aRead !== bRead) {
            const readFirst = sortOrder.startsWith('read-')
            return readFirst
                ? (aRead ? -1 : 1)
                : (aRead ? 1 : -1)
        }

        // 날짜 정렬
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)

        return sortOrder.endsWith('desc')
            ? dateB - dateA
            : dateA - dateB
    })

    const handleClick = (id, link) => {
        markAsRead(id)
        window.open(link, '_blank', 'noopener,noreferrer')
    }

    return (
        <div className="space-y-4 mt-4">
            {filtered.map(article => {
                const isRead = readArticles.some(
                    id => String(id) === String(article.id)
                )

                return (
                    <div
                        key={article.id}
                        className={`border p-4 rounded hover:shadow ${
                            isRead ? 'opacity-70 bg-gray-50' : ''
                        }`}
                    >
                        <div
                            className="text-lg font-semibold text-blue-600 hover:underline cursor-pointer"
                            onClick={() => handleClick(article.id, article.link)}
                        >
                            {article.title}
                        </div>

                        <div className="flex justify-between items-center mt-2">
                            <div className="text-sm text-gray-600">
                                {article.categories?.join(', ')} | {article.date}
                            </div>

                            <button
                                onClick={() => toggleRead(article.id)}
                                className={`text-sm px-2 py-1 rounded ${
                                    isRead
                                        ? 'text-green-600 hover:bg-green-100'
                                        : 'text-gray-500 hover:bg-gray-100'
                                }`}
                            >
                                {isRead ? '✔ 읽음 취소' : '○ 읽음 처리'}
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ArticleList