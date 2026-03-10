---
title: 'Home'
metaDesc: 'A website featuring art; both two and three-dimensional.'
layout: 'layouts/home.html'
intro:
    title: 'Sketchbook Heron'
    tagline: 'Peruse a portfolio of (mostly) digital art'
artworks:
  title: 'Latest Artwork'
  tagline: 'Take a gander!'
pagination:
  data: collections.artworks
  size: 8
permalink: '/{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: '<-'
paginationNextText: '->'
paginationAnchor: '#artwork-list'
---
