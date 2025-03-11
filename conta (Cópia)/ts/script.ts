const passwordIcons:any = document.querySelectorAll('.password-icon');



passwordIcons.forEach((icon:any) =>{
    icon.addEventListener('click',function(this:any){
        const input = this.parentElement.querySelector('.form-control');
        input.type = input.type === 'password'?'text' : 'password';
        this.classList.toggle('fa-eye');
    })
})