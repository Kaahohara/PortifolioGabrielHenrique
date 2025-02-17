
# forms.py
from django import forms
from .models import Publicacao, Categoria, Post
from django_summernote.widgets import SummernoteWidget


class publicacaoForm(forms.ModelForm):
    class Meta:
        model = Publicacao
        fields = ['id', 'imagem', 'categoria']
        widgets = {
                    'imagem': forms.ClearableFileInput(attrs={'multiple': False}),
                }

class categoriaForm(forms.ModelForm):
    class Meta:

        model = Categoria
        fields = ['id', 'nome']

class postForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['titulo', 'conteudo']  

    conteudo = forms.CharField(widget=SummernoteWidget())