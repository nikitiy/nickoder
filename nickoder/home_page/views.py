from django.shortcuts import render
from clients.forms import EmailForm

# Create your views here.


def home_page(request):
    data = {
        'form': EmailForm
    }
    return render(request, 'home_page/home.html', data)
