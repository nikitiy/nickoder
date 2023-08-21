from django.shortcuts import render

# Create your views here.


def halaim(request):
    return render(request, 'portfolio/halaim.html')
