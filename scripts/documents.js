---
---
{% assign id = 0 %}
var posts = [
  {% for post in site.posts %}
    {
      "title": "{{ post.title | escape }}",
      "description": "{{ post.description | escape }}",
      "content": "{{ post.content | strip_html | strip_newlines | escape }}",
      "url": "{{ post.url | escape }}",
      "id": "{{id}}"
    }{% unless forloop.last %},{% endunless %}
  {% assign id = id | plus: 1 %}{% endfor %}
];
