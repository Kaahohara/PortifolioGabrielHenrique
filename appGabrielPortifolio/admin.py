from django.contrib import admin

from .models import Publicacao, Categoria, Post

# Register your models here.
admin.site.register(Categoria)
admin.site.register(Publicacao)
admin.site.register(Post)