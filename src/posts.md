---
title: 'Dev Diaries'
layout: 'layouts/feed.html'
pagination:
  data: collections.posts
  size: 5
permalink: 'posts{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---
The latest posts about the development of the Tangled Wilds.
