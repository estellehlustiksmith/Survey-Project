from django.shortcuts import render, redirect
from .forms import ResponseForm
from .forms import Consent
from .forms import Interview

def landing_page(request):
    if request.method == 'POST':
        form = Consent(request.POST)
        if form.is_valid():
            landing_page = form.save(commit=False)
            landing_page.save()
            return redirect('questionnaire')
    else:
        form = Consent()
    return render(request,'questionnaire/landing_page.html', {'form': form})

def response_form(request):
    #form = ResponseForm()
    if request.method == "POST":
        form = ResponseForm(request.POST)
        if form.is_valid():
            questionnaire = form.save(commit=False)
            questionnaire.save()
            return redirect('thankyou')
          
    else:
        form = ResponseForm()
    return render(request, 'questionnaire/response_form.html', {'form': form})

def ty_form_complete(request):
    return render(request,'questionnaire/ty_form_complete.html', {})

def interview(request):
    if request.method == 'POST':
        form = Interview(request.POST)
        if form.is_valid():
            interview = form.save(commit=False)
            interview.save()
            return redirect('thankyou')
    else:
        form = Interview()
    return render(request,'questionnaire/interview.html', {'form': form})

   # return render(request,'questionnaire/interview.html', {})
# Create your views here.
