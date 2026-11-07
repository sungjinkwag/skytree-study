import { useEffect, useState } from 'react'

function useReadArticles() {
    const [readArticles, setReadArticles] = useState(() => {
        const saved = localStorage.getItem('readArticles')
        return saved ? JSON.parse(saved) : []
    })

    // 읽음 상태 변경 시 localStorage 자동 저장
    useEffect(() => {
        localStorage.setItem('readArticles', JSON.stringify(readArticles))
    }, [readArticles])

    // 읽음 처리
    const markAsRead = (id) => {
        setReadArticles(prev =>
            prev.some(item => String(item) === String(id))
                ? prev
                : [...prev, id]
        )
    }

    // 읽음 상태 토글
    const toggleRead = (id) => {
        setReadArticles(prev =>
            prev.some(item => String(item) === String(id))
                ? prev.filter(item => String(item) !== String(id))
                : [...prev, id]
        )
    }

    // 전체 초기화
    const resetAll = () => {
        setReadArticles([])
    }

    // 카테고리별 초기화
    const resetByCategory = (category, allArticles) => {
        if (category === '전체') {
            resetAll()
            return
        }

        const idsToRemove = allArticles
            .filter(a => a.categories?.includes(category))
            .map(a => String(a.id))

        setReadArticles(prev =>
            prev.filter(id => !idsToRemove.includes(String(id)))
        )
    }

    // 개별 읽음 취소
    const resetOne = (articleId) => {
        setReadArticles(prev =>
            prev.filter(id => String(id) !== String(articleId))
        )
    }

    return {
        readArticles,
        markAsRead,
        toggleRead,
        resetAll,
        resetByCategory,
        resetOne
    }
}

export default useReadArticles