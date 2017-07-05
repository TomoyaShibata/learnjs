'use strict'
const learnjs = {}

learnjs.problemView = () => $('<div class="problem-view">').text('Coming soon!')

learnjs.showView = (hash) => {
  const routes = {
    '#problem-1': learnjs.problemView
  }
  const viewFn = routes[hash]
  if (viewFn) {
    $('.view-container').empty().append(viewFn())
  }
}
