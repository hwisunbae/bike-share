from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt

from a_login.views import *
from o_login.models import *

def index(request):
    if request.GET:
        pass
    else:
        # saveAccount() # FOR TESTING PURPOSE
        context = {}
        context['login'] = 'hello'
        return render(request, 'operator/o_login.html', context)


@csrf_exempt  # when you need ajax you must use it! to skip from verification
def login(request):
    if request.POST:
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = operator_account.objects.filter(username=username)

        if user:
            if user[0].password == password:
                response = HttpResponse('success')
                response.set_cookie("userid", user[0].id, 604800)
                response.set_cookie("username", user[0].username, 604800)
                response.set_cookie("password", user[0].password, 604800)
                return response
            else:
                return HttpResponse("passwordError")
        else:
            return HttpResponse("usernameError")

@csrf_exempt
def logout(request):
    if request.POST:
        response = HttpResponse('success')
        response.delete_cookie("userid")
        response.delete_cookie("username")
        response.delete_cookie("password")
        return response
    else:
        return HttpResponse("logoutError")


# TESTING PURPOSE : create a account
def saveAccount():
    password = '123456'
    md5code = md5value(str(password).encode())
    operator = operator_account(
        username='op@gmail.com',
        password=md5code,
        type='operator',
        telephone='34323432',
        location='Glasgow')
    operator.save()