from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import HttpResponse
from django.core.mail import send_mail, EmailMultiAlternatives
from django.conf import settings
import numpy as np
# Create your views here.
from django.views.decorators.csrf import csrf_exempt
import json
import hashlib
from u_login.models import *


def index(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request,'user/u_register.html',context)




# Create your views here.

@csrf_exempt  # when you need ajax you must use it! to skip from verification
def check_mail(request):
    # print(request.POST)
    # print(request.GET)
    # print(request.body)
    if request.POST:
        subject = 'Register account '
        text_content = 'important.'
        email = request.POST.get('email')
        code = np.random.randint(10000,99999)
        html_content = '<p>The email code is <strong>'+str(code)+'</strong>邮件</p>'
        from_email = settings.DEFAULT_FROM_EMAIL
        msg = EmailMultiAlternatives(subject, text_content, from_email, [email])
        msg.attach_alternative(html_content, "text/html")
        msg.send()
        md5code = md5value(str(code).encode())
        # request.session['confirmCode'] = md5code
        # request.session.set_expiry(300)  # 设置5分钟后过期
        # print('判断缓存中是否有:', request.session.get('confirmCode'))
        # data = {}
        # data["data"] = "success"
        # data["confirmCode"] = code
        # data1 = json.dump(data)
        # print(code)
        return HttpResponse(md5code)



def md5value(s):
    md5 = hashlib.md5()
    md5.update(s)
    return md5.hexdigest()
