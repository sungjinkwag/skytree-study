import React, { useState } from 'react'
import CategoryFilter from '../components/CategoryFilter'
import SortToggle from '../components/SortToggle'
import ArticleList from '../components/ArticleList'
import useReadArticles from '../hooks/useReadArticles'
import articlesData from '../data/articles.json'

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('전체')
  const [sortOrder, setSortOrder] = useState('desc')
  const [searchKeyword, setSearchKeyword] = useState('')
  const { readArticles, markAsRead, resetAll, resetByCategory } = useReadArticles()
  const handleReset = () => {
    resetByCategory(selectedCategory, articlesData)
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-blue-600">SkyTree 매거진 목록</h1>
        <button
          onClick={handleReset}
          className="text-sm px-3 py-1 border border-red-400 text-red-600 rounded hover:bg-red-50"
        >
          {selectedCategory === '전체'
            ? '전체 읽음 초기화'
            : `${selectedCategory} 읽음 초기화`}
        </button>
      </div>
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <input
        type="text"
        placeholder="제목 검색"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        className="w-full border px-3 py-2 rounded mb-4"
      />

      <SortToggle sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <ArticleList
        selectedCategory={selectedCategory}
        sortOrder={sortOrder}
        searchKeyword={searchKeyword}
        readArticles={readArticles}
        markAsRead={markAsRead}
      />

    </div>
  )
}

export default Home
