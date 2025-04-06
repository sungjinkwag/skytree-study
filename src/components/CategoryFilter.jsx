import React from 'react'

function CategoryFilter({ selectedCategory, setSelectedCategory }) {
    const categories = ['전체', 'TAC', 'WBC','곰팡이','기타','대중문화 디코드', '백신', '성경/묵상','송과체','시사/정치','암','에세이','이태원','카운슬러','트럼프','헤드라인 디코드']

    return (
        <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((cat) => (
                <button
                    key={cat}
                    className={`px-3 py-1 rounded-full border ${selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'
                        } hover:bg-blue-100`}
                    onClick={() => setSelectedCategory(cat)}
                >
                    {cat}
                </button>
            ))}
        </div>
    )
}

export default CategoryFilter
