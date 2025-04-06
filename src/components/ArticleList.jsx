import React from 'react'
import articlesData from '../data/articles.json'

function ArticleList({ selectedCategory, sortOrder, searchKeyword, readArticles, markAsRead }) {
    // ✅ 필터링: 카테고리
    let filtered = selectedCategory === '전체'
        ? articlesData
        : articlesData.filter(a =>
            a.categories && a.categories.includes(selectedCategory)
        )

    // 🔍 제목 검색 필터 추가
    if (searchKeyword.trim() !== '') {
        const keyword = searchKeyword.toLowerCase()
        filtered = filtered.filter(article =>
            article.title.toLowerCase().includes(keyword)
        )
    }

    // 🕑 날짜 정렬
    filtered.sort((a, b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return sortOrder === 'desc' ? dateB - dateA : dateA - dateB
    })

    const handleClick = (id, link) => {
        markAsRead(id)
        window.open(link, '_blank', 'noopener,noreferrer')
    }

    return (
        <div className="space-y-4 mt-4">
            {filtered.map((article) => {
                const isRead = readArticles.includes(article.id)
                return (
                    <div
                        key={article.id}
                        className={`border p-4 rounded hover:shadow ${isRead ? 'opacity-70 bg-gray-50' : ''
                            }`}
                    >
                        <div
                            className="text-lg font-semibold text-blue-600 hover:underline cursor-pointer"
                            onClick={() => handleClick(article.id, article.link)}
                        >
                            {article.title} {isRead && <span className="text-green-600 ml-2">✔ 읽음</span>}
                        </div>
                        <div className="text-sm text-gray-600">
                            {article.categories?.join(', ')} | {article.date}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ArticleList
