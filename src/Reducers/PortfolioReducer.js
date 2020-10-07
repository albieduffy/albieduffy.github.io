const initState = {
  projects: [],
  blogs: []
}

const PortfolioReducer = (state = initState, action) => {
  switch(action.type) {
    case 'ADD_PROJECT':
      return {...state, projects: action.payload}
    case 'ADD_BLOG':
      return {...state, blogs: action.payload}
    default:
      return state
  }
}

export default PortfolioReducer;
