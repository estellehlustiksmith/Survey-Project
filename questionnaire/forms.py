from django import forms
from .models import Response
from .models import Consent
from .models import Interview

class ResponseForm(forms.ModelForm):
    NUMBERS = [('1','1'),('2','2'),('3','3'),('4','4'),('5','5')]
    question1 = forms.CharField(
        label='I enjoy looking at art.',
        widget=forms.RadioSelect(choices=NUMBERS))
    
    CHOICES = [('Y','Yes'),('N','No'),('IDK',"I don't know")]
    question2 = forms.CharField(
        label='Are you familiar with this artwork or the artist?', 
        widget=forms.RadioSelect(choices=CHOICES))
    
    question3 = forms.CharField(label='If yes what do you know about it?',
        widget=forms.Textarea(attrs={'rows':10,'cols':70}))
        
    question4 = forms.CharField(widget=forms.Textarea(attrs={'rows':10,'cols':70}))
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

class Interview(forms.ModelForm):
    over18 = forms.BooleanField(required = True, label='I am over 18 years old.')
    email = forms.CharField(label='Email:',
        widget=forms.TextInput(attrs={'size':60}))
    class Meta:
        model = Interview
        fields=('over18','email')
        