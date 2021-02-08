import hashlib
from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    # if get POST request
    if request.POST:
       pass
    # the first request, just show the pages
    else:
        # saveAccount()
        context = {}
        context['login'] = 'hello'
        return render(request,'operator/o_index.html',context)


