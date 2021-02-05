from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def index(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request,'admin/a_add_operator.html',context)

def addNewOperator(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request,'admin/a_manage_operator.html',context)