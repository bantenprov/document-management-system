---
layout: index
title: Document
description: Index Document Management System.
---

{%- for group in site.data.nav -%}
  {%- assign group_slug = group.title | slugify -%}

  <div class="card mb-3">
    <h4 class="card-header">
      {{ group.title }} <a class="float-right" href="{{ site.baseurl }}/document/{{ group_slug }}/"><i class="fa fa-slack" aria-hidden="true"></i></a>
    </h4>

    <div class="list-group list-group-flush">
      {%- for docs in group.pages -%}
        {%- assign docs_slug = docs.title | slugify -%}

        <a href="{{ site.baseurl }}/document/{{ group_slug }}/{{ docs_slug }}/" class="list-group-item list-group-item-action">
          {{ docs.title }}
        </a>
      {%- endfor -%}
    </div><!-- /.list-group -->
  </div><!-- /.card -->
{%- endfor -%}
