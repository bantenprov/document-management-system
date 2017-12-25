---
layout: index
title: Aplikasi
description: Index dokumen aplikasi.
group: aplikasi
---

{%- for group in site.data.nav -%}
  {%- assign group_slug = group.title | slugify -%}

  {%- if group_slug == page.group -%}
    {%- for docs in group.pages -%}
      {%- assign docs_slug = docs.title | slugify -%}

      <div class="card mb-3">
        <h4 class="card-header">
          {{ group.title }} <i class="fa fa-angle-double-right" aria-hidden="true"></i> {{ docs.title }}
        </h4>

        <div class="list-group list-group-flush">
          {%- for doc in docs.pages -%}
            {%- assign doc_slug = doc.title | slugify -%}

            <a href="{{ site.baseurl }}/document/{{ group_slug }}/{{ docs_slug }}/{{ doc_slug }}/" class="list-group-item list-group-item-action">
              {{ doc.title }}
            </a>
          {%- endfor -%}
        </div><!-- /.list-group -->
      </div><!-- /.card -->

    {%- endfor -%}
  {%- endif -%}
{%- endfor -%}
