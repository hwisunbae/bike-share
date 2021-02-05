from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def index(request):
    if request.GET:
        pass
    else:
        userid = request.COOKIES.get("userid")
        if userid:
            context = {}
            context['login'] = 'hello'
            return render(request,'admin/a_index.html',context)
        else:
            return render(request, 'admin/a_login.html')

