import 'css/MyBookmarkQuestion.css'
import MyPageProfile from 'components/MyPageProfile'
import { useState, useEffect } from 'react'
import QuestionList from 'components/QuestionList'

const MyBookmarkQuestion = () => {
  const [sort, setSort] = useState('question_bookmarkCount')

  useEffect(() => {
    const bookmarkBtn = document.getElementById('sort-by-bookmark')
    const latestBtn = document.getElementById('sort-by-latest')

    if (sort === 'question_bookmarkCount') {
      bookmarkBtn.style.color = '#4d4d4e'
      bookmarkBtn.style.borderColor = '#707070'
      bookmarkBtn.style.fontWeight = 'bold'

      latestBtn.style.color = '#6a737d'
      latestBtn.style.borderColor = '#cdcdd5'
      latestBtn.style.fontWeight = 'normal'
    } else {
      bookmarkBtn.style.color = '#6a737d'
      bookmarkBtn.style.borderColor = '#cdcdd5'
      bookmarkBtn.style.fontWeight = 'normal'

      latestBtn.style.color = '#4d4d4e'
      latestBtn.style.borderColor = '#707070'
      latestBtn.style.fontWeight = 'bold'
    }
  }, [sort])
  return (
    <div className="mypage-register-bookmark">
      <MyPageProfile />
      <div className="mypage-register-bookmark-question">
        <div className="mypage-register-bookmark-title">
          <span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAACysrLy8vLT09M5OTmBgYH4+PjR0dH7+/uurq7W1tbZ2dltbW0wMDDp6elSUlLFxcW8vLyenp6oqKgpKSl8fHyRkZG6urpnZ2fi4uJMTEwcHBxWVlZycnIODg4eHh6JiYk8PDwSEhIrKytFRUWhoaFfX180NDSPj4++STNSAAAKsUlEQVR4nN1daWOCOBBVUVDxwqtV661t9///wdWyrtrOm4RkJtC+j8VCHiRzZ1KraSOJmq/TSbwYtWZv2229Xt9u32at0SKeTF+bUaL+fE0Me4394rPOo7WIu71h2UN1QLPbP28N5B5w7nebZQ+5AJrvI3tujzQnadlDt0DU6Duxu6HfjcqmwGE5XXvRy7F+X5ZNhEbUXQnQy3Gu4JfMFmL0cnxkZVN6RDQZCPO7YvZSFSWSzhXo5dhUQbi23TSDLVbtkvllB1V+VxzKXJCZnPTkcC6LYyqh/OwwKsOkG/rZLkWxCa0gOy9B+V0x6YQkmGnoPxNO4ZZjsimB3xX9QP7yuCR+V7wG4Bd9lEiwXl+oW3LZW6kE6/XjWJdg7De8t9ngMJh5vqRYkd/y5DKi1no+zdrLZ4UWLdvZdL5uHR1uOFDzkIuLmFHcSPmFM+w14uK2kdJMLajkPyZtWzskSicF5dc/CvySIl7SLi6unbN4V+AJK3HVOLR//CB2tZPTvSl+/PAShdVG2zq6O2962Y9Na2m9FfWNbWXMZ9d/8iQN2w8pKG/e7Z64loqqpJZyZyr0PEshGktqqaXdZJ3IPG1v86y5tL04tOL4IvEomydtNOzhoY2TJmDCWRBc9fwfQ6JnoYO9Ke6Nj5hpGvvjmfH5nhPVLGRi3fBJx/yKvcSNUU20tCboHb2WaRDv7jc3KnoRUWaEcSI5r5O24cazUDmFpmk1Og5kaLBFQ0W+LkgM4eejk7ZKDN6EmMlkhS4/mJ3L2+Z10S50JiHlZ+qo+B355b0Kn2eP+ERXYaHHi9G+4yg77ca00XbVoPxiLChQl7LvK0fzNsS+4xTn51Ux34YNG3adhveU7Zi7yWFW3gyK3Ik1t91yB8mz5z5wo/jKDayAEZ5x93EzIJLvoQlHiuzQrAN8EReIdkzi/axImbvdiKN4tJXwXJTE0QTsEbdyNNo5igu7W3BzveE2qhrlrjt+RHZ8VjIiYW7gJkUvIO/mejNOotrMU0avOjtL1CR1nqasXrSYp8w0t5zlBOiJ5R7+YAohjZKwg3X9ynlAtQZ5Q9dFfQG2UU8mmxBPgJ2HsS3OMMKehmEpDeE/1n3cJXGGtSYeKO8NYzHj5fDKM6xN4UhZxwe/GVd/KYcCQ+ZjcLMN+vUzv5iMBsMELsU1/iesKTyjahoMmVAg1hhQBvvGRVUYYrkP9Rr8hC3PoSgxrMFoOPqIsGbbO3SvxJA2Bi840L+H83rvOxIthrU9GjItTtEqnPlnl7QYQhuTFKcpeh8C+UEthjjoSS0slFN2iCb/gBpDqMEJ9xpapBIZQj2GUNj89BMm4JcbgWEoMoRT72dmGNlAIlUWigzR3Jt9/yHS9q7homcoMiTilDm+a30UF5AplNFkiD7it5hLBH4mVFOtyRCmIJ7dIRSgE6pVU2WI8mTPoU9gz3zIjEGXIYrRP3kY6DVIlVPqMkTW2OMEBJVBn0JDUGZYAyW3j6ElsB/AOYj/HcoMgRR5ML+RJBUrmFFmiFItd8uNHoCQtscPEGOItP79ASAwJ1cyo80QREHvIVD6upic0WfYAbLmdh28Af/gxf/QZljb0xRu2g44ToIdG9QZApV4qzylDZqd3PP1GdboPY23+ATNX3Ijoz5DYH7nF8EylNwbrs8Q+Le5OgAWgeDjAzAEEzG3ymhtKOVWfCEAQ9rwzDXimbwmtKUoRwCGtEI4Xy+BKIBod58ADGlpsr1GYUDEUbQIOABD4D1co720oGHyqA4IwBBEv6/P2JNXZLf1h2BIa8Sr6UnHEWWfHoIh/YxrTJE2y2X3M4VgSJumLeQfb2W3TIZgCLb4JEAGeWfunxGCIcjqR0CPyIrSMAxpqyYFhZFyIZov0AyFGwbRwZpXUB8mvG2LZjhvWGJsJRUQE9qeE26rBYJ5BWDRB5PO6U+AohTeO+nP0GIvLF0tEwOFL9zFR4KhMd9OJ18WwJwT3nwnwtBEkdZ7I6BFZAkKMTSpF/J/WmCXWjUZHvlECvk/JzoMt60mQ0MyjPyXXY205t4qyvDMPoXckLalGf4oRqkIQ371kCVBW/rTCiZlZBmyep9uOUozBBWo5TNk3VagFsi//qlv+PfX4d+XpX9fH/4mm+bNyab563bp4Tf5FobQCvIt/r5/+Pd9fDpOI9yDzdAhyIzti3ndoDhNkFjbsmsbVlOItQWJlwYBHS8dh4l5BwGtFdIweYsgQHmLILmnEIC5pyD5wxCA+cMgOeAQwDngPXlFsz2/DnAen9bGErsOwwLXYoSopwkApp4G1ET9pkMzr2BqokLUtQUAU9cWojYxALjaxAD1pQFAk8gDOwFqhPXB1ggHqPPWB1vnHaBWXx98rb7+fgt1GPZbgMuCe2bUsTd8JPryZ9Dj+LzQAWf5/f8D9b1r2gDq4B5/VN9/qA3j/kP1PaTKMO8hVd8HrAzzPmDUwE46FawFi73c2vvxdWGzH1+7p4IuQE+F5zCFcl8MVdj1xVDubaIKu94myv1pNGHZn0a5x5AmUI+hHylQ1T5RikCf8PTjl6q9vhRh3+sLyZqKZzAK9GuD87na0e8CPfdU+yaqAfbYJ2ceeh0CvS+10EHykZ54sH9pddU+PEsFVMvo9aBVQtEetIp9hJVQuI+wXi9oHRTvBa3Xz1sFLv28UTTDuye7Bpx6smOd6NlXXwO4rz4bmcAH1IY9DNAMfDYCb0lD67Rq8WHmfAtDBQJyMfzOKBFHhI+fNKXndc6ZEQc+Z2ZgtDFVzgqShs9ZQZywqYziZ857snHYVc7sEgVXU22ltzXOXZMENz5LX5aZ5RVwh7kTUm0lhcb5h2IQOf9Q4wxLKcicYWk4h7TMtchuTSkUi1A4S1YCcmfJ6pwH7A3J84ANZzqXY91wMt5BPvDv6/z7z+Wu3NnqTf5sdZdNPgl2UL4Q1iU27H7bOUVZhpziv6AfLnaT8Meq14+OOUDGj85fXKgIXJufoR6hQF6g1kOpDV7o1b3MLBzu+Q8t/YB/D0a2b/CSCDhsc0Osm5nq7I0j8Nw3YZwh9Zlw67wnjE0rUGClsEZ4jpXWVO3xOvkLAqk/C4r1jUbFxpCJGEkStJmoF8ylOQ5RXcEThIS5Wdx8vU3JGrilzcwR3JxlVBo51lLFmimoNvwOQcPRqPr/w2fX35JLGqAg9gdE4ylNg416x7zppSCbVsvviqOwdzM0K6YbBrHrs9O97ee7GMXi4juB+WECb3HxoGMW03uXaIw0HBsrrXHHx0vbNhAQpZMi7++CfxT41ezlzR2juJHys2nYa8QF2dUVY7ZLsL2Ix+d6Ph23l88fNFq2x9P5qEW3euAx0Kw+37tQvOM4GxwGM2u5TEO5CC0rIg40cFRPnER81FIbixBhTC5/pw1NX/QBkSHypYZNuOhe5iRUPXEKmrrs2HlUkpiELlW28sDlsCmjXiktbou4QszzLIrMIlIkgFWZtQMZrA0Xw6Hs2gjbiIMjVlWoTu5Zu+WFsanKLoFooqEfZxb9LgMik7ZzFlWYns9IGnKSdSUQs1PBciqhItfvld5fHb36TddNt1KLDyB9d/uUq8nv6HCQo9ntnwvEYM79brX2Athh2GvsF6YcdWsRd3tV307NI4nS8XQSL0aH0257/azb7e50GC3iyXScRvoy81/fk5XKYs0qkQAAAABJRU5ErkJggg=="
              alt="mypage-register-bookmark-icon"
            />
            내가 북마크한 문제
          </span>
          <button
            id="sort-by-latest"
            onClick={() => {
              setSort('question_createdDate')
            }}>
            최신순
          </button>
          <button
            id="sort-by-bookmark"
            onClick={() => {
              setSort('question_bookmarkCount')
            }}>
            인기순
          </button>
        </div>
        <QuestionList tagList={[]} sortBy={sort} word={''} type={'bookmark'} />
      </div>
    </div>
  )
}

export default MyBookmarkQuestion
