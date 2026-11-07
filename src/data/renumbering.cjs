const fs = require('fs');

// 파일 읽기
const raw = fs.readFileSync('articles.json', 'utf-8');
let articles = JSON.parse(raw);

// 날짜순 또는 기존 순서 유지한 채 id만 재정렬
articles = articles
  .sort((a, b) => new Date(a.date) - new Date(b.date)) // 날짜순 정렬 (선택)
  .map((article, index) => ({
    ...article,
    id: index + 1, // id를 1부터 다시 부여
  }));

// 파일 저장
fs.writeFileSync('articles_renumbered.json', JSON.stringify(articles, null, 2), 'utf-8');

console.log('✅ id 순서대로 재부여 완료 → articles_renumbered.json 생성됨');
