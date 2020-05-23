from django import forms
from .models import Response
from .models import Consent

class ResponseForm(forms.ModelForm):
    OPTIONS = (
        ("a","Yes"),
        ("b","No"),
        ("c","I don't know")
        )
    question1 = forms.MultipleChoiceField(choices=OPTIONS, widget=forms.CheckboxSelectMultiple, required=True, label='Have you seen this work before')
    question2 = forms.CharField(label='If yes where from?')
    question3 = forms.CharField(label='What do you think the artwork is about?')
    question4 = forms.CharField(widget=forms.TextInput(attrs={'size':80}))
    class Meta:
        model = Response
        fields = ('question1','question2','question3','question4','question5', 'drawing')
        widgets = {'drawing': forms.HiddenInput()}#

class Consent(forms.ModelForm):
    consent0 = forms.BooleanField(required = True, label='I am over 18 years old.')
    consent1 = forms.BooleanField(required = True, label='I confirm that I have read and understand the information for the above study. I have had the opportunity to consider the information, ask questions and have had these answered satisfactorily.')
    consent2 = forms.BooleanField(required = True, label='I understand that my participation is voluntary and that I am free to withdraw at any time, without giving any reason, and without any adverse consequences or academic penalty.')
    consent3 = forms.BooleanField(required = True, label='I understand that research data collected during the study may be looked at by designated individuals from the University of Oxford where it is relevant to my taking part in this study. I give permission for these individuals to access my data.')
    consent4 = forms.BooleanField(required = True, label='I understand that this project has been reviewed by, and received ethics clearance through, the University of Oxford Central University Research Ethics Committee.')
    consent5 = forms.BooleanField(required = True, label='I understand who will have access to personal data provided, how the data will be stored and what will happen to the data at the end of the project.')
    consent6 = forms.BooleanField(required = True, label='I understand how this research will be written up and published.')
    consent7 = forms.BooleanField(required = True, label='I understand how to raise a concern or make a complaint.')
    consent8 = forms.BooleanField(required = True, label='I agree to take part in the study.')
    class Meta:
        model = Consent
        fields=('consent0','consent1','consent2','consent3','consent4','consent5','consent6','consent7','consent8')