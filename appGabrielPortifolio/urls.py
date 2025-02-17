# meuapp/urls.py

from django.urls import path
from .views import  index, portifolio, production, cadastrar_publicacao, sucesso, cadastrar_categoria
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', index, name='index'), 
    path('portifolio/<int:id>/', portifolio, name='portifolio'),  
    path('production/', production, name='production'),  
    path('cadastrar_publicacao/', cadastrar_publicacao, name='cadastrar_publicacao'),
    path('cadastrar_categoria/', cadastrar_categoria, name='cadastrar_categoria'),
    path('sucesso/', sucesso, name='sucesso'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)