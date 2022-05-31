const CREATE = "article/CREATE";
const DELETE = "article/DELETE";
const UPDATE = "article/UPDATE";

export const createArticle = ({ title, content, author }) => {
  return {
    type: CREATE,
    article: {
      title: title,
      contents: content,
      author: author,
    },
  };
};

export const deleteArticle = (id) => {
  return {
    type: DELETE,
    id,
  };
};

export const updateArticle = (id) => {
  return {
    type: UPDATE,
    id,
  };
};

const initialState = {
  articleNum: 0,
  articles: [
    {
      id: 0,
      title: "공지",
      contents:
        "이 공간은 익명으로 운영되는 게시판입니다. 누구나 자유롭게 사용할 수 있지만, 개인정보를 악용 시엔 커뮤니티 서비스를 이용하시지 못하게 될 수도 있습니다",
      author: "관리자",
    },
  ],
};

export default function articleReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,

        //articles: [...state.articles, action.article,],
        // FIXME: 위의 주석의 방식대로 ID를 추가할 수 있는 방법은?

        articles: state.articles.concat({
          ...action.article,
          id: state.articleNum + 1,
        }),
        articleNum: state.articleNum + 1,
      };
    case UPDATE:
      return {
        state,
      };
    case DELETE:
      return {
        ...state,
        articles: state.article.filter((article) => {
          return article.id !== action.id;
        }),
      };
    default:
      return state;
  }
}
