from django.shortcuts import render
from .forms import ResponseForm

def response_form(request):
    form = ResponseForm()
    return render(request, 'questionnaire/response_form.html', {'form': form})

# Create your views here.
