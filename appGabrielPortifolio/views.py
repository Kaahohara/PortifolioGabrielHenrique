# meuapp/views.py

from django.shortcuts import render, redirect, get_object_or_404
from .models import Publicacao, Post
from .forms import publicacaoForm, categoriaForm, postForm
def index(request):
    return render(request, 'index.html')

def portifolio(request, id):
    post = get_object_or_404(Post, id=id)
    item = get_object_or_404(Publicacao, post=post)

    return render(request, 'portifolio.html',{'item': item, 'post':post})

def production(request):
    return render(request, 'production.html')

def cadastrar_publicacao(request):
    if request.method == 'POST':
        form = publicacaoForm(request.POST, request.FILES)
        post_form = postForm(request.POST)
        if form.is_valid() and post_form.is_valid():
            post=post_form.save()
            publicacao = form.save(commit=False) 
            publicacao.post = post
            publicacao.save()


            return redirect('sucesso')
    else:
        form = publicacaoForm()
        post_form = postForm(request.POST)
    return render(request, 'cadastrar_publicacao.html', {'form': form, 'post_form':post_form})

def sucesso(request):
    return render(request, 'sucesso.html')


def cadastrar_categoria(request):
    if request.method == 'POST':
        form = categoriaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('sucesso')
    else:
        form = categoriaForm()
    return render(request, 'cadastrar_categoria.html', {'form': form})

def sucesso(request):
    return render(request, 'sucesso.html')