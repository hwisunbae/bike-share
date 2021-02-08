from django.shortcuts import render
from django.http import HttpResponse
from a_login.models import *
from django.views.decorators.csrf import csrf_exempt

# Create your views here.


def index(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request,'operator/o_login.html',context)


@csrf_exempt  # when you need ajax you must use it! to skip from verification
def login(request):
    if request.POST:
        username = request.POST.get('username')
        password = request.POST.get('password')
        remember = request.POST.get('remember')
        user = admin_account.objects.filter(username = username)

        if user:
            if user[0].password == password:
                response = HttpResponse('success')
                response.set_cookie("userid", user[0].id,604800)
                response.set_cookie("username", user[0].username,604800)
                response.set_cookie("password", user[0].password,604800)
                return response
            else:
                return HttpResponse("passworderror")
        else:
            return HttpResponse("usernameerror")


# create a account by myself just a test
def saveAccount():
    # id
    # name
    # type(real admin/ manage_user/ manage_oprater/manage/bike)
    # telephone
    # username  (emain)
    # password
    # location
    password = '123456'
    md5code = md5value(str(password).encode())
    admin = admin_account.admin_account(name='admin',type='admin',telephone='911911',username='139@qq.com',password=md5code,location='Glasgow')
    admin.save()

# do the md5
def md5value(s):
    md5 = hashlib.md5()
    md5.update(s)
    return md5.hexdigest()