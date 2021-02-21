from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def index(request):
    userid = request.COOKIES.get("u_userid")
    if userid:
        context = {}
        return render(request, 'user/u_index.html', context)
    else:
        return render(request, 'user/u_login.html')

