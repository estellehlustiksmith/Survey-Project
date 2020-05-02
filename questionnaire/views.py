from django.shortcuts import render
from .forms import ResponseForm

def response_form(request):
    #form = ResponseForm()
    if request.method == "POST":
        form = ResponseForm(request.POST)
        if form.is_valid():
            questionnaire = form.save(commit=False)
            questionnaire.save()
            #will need a redirect to a thank you page
    else:
        form = ResponseForm()
    return render(request, 'questionnaire/response_form.html', {'form': form})

# Create your views here.
