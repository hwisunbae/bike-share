from django.shortcuts import render
from django.http import HttpResponse
from u_login.models import *
from django.views.decorators.csrf import csrf_exempt
# Create your views here.


def index(request):
    context = {}
    context['login'] = 'hello'
    return render(request, 'user/u_login.html', context)

@csrf_exempt  # when you need ajax you must use it! to skip from verification
def login(request):
    if request.POST:
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = user_account.objects.filter(username = username)
        if user:
            if user[0].password == password:
                response = HttpResponse('success')
                response.set_cookie("u_userid", user[0].id,604800)
                response.set_cookie("u_username", user[0].username,604800)
                return response
            else:
                return HttpResponse("passworderror")
        else:
            return HttpResponse("usernameerror")

# show user find password
def findPassword(request):
    return render(request, 'user/u_find_password.html')

@csrf_exempt
def findPassword_do(request):
    if request.POST:
        email = request.POST.get("email")
        password = request.POST.get("password")
        user_account.objects.filter(username=email).update(password=password)
        return HttpResponse("success")
    else:
        return HttpResponse("false")