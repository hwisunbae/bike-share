"""bike_rent URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('a_login/', include('a_login.urls')),
    path('a_index/', include('a_index.urls')),
    path('a_manage_bike_map/', include('a_manage_bike_map.urls')),
    path('u_index/', include('u_index.urls')),
    path('u_login/', include('u_login.urls')),
    path('u_register/', include('u_register.urls')),
    path('u_rent_bike/', include('u_rent_bike.urls')),
    path('u_user_information/', include('u_user_information.urls')),
    path('u_biking/', include('u_biking.urls')),
    path('u_bike_question/', include('u_bike_question.urls')),
    path('u_map_show_services/', include('u_map_show_services.urls')),
]
