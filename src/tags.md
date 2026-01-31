---
title: 'Tag Archive'
layout: 'layouts/devlog.html'
pagination:
  data: collections
  size: 1
  alias: tag
  filter: ['all', 'nav', 'blog', 'work', 'featuredWork', 'people', 'rss']
permalink: '/tags/{{ tag | slugify }}.html'
---
