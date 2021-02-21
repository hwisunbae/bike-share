import hashlib
from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    userid = request.COOKIES.get("o_userid")
    if userid:
        context = {}
        return render(request, 'operator/o_index.html', context)
    else:
        return render(request, 'operator/o_login.html')
