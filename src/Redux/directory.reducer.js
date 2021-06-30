const INITIAL_STATE = {
  sections: [
    {
      title: 'Ancient Books',
      imageUrl: 'https://images.unsplash.com/photo-1489421471208-251cc68284b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80',
      id: 1,
      linkUrl: 'store/ancient'
    },
    {
      title: 'Modern Books',
      imageUrl: 'https://images.unsplash.com/photo-1571167713125-0792be4b1062?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
      id: 2,
      linkUrl: 'store/modern'
    },
    {
      title: 'Used Books',
      imageUrl: 'https://images.unsplash.com/photo-1561532409-8329daaeda83?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80',
      id: 3,
      linkUrl: 'store/used'
    },
    {
      title: 'New Books',
      imageUrl: 'https://images.unsplash.com/photo-1607473128383-0cf6c96f0689?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
      id: 4,
      linkUrl: 'store/new'
    }
  ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer
