from django.db import models
from django_summernote.fields import SummernoteTextField

class Categoria(models.Model):
    nome = models.CharField(max_length=100)

    def __str__(self):
        return self.nome

class Post(models.Model):
    titulo = models.CharField(max_length=200)
    conteudo = SummernoteTextField() 

class Publicacao(models.Model):
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    imagem = models.ImageField(upload_to='imagens/', blank=True, null=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='Textos')

