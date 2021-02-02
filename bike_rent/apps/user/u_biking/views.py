from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def index(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request,'usear/u_biking.html',context)