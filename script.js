document.getElementById('output').style.visibility='hidden';
document.getElementById('lbsInput').addEventListener('input',function(e)
{
    document.getElementById('output').style.visibility='visible';
    const lbs=e.target.value;
    document.getElementById('gramOutput').innerHTML=lbs/0.0022046;
    document.getElementById('kgOutput').innerHTML=lbs/2.2046;
    document.getElementById('OzOutput').innerHTML=lbs*16;
})