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
            return redirect('ty_form_complete.html', pk=questionnaire.pk)
    else:
        form = ResponseForm()
    return render(request, 'questionnaire/response_form.html', {'form': form})

# Create your views here.
