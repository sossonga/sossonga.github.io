---
title: 'Tag Archive'
layout: 'layouts/posts.html'
pagination:
  data: collections
  size: 1
  alias: tag
  filter: ['all', 'nav', 'blog', 'artwork', 'rss']
permalink: '/tags/{{ tag | slugify }}.html'
---
