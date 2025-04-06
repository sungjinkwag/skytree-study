import { useEffect, useState } from 'react'

function useReadArticles() {
    const [readArticles, setReadArticles] = useState(() => {
        const saved = localStorage.getItem('readArticles')
        return saved ? JSON.parse(saved) : []
    })

    const markAsRead = (id) => {
        if (!readArticles.includes(id)) {
            const updated = [...readArticles, id]
            setReadArticles(updated)
            localStorage.setItem('readArticles', JSON.stringify(updated))
        }
    }

    const resetAll = () => {
        localStorage.removeItem('readArticles')
        setReadArticles([])
    }

    const resetByCategory = (category, allArticles) => {
        if (category === '전체') {
            resetAll()
            return
        }

        const idsToRemove = allArticles
            .filter(a => a.categories?.includes(category))
            .map(a => String(a.id))

        const updated = readArticles.filter(id => !idsToRemove.includes(String(id)))
        setReadArticles(updated)
        localStorage.setItem('readArticles', JSON.stringify(updated))
    }



    return { readArticles, markAsRead, resetAll, resetByCategory }
}


export default useReadArticles
