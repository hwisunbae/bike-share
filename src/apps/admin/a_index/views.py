from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def index(request):
    userid = request.COOKIES.get("userid")
    if userid:
        context = {}
        return render(request, 'admin/a_index.html', context)
    else:
        return render(request, 'admin/a_login.html')