from django.shortcuts import render, redirect
from .forms import ResponseForm

def landing_page(request):
    return render(request,'questionnaire/landing_page.html', {})

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
# Create your views here.
